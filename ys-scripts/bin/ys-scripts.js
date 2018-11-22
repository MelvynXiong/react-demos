#! /usr/bin/env node

'use strict';

const program = require('commander');
const packageJson = require('../package.json');

let command;

program
  .version(packageJson.version)
  .arguments('<command>')
  .action(function(val) {
    command = val;
  });
program.parse(process.argv);
 
console.log(command);
if (command === 'init') {
  console.log('初始化');
} else if (command === 'dev') {
  console.log('dev');
} else if (command === 'build') {
  console.log('build');
} else {
  console.log('other');
  process.exit(1);
}
