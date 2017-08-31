#!/usr/bin/env node  


'use strict';

var program = require('commander');
// var chalk = require('chalk');

//获取package的KEY
var _package = require("../package.json");
var ver = _package.version;
program
    .version(ver)
    //option方法参数是四个，
    //第一个是命令，第二个是描述，第三个是回调，第四个是命令的默认值
    .option('-s, --start', 'Install dependencies')
    .option('-r, --server', 'Run webpack-dev-server')
    .option('-b, --build', 'Build the [dist] folder')
    .option('-c, --clear', 'Clear the [dist] folder')
     .option('-cp, --component', 'Clear the [dist] folder')
.parse(process.argv);


if (program.start) {

    exec('npm start')
}

if (program.server) {
    exec('npm run server');

}

if (program.build) {
    exec('npm run build');
}

if (program.clear) {
    exec('npm run clean:build');
}
if (program.component) {
    exec('ng g component');
}

// 开始提示


console.log(`
 ┌--------------------------------------------┐
 |                                            |
 |  ` + chalk.yellow.bold(" 在线竞拍网 ") + `※` + chalk.cyan("", "auction-lib", "V" + ver, "") + ` |        
 |                                            |
 └--------------------------------------------┘
           `)

// D:\GitHub\Angular2\auction>auc -s
// module.js:471
//     throw err;
//     ^

// Error: Cannot find module 'commander'
//     at Function.Module._resolveFilename (module.js:469:15)
//     at Function.Module._load (module.js:417:25)
//     at Module.require (module.js:497:17)
//     at require (internal/module.js:20:19)
//     at Object.<anonymous> (C:\Users\Administrator\AppData\Roaming\npm\nod
// e_modules\auction\config\auc.js:3:15)
//     at Module._compile (module.js:570:32)
//     at Object.Module._extensions..js (module.js:579:10)
//     at Module.load (module.js:487:32)
//     at tryModuleLoad (module.js:446:12)
//     at Function.Module._load (module.js:438:3)