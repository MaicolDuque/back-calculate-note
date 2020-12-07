/**
 * Main application file
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

const express = require('express');
const expressConfig = require('./config/express');
const routesConfig = require('./routes')

// Setup server
const app = express();

expressConfig(app) //Config middleware express
routesConfig(app) // Config all routes

// Expose app
module.exports = app;
