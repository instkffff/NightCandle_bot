const bot = require('./modules')
const log4js = require('./modules/log')
const logger = log4js.getLogger('message')

	bot.start((ctx) => ctx.reply('Welcome'))
	bot.help((ctx) => ctx.reply('Send me a sticker'))
	bot.on('sticker', (ctx) => ctx.reply('👍'))
	bot.hears('hi', (ctx) => ctx.reply('Hey there'))
	bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))

bot.use((ctx) => {logger.info(ctx.message)})

bot.startPolling()
