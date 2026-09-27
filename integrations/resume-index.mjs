/** Match production's public directory-index URL in the Astro development server. */
export default function resumeIndex() {
  return {
    name: 'resume-directory-index',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use((request, _response, next) => {
          if (request.url?.split('?')[0] === '/resume/') {
            request.url = request.url.replace('/resume/', '/resume/index.html');
          }
          next();
        });
      },
    },
  };
}
