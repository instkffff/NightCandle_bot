const bot = require('./modules')
const log4js = require('./modules/log')
const logger = log4js.getLogger('message')
const errlogger = log4js.getLogger('default')

	bot.start((ctx) => ctx.reply('Welcome'))
	bot.help((ctx) => ctx.reply('Send me a sticker'))
	bot.on('sticker', (ctx) => ctx.reply('👍'))
	bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.use((ctx) => {logger.info(ctx.message)})
bot.catch((err) => {logger.debug(err)})

bot.startPolling()
