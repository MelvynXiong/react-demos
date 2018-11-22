const envinfo = require('envinfo');


let test = envinfo.run(
    {
      System: ['OS', 'CPU'],
      Binaries: ['Node', 'Yarn', 'npm'],
      Browsers: ['Chrome', 'Firefox', 'Safari'],
      npmPackages: ['styled-components', 'babel-plugin-styled-components'],
    },
    { json: true, console: true, showNotFound: true }
  ).then(console.log);