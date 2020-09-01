import { getById, endGame } from './utils.js'

class Selectors {
    constructor(name) {
        this.elHP = getById(`health-${name}`)
        this.elProgressbar = getById(`progressbar-${name}`)
        this.elDamage = getById(`${name}-damage`),
        this.kickBtn = getById(`btn-kick-${name}`),
        this.kickDiv = getById(`kick-count-${name}`)
    }
}

class Pokemon extends Selectors {
    constructor({name, hp, type, selectors}) {
        super(selectors)

        this.name = name
        this.hp = {
            current: hp,
            total: hp
        }
        this.type = type

        this.renderHP()
    }

    renderHP = () => {
        this.renderHPLife()
        this.renderProgressbarHP()
    }
    
    renderHPLife = () => {
        const {elHP, hp: {current, total}} = this
        elHP.innerText = current + ' / ' + total
    }
    
    renderProgressbarHP = () => {
        const {elProgressbar, hp: {current, total}} = this
        const procent = current * 100 / total
        elProgressbar.style.width = procent + '%'
    }

    changeHP = (count, cb) => {
        this.hp.current -= count
    
        if(this.hp.current <= 0) {
            this.hp.current = 0
            endGame(this)
        }

        this.renderHP()

        cb && cb(count)
    }
}

export default Pokemon