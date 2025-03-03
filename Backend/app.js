const express = require("express");
const app = express();

app.use(express.json());
const userrating = require('./routes/ratingRoute');

app.use('/api/v1', userrating);


module.exports = app

