const bot = require('./modules')
const log4js = require('./modules/log')
const logger = log4js.getLogger('message')
const errlogger = log4js.getLogger('default')
const admin = require('./modules/firebase.js')
const firebaseSession = require('./modules/firebase-session.js')

//bot test
	bot.start((ctx) => ctx.reply('Welcome'))
	bot.help((ctx) => ctx.reply('Send me a sticker'))
	bot.on('sticker', (ctx) => ctx.reply('👍'))
	bot.hears('hi', (ctx) => ctx.reply('Hey there'))

//firebase-session
  const database = admin.database()
	bot.use(firebaseSession(database.ref('sessions')))
	bot.on('text',(ctx,next) => {
		ctx.session.counter = ctx.session.counter || 0
		ctx.session.counter++
		return next()
	})
	bot.hears('/counter',({ reply,session,from }) => reply(`${session.counter} messages from ${from.username}`))

//log file
bot.use((ctx) => {logger.info(ctx.message)})
bot.catch((err) => {logger.debug(err)})

bot.startPolling()
