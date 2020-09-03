import { random, generateLog, printLog, countBtn } from './utils.js'
import Pokemon from './pokemon.js'
import { pokemons } from "./pokemons.js"

class Game {
    startGame = () => {
        let Player1 = this.createPokemon(pokemons, 'character')
        let Player2 = this.createPokemon(pokemons, 'enemy')
        
        this.renderAttackBtns(Player1, Player2)
    }

    createPokemon (pokemonArr, role) {
        const pokemon = pokemonArr[random(0, pokemonArr.length-1)]
        pokemon.selectors = role
        return new Pokemon(pokemon)
    }

    renderAttackBtns = (character, enemy) => {
        const $control = document.querySelector('.control')

        character.attacks.forEach((item) => {
            let $btn = document.createElement("button");
            $btn.classList.add('button')
            $btn.innerText = item.name

            const btnCount = countBtn(item.maxCount, $btn)
            
            $btn.addEventListener('click', function() {
                btnCount()
                enemy.changeHP(random(item.minDamage, item.maxDamage), function(count) {
                    const log = generateLog(enemy, character, count)
                    printLog(log)
                })
            })

            $control.appendChild($btn)
        })
    }

}



export default Game