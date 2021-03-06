// The main module returns a default Api instance with an attached
// Api constructor if configuration changes are necessary.
let esi = require('eve-swagger')

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
  })

// Fetch all active alliance ids (could also call 'esi.alliances.all()')
esi.alliances(99003581).corporations().then(result => {
  for (let i=0; i<=result.length; i++){
    esi.corporations(result[i]).info().then(info =>{ 
    	var corpName = {};
        corpName[result[i]]={
          Ticker:info.ticker,
          Name:info.corporation_name, 
        }
        var corpList= Object.assign(corpName)
        console.log(corpName)
    })
  }
}).catch(error => {
  console.error(error)
})


