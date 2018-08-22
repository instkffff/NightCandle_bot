const bot = require('./modules')
const log4js = require('./modules/log')
const logger = log4js.getLogger('message')
const errlogger = log4js.getLogger('default')
const admin = require('./modules/firebase.js')
const firebaseSession = require('./modules/firebase-session.js')
const ep = require('evepraisal')
const commandParts = require('telegraf-command-parts')

bot.use(commandParts())

//bot test
	bot.start((ctx) => ctx.reply('Welcome! please check /help for more information'))
	bot.help((ctx) => ctx.reply('now you can use evepraisal here with commands "/price" '))
	//bot.on('sticker', (ctx) => ctx.reply('👍'))
	//bot.hears('hi', (ctx) => ctx.reply('Hey there'))
	bot.command('modern', ({ reply }) => reply('Yo'))
	bot.hears(/reverse (.+)/, ({ match, reply }) => reply(match[1]))


	

//firebase-user-auth
	bot.hears('/SignUp',({ reply,from}) => {

		admin.auth().getUser(`${from.id}`)
			.then(function(userRecord){
				reply(`You already SignUp,Please don't try it again`)
			})
			.catch(function(error){
				admin.auth().importUsers([{
				uid: `${from.id}`,
				displayName: `${from.first_name}`
				}])
				.then(reply(`Congratulation ${from.first_name} SignUp Success`))

			})
	
	})

//eveprice
	bot.command('price',(ctx) => {

    let item = ctx.state.command.args
    console.log(ctx.state.command.args)
    ep.create(
      `${item}`,
      'jita',
      {}
    ).then(
      (a) => {
        console.log(a.appraisal.totals.sell)

        ctx.reply(`JitaSellPrice:${a.appraisal.totals.sell} isk 
JitaBuyPrice:${a.appraisal.totals.buy} isk`)
        }
    )
  })


	

//firebase-session
  	const database = admin.database()
	bot.use(firebaseSession(database.ref('sessions')))
	bot.on('text',(ctx,next) => {
		ctx.session.counter = ctx.session.counter || 0
		ctx.session.counter++
		return next()
	})
	bot.hears('/counter',({ reply,session,from }) => reply(`${session.counter} messages from ${from.first_name}`))

//log file
bot.use((ctx) => {logger.info(ctx.message)})
bot.catch((err) => {logger.debug(err)})

bot.startPolling()

