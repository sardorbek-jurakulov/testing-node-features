const url = 'http:192.168.7.1/logger';

function log(message) {
  // to-do: bu yerda message'ni url'ga http post qilib jo'natish kodi bo'lishi kerak
  console.log(message);
}

module.exports = log;
console.log(module);