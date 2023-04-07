import { createRequire } from 'module'
import { randomChoice } from './botauxfuncs.js'

const require = createRequire(import.meta.url)
const auth = require('./auth.json')
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

let bot_secret_token = auth.token

client.login(bot_secret_token)

client.on('ready', () => {

    console.log("Connected as " + client.user.tag)
})

client.on('messageCreate', msg => {

    if (msg.author == client.user) { // Prevent bot from responding to its own messages

        return
    }
    
    if (msg.content.startsWith("!")) {

        processCommand(msg)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let args = splitCommand.slice(1) // All other words are args/parameters/options for the command

    if (primaryCommand == "help") {

        callHelp(args, receivedMessage)
    } else if (primaryCommand == "random") {

        callRandom(args, receivedMessage)
    } else {

        receivedMessage.channel.send("loading ...")
    }
}

function callHelp(args, receivedMessage){

    receivedMessage.channel.send("Te vira bixo, it's not rocket science")

    setTimeout(function() {

                receivedMessage.channel.send("just kidding, try use !random [comp/top/mid/sup/jg/adc]")
            }, 2000)
}

function callRandom(args, receivedMessage){
    let result = ""

    if (args.length == 0){

        receivedMessage.channel.send("Dude, c'mon, specifies what u want - comp/top/mid/sup/jg/adc")
    } 
    else if (args.legnt > 1) {

        receivedMessage.channel.send("Dude, c'mon, choose one - comp/top/mid/sup/jg/adc")
    } else {

        result = randomChoice(args)
        receivedMessage.channel.send(result)
    }
}


