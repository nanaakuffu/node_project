"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const crossOrigin = require('cors');
const router = require('./routes/api');

const app = express();

var corsOptions = {
    origin: '*/*'
};

app.use(router);
app.use(crossOrigin(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 4221, () => {
    console.log("Listening for requests:");
});