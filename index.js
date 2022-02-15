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

// let content = '';

// fs.readFile('./index.js', 'utf8', function(err, fileContent) {
//   if(err) {
//     throw err;
//   }
//   content = fileContent;

//   fs.writeFile('./newFile.js', content, function(err) {
//     if(err) {
//       throw err;
//     }
//     console.log('File write operation have been successful done!');
//   });
// });

// fs.rename('./newFile.js', 'myFile.js', function(err) {
//   if(err) {
//     throw err;
//   }
//   console.log("renaming has been successful done!");
// });

// fs.unlink('./myFile.js', function(err) {
//   if(err) {
//     throw err;
//   }
//   console.log("delating has been successful done!");
// });

fs.writeFile("./workWithHttpModule.js", "", (err) => {
  if(err) {
    throw err;
  }
  console.log("work with http module file successful created!");
});


