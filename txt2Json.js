const fs = require('fs');

const data = fs.readFileSync('./backup/extensions_20240814152124.txt','utf8')

const result = JSON.stringify({
    recommendations:data.split('\n').filter(Boolean)
},null,2)
console.log(result)
// fs.writeFileSync(`./.vscode/extensions-${Date.now()}.json`,,'utf8')