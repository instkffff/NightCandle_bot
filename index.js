//引入
const Telegraf = require('telegraf')

// 验证密钥
const bot = new Telegraf('687784594:AAGW31OcvTw7Fs9UX1QLHoqE5YXILT1u8mY')

// 机器人自动回复
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))

bot.startPolling()