/**
 * Config server
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

const app = require('./app')
const config = require('./config');

app.listen(config.port, config.ip, () => {
  console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
});
