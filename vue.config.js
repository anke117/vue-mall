const path = require("path");
const glob = require("glob");
const fs = require("fs");
const config = {
  entry: "main.js",
  html: "index.html",
  pattern: ["src/pages/*"]
};
const entryHtml = glob.sync("./src/pages/*/*.html");
let pages = {};
console.log(entryHtml);
entryHtml.forEach(filePath => {
  let fileName = filePath.substring(filePath.lastIndexOf("/") + 1, filePath.lastIndexOf("."));
  //  组建pages需要的值
  pages[fileName] = {
    entry: `src/pages/${fileName}/${fileName}.js`,
    template: `src/pages/${fileName}/${fileName}.html`,
    filename: `${fileName}.html`
  };
});
console.log(pages);
