const app = require('./app');

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//handle unhandled promise rejection
process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  server.close();
});