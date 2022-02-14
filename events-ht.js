const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogging', (arg) => {
  console.log("messageLogging eventi listen qilindi", arg);
});

emitter.emit('messageLogging', {name: "Sardorbek", surname: "Jo'raqulov"});