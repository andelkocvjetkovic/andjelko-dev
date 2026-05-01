import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { createServer } from 'node:net';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const format = parseFormat(process.argv.slice(2));
const outputFile = join(
  rootDir,
  'public',
  format === 'Letter' ? 'andjelko.cvjetkovic-resume-letter.pdf' : 'andjelko.cvjetkovic-resume.pdf',
);

let previewProcess;
let browser;

process.on('SIGINT', () => {
  void cleanup().finally(() => process.exit(130));
});

process.on('SIGTERM', () => {
  void cleanup().finally(() => process.exit(143));
});

try {
  await runCommand('pnpm', ['build'], 'Astro build');

  const port = await getFreePort();
  previewProcess = spawn('pnpm', ['preview', '--host', '127.0.0.1', '--port', String(port)], {
    cwd: rootDir,
    detached: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  const previewLogs = captureProcessLogs(previewProcess, 'astro preview');
  previewProcess.once('exit', (code, signal) => {
    if (code !== null && code !== 0) {
      previewLogs.push(`astro preview exited with code ${code}`);
    } else if (signal) {
      previewLogs.push(`astro preview exited via ${signal}`);
    }
  });

  const url = `http://127.0.0.1:${port}/resume?print=1`;
  await waitForReady(url, previewProcess, previewLogs);

  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluateHandle('document.fonts.ready').then((handle) => handle.dispose());
  await page.waitForTimeout(500);

  const pdf = await page.pdf({
    format,
    printBackground: true,
    tagged: true,
    scale: 0.9,
    margin: {
      top: '14mm',
      bottom: '14mm',
      left: '16mm',
      right: '16mm',
    },
  });

  await mkdir(dirname(outputFile), { recursive: true });
  await writeFile(outputFile, pdf);
  console.log(`Generated ${outputFile}`);
} catch (error) {
  console.error('Failed to generate resume PDF.');
  console.error(error instanceof Error ? error.stack || error.message : error);
  process.exitCode = 1;
} finally {
  await cleanup();
}

function parseFormat(args) {
  const formatIndex = args.indexOf('--format');
  const value = formatIndex === -1 ? 'A4' : args[formatIndex + 1];

  if (!value || !['A4', 'Letter'].includes(value)) {
    throw new Error('Invalid --format value. Use A4 or Letter.');
  }

  return value;
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.unref();
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      server.close(() => {
        if (!address || typeof address === 'string') {
          reject(new Error('Unable to allocate a free port.'));
          return;
        }

        resolve(address.port);
      });
    });
  });
}

async function runCommand(command, args, label) {
  const child = spawn(command, args, {
    cwd: rootDir,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  const logs = captureProcessLogs(child, label);
  const code = await new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('exit', resolve);
  });

  if (code !== 0) {
    throw new Error(`${label} failed with exit code ${code}.\n${logs.join('')}`);
  }
}

function captureProcessLogs(child, label) {
  const logs = [];
  const capture = (chunk) => {
    const text = chunk.toString();
    logs.push(text);
    if (logs.length > 80) {
      logs.shift();
    }
  };

  child.stdout?.on('data', capture);
  child.stderr?.on('data', capture);
  child.once('error', (error) => logs.push(`${label} failed to start: ${error.message}`));
  return logs;
}

async function waitForReady(url, child, logs) {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    if (child.exitCode !== null) {
      throw new Error(`Preview server exited before becoming ready.\n${logs.join('')}`);
    }

    try {
      const response = await fetch(url);
      if (response.status === 200) {
        return;
      }
    } catch {
      // Keep polling until the preview server accepts connections.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Timed out waiting for preview server at ${url}.\n${logs.join('')}`);
}

async function cleanup() {
  if (browser) {
    await browser.close().catch(() => {});
    browser = undefined;
  }

  if (previewProcess && previewProcess.exitCode === null) {
    try {
      process.kill(-previewProcess.pid, 'SIGTERM');
    } catch {
      previewProcess.kill('SIGTERM');
    }
  }
}
