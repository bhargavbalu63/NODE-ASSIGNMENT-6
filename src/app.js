const express = require('express');
const app = express();
const bodyparser=require('body-parser');

// Import routes
const blogRoute = require('./routes/blog');


//Router MIddlewares
app.use(express.json());
app.use(bodyparser.json());
app.use('/', blogRoute);               // here the imported blogroute is used in this form

module.exports = app;
