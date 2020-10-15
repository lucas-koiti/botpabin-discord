const Discord = require('discord.js')
const client = new Discord.Client()
var auth = require('./auth.json')

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})


bot_secret_token = auth.token

client.login(bot_secret_token)