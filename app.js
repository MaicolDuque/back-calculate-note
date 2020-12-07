/**
 * Main application file
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

const express = require('express');
const http = require('http');
const expressConfig = require('./config/express');

// Setup server
const app = express();

expressConfig(app) //Config middleware express

// Expose app
module.exports = app;
