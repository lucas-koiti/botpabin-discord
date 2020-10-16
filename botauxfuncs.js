import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const champs = require('./championbyRole.json')


export function randomChoice(cond){

    switch (cond[0]) {
        case "comp":
            var comp = []

            for (var role in champs.lanes){
                if(champs.lanes.hasOwnProperty(role)){
                    comp.push(champs.lanes[role][Math.floor(Math.random()*champs.lanes[role].length)])
                }
            }            
            
            return "TOP: " + comp[0] + "\n" + "JUNGLE: " + comp[4] + "\n" + "MID: " + comp[2] + "\n" + "ADC: " + comp[1] + "\n" + "SUP: " + comp[3]

        case "top":
            return "TOP: " + champs.lanes["top"][Math.floor(Math.random()*champs.lanes["top"].length)]

        case "mid":
            return "MID: " + champs.lanes["mid"][Math.floor(Math.random()*champs.lanes["mid"].length)]

        case "jg":
            return "JUNGLE: " + champs.lanes["jungle"][Math.floor(Math.random()*champs.lanes["jungle"].length)]

        case "sup":
            return "SUP: " + champs.lanes["bot_sup"][Math.floor(Math.random()*champs.lanes["bot_sup"].length)]

        case "adc":
            return "ADC: " + champs.lanes["bot_carry"][Math.floor(Math.random()*champs.lanes["bot_carry"].length)]
    }
    
    return "wrong parameter"
}