import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const Discord = require('discord.js')
const client = new Discord.Client()
const auth = require('./auth.json')
import { randomChoice } from './botauxfuncs.js'

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
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


let bot_secret_token = auth.token

client.login(bot_secret_token)

