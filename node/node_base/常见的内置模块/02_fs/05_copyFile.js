const fs = require("fs");
const path = require("path");
const resolve = (dir, filename) => path.resolve(dir, filename);

// 1. 接收导出的目录和导入的目录
srcPath = process.argv[2];
destPath = process.argv[3];

function copyFiles(srcPath, destPath) {
  if (!fs.existsSync(destPath)) {
    fs.mkdir(destPath, (err) => {
      if (!err) console.log("文件开始拷贝");
      const srcFiles = fs.readdirSync(srcPath, { withFileTypes: true });
      for (const file of srcFiles) {
        const srcFile = resolve(srcPath, file.name);
        const destFile = resolve(destPath, file.name);
        if (file.isFile() && file.name.endsWith(".js")) {
          fs.copyFileSync(srcFile, destFile);
          console.log("拷贝成功");
        } else if (file.isDirectory()) {
          copyFiles(srcFile, destFile);
        }
      }
    });
  }
}

copyFiles(srcPath, destPath);
