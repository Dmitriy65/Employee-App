const express = require('express');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.static(`${__dirname}`));
app.use(express.json());


//allow access for all domains
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

// handle request on current url
app.use('/api/v1/', userRouter);


//handle unknown errors
app.use((err, req, res, next) => {
  console.log(err);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;