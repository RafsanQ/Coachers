// Using Express
const express = require('express');
const app = express();


app.use(express.static("Templates"));

// Getting Routes
const routes = require('./Routes/Routes.js');
app.use(routes);

module.exports = app;