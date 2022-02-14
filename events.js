const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messageLogged', function() {
  console.log('Listener chaqirildi');
})

emitter.emit('messageLogged', {id: 1, url: 'http://...'});