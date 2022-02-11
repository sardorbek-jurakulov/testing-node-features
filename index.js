// const path = require('path');
// console.log(__filename);
// const pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require('os');
// const osInfo = os.userInfo();
// console.log(osInfo);

const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

// const files = fs.readdir('./', function(err, files) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(files);
//   }
// });

fs.readFile('./index.js', 'utf8', function(err, fileContent) {
  if(err) {
    throw err;
  }
  console.log(fileContent);
});