const express = require("express");
require('dotenv').config();
const app = express();

app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use("/", require('./routes/index'));
//error not found
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})
//catch all error
app.use((error, req, res, next) => {
  const status = error.status || 500;
  return res.status(status).json({
    status: 'error',
    code: status,
    message: error.message || 'Internal Server Error'
  })
})

module.exports = app;