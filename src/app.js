const { join } = require('path');
require('env2')('.env');
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);
app.set('port', process.env.PORT || 3000);

module.exports = app;
