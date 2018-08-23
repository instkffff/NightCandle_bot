// The main module returns a default Api instance with an attached
// Api constructor if configuration changes are necessary.
let esi = require('eve-swagger');

// Creating a new Api instance with a different configuration.
// All options, with their default values, are shown below.
let esi2 = esi({
    service: 'https://esi.tech.ccp.is',
    source: 'tranquility',
    agent: 'eve-swagger | https://github.com/lhkbob/eve-swagger-js',
    language: 'en-us',
    timeout: 6000,
    minTime: 0,
    maxConcurrent: 0
  });

// Fetch all active alliance ids (could also call 'esi.alliances.all()')
esi.alliances().then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});