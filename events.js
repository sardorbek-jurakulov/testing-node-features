const Logger = require('./logger.js');
const logger = new Logger();

logger.on('messageLogged', function(arg) {
  console.log('Listener chaqirildi', arg);
});

logger.log('message');