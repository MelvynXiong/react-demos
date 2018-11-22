const fs = require('fs-extra');
const os = require('os');
const spawn = require('cross-spawn');
const path = require('path');
const root = path.resolve();
const test = require('./envinfo-demo');
// const packageJson = {
//     test: 'xiong',
//     test1: '5',
// }
// fs.writeJsonSync(
//     path.join(root, 'test.json'),
//     packageJson,
//     {
//         spaces: 2,
//         EOL: os.EOL
//     }
// )
// fs.ensureDirSync('test');
// fs.writeFileSync(
//     path.join(root, 'test.json'),
//     JSON.stringify(packageJson, null, 2)
//   );
// console.log(require.resolve('./test.json'));
// fs.copySync(
//     require.resolve('./test.json'),
//     path.join(root, 'test01.json')
// );
// let childOutput = spawn.sync('npm', ['config', 'list']).output.join('');
delete require.cache[require.resolve('./envinfo-demo')];
console.log(require.cache);
