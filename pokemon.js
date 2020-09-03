import { getById, endGame } from './utils.js'

class Selectors {
    constructor(name) {
        this.elHP = getById(`health-${name}`)
        this.elProgressbar = getById(`progressbar-${name}`)
        this.elDamage = getById(`${name}-damage`)
    }
}

class Pokemon extends Selectors {
    constructor({name, hp, type, img, attacks, selectors}) {
        super(selectors)

        this.name = name
        this.hp = {
            current: hp,
            total: hp
        }
        this.type = type
        this.img = img
        this.attacks = attacks
        this.role = selectors

        this.render()
    }

    render = () => {
        this.renderName()
        this.renderImage()
        this.renderHP()
    }

    renderHP = () => {
        this.renderHPLife()
        this.renderProgressbarHP()
    }

    renderName = () => {
        const $nameDiv = getById(`name-${this.role}`)
        $nameDiv.innerText = this.name
    }

    renderImage = () => {
        const $img = getById(`${this.role}-img`);
        $img.src = this.img
    }
    
    renderHPLife = () => {
        const {elHP, hp: {current, total}} = this
        elHP.innerText = current + ' / ' + total
    }
    
    renderProgressbarHP = () => {
        const {elProgressbar, hp: {current, total}} = this
        const procent = current * 100 / total

        if(procent < 60 && procent > 20) {
            elProgressbar.classList.add('low')
        } else if (procent <= 20) {
            elProgressbar.classList.remove('low')
            elProgressbar.classList.add('critical')
        }
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