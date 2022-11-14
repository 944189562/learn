const path = require("path");
const fs = require("fs");

// const fs = require("fs/promises");

const filepath = "./abc.txt";

// const info = fs.statSync(filepath)
// console.log('run')
// console.log(info)

// callback
// fs.readFile(filepath, "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(data);
// });

// sync
// try {
//   const data = fs.readFileSync(filepath, "utf8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// promise
// async function example() {
//   try {
//     const data = await fs.readFile(filepath, { encoding: "utf8" });
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// example().finally(() => console.log('finally~'))

const content = "Some content~";

// fs.writeFile(filepath, content, { flag: "a+" }, (err) => {
//   if (err) {
//     console.error(err);
//   }
// });

// fs.appendFile("file.log", content, (err) => {
//   if (err) {
//     console.error(err);
//   }
// });

const folderName = "./src";

// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//   }
// } catch (error) {
//   console.error(error);
// }

// const isFile = (fileName) => fs.lstatSync(fileName).isFile();

// const arr = fs
//   .readdirSync(folderName)
//   .map((fileName) => {
//     return path.join(folderName, fileName);
//   })
//   .filter(isFile);

// console.log(arr);

// 重命名
// fs.rename(arr[0], "./src/test.log", (err) => {
//   if (err) {
//     console.error(err);
//   }
// });

// 递归删除目录
// fs.rm(folderName, { recursive: true }, (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log(`${folderName} is deleted!`)
// });

// fs-extra 库的使用
// const fsExtra = require("fs-extra");

// fsExtra.remove(folderName, (err) => {
//   console.error(err);
// });

fs.stat(filepath, (err, stats) => {
  if(err) {
    console.error(err)
    return
  }

  console.log(stats)
})
