const EventEmitter = require('events');
const fs = require('fs');

const emitter = new EventEmitter();

emitter.on('messageLogged', function(arg) {
  console.log('Listener chaqirildi', arg);
})

emitter.emit('messageLogged', {id: 1, url: 'http://...'});

fs.writeFile('./events-ht.js', '', function(err) {
  if(err) {
    throw err;
  }
  console.log("file created successful");
});