const fs = require("fs");

const now = new Date();
const timestamp = now
  .toISOString()
  .replace(/[-:T.]/g, "")
  .slice(0, 14);
// 构造文件名
const filename = `settings_${timestamp}.json`;

fs.copyFile("C:\\Users\\xpj\\AppData\\Roaming\\Code\\User\\settings.json", "./backup/" + filename, (err) => {
  if (err) throw err;
  console.log("文件已成功复制！");
});
