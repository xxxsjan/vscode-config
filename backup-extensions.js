const { exec } = require("child_process");

const now = new Date();
const timestamp = now
  .toISOString()
  .replace(/[-:T.]/g, "")
  .slice(0, 14);
// 构造文件名
const filename = `extensions_${timestamp}.txt`;

// 执行命令
exec(`code --list-extensions > ./backup/${filename}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令出错: ${error}`);
    return;
  }

  console.log("已成功将扩展列表写入文件");
});
