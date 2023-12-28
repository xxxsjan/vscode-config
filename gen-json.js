const fs = require("fs");
const path = require("path");

const folderPath = ".vscode";
const txtPath = path.resolve(__dirname, "extensions.txt");
const jsonPath = path.join(__dirname, folderPath, "extensions.json");

// 检查文件夹是否存在，如果不存在则创建
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// 读取本地txt文件
fs.readFile(txtPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const content = {
    recommendations: data
      .split("\n")
      .filter(Boolean)
      .map((m) => m.replace("\r", "")),
  };

  fs.writeFile(jsonPath, JSON.stringify(content, null, 2), "utf8", (err) => {
    if (err) {
      console.error("Error writing the file:", err);
      return;
    }
  });
});
