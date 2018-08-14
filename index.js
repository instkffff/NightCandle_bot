const bot = require('./modules')
const logger = require('./modules/log')

	bot.start((ctx) => ctx.reply('Welcome'))
	bot.help((ctx) => ctx.reply('Send me a sticker'))
	bot.on('sticker', (ctx) => ctx.reply('👍'))
	bot.hears('hi', (ctx) => ctx.reply('Hey there'))
	bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))

	bot.use((ctx) => {console.log(ctx.message)})


	logger('message').info(bot.use((ctx) => ctx.message))
	logger('callbackQuery').info(bot.use((ctx) => ctx.callbackQuery))


bot.startPolling()
