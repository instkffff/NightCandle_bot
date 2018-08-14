const loggerMessage = require('../modules/logger/logMessage')
const loggerCallbackQuery = require('../modules/logger/loggerCallbackQuery')

function logger(logtype) {

	if(logtype == 'message'){
		return loggerMessage
	}
	else if(logtype == 'callbackQuery'){
		return loggerCallbackQuery
	}

}
	
module.exports = logger