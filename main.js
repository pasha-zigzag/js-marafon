import Pokemon from "./pokemon.js"
import { random, generateLog, printLog, getKickNumber } from './utils.js'

const Player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    hp: 500,
    selectors: 'character'
})

const Player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selectors: 'enemy'
})

const characterKick = getKickNumber(10, Player1.kickDiv)
const enemyKick = getKickNumber(10, Player2.kickDiv)

Player1.kickBtn.addEventListener('click', function() {
    characterKick.call(this)
    Player2.changeHP(random(80), function(count) {
        const log = generateLog(Player2, Player1, count)
        printLog(log)
    })
})

Player2.kickBtn.addEventListener('click', function() {
    enemyKick.call(this)
    Player1.changeHP(random(70), function(count) {
        const log = generateLog(Player1, Player2, count)
        printLog(log)
    })
})