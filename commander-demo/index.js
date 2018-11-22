
function range(val) {
    return val.split('..').map(Number);
  }
  
  function list(val) {
    return val.split(',');
  }
  
  function collect(val, memo) {
    memo.push(val);
    return memo;
  }
  
  function increaseVerbosity(v, total) {
    return total + 1;
  }
  
  const program = require('commander');
  const chalk = require('chalk');

  program
  .version('0.1.0')
  .usage('xiong')
  .option('-f, --foo', 'enable some foo')
  .option('-b, --bar', 'enable some bar')
  .option('-B, --baz', 'enable some baz');

// must be before .parse() since
// node's emit() is immediate

// program.on('--help', function(){
//   console.log('')
//   console.log('Examplesfsdfsdf:');
//   console.log('  $ custom-help --help');
//   console.log('  $ custom-help -h');
// });

program.parse(process.argv);

console.log('stuff');
console.log(chalk.green('\nEnvironment Info:'));
  