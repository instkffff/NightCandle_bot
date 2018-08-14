//引入
const timestamp = require('time-stamp')

require('dotenv').config({path:'./config.env'})
	
const Telegraf = require('telegraf')

// 验证密钥
const bot = new Telegraf(process.env.BOT_TOKEN)

module.exports = bot