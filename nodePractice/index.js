const fs = require("fs");
const path = require("path");
//__dirname 获取当前命令行所在位置
const currentPath = path.join(__dirname, "a.js");

fs.readFile(currentPath, 'utf8', (err, data) => {
    console.log(err);
    console.log(data);

})

console.log("pop");