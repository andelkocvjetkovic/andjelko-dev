let cancelScroll = () => {};

/** A deliberately slower anchor journey, with native input able to interrupt it. */
export function scrollToAnchor(hash: string) {
  let target: HTMLElement | null;
  try {
    target = document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return;
  }
  if (!target) return;
  cancelScroll();
  const start = window.scrollY;
  const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const end = Math.max(0, Math.min(
    start + target.getBoundingClientRect().top - margin,
    document.documentElement.scrollHeight - window.innerHeight,
  ));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const focusTarget = () => {
    const temporary = !target.hasAttribute('tabindex');
    if (temporary) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    if (temporary) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  };
  if (location.hash !== hash) history.pushState(null, '', hash);
  if (reduced.matches || Math.abs(end - start) < 1) {
    window.scrollTo({ top: end, behavior: 'instant' });
    focusTarget();
    return;
  }
  const duration = Math.min(2000, 1400 + Math.abs(end - start) * .15);
  const started = performance.now();
  const events = new AbortController();
  let frame = 0;
  cancelScroll = () => { cancelAnimationFrame(frame); events.abort(); };
  const cancel = () => cancelScroll();
  for (const type of ['wheel', 'touchstart', 'pointerdown']) {
    window.addEventListener(type, cancel, { passive: true, signal: events.signal });
  }
  window.addEventListener('keydown', event => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Escape', 'Tab'].includes(event.key)) cancel();
  }, { signal: events.signal });
  const tick = (now: number) => {
    const progress = reduced.matches ? 1 : Math.min((now - started) / duration, 1);
    const eased = progress < .5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
    window.scrollTo({ top: start + (end - start) * eased, behavior: 'instant' });
    if (progress < 1) frame = requestAnimationFrame(tick);
    else { events.abort(); focusTarget(); }
  };
  frame = requestAnimationFrame(tick);
}
