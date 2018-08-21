//引入
const timestamp = require('time-stamp')

require('dotenv').config({path:'./config.env'})
	
const Telegraf = require('telegraf')

const Extra = require('telegraf/extra')

const Markup = require('telegraf/markup')



// 验证密钥
const bot = new Telegraf(process.env.BOT_TOKEN)

module.exports = bot



