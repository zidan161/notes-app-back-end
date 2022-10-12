const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const { NODE_ENV } = process.env

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
