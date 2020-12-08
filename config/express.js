/**
 * Express configuration
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');
const cors = require('cors')

module.exports = (app) => {
  const env = app.get('env');

  app.use(cors())
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(methodOverride());

  if (env === 'development' || env === 'test') {
    app.use(errorHandler()); // Error handler - has to be last
  }
};
