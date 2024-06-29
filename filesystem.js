const fs = require("fs");
// console.log(fs);

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(err, data);
});
