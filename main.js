function getById(id) {
    return document.getElementById(id)
}

const character = {
    name: 'Pikachu',
    hp: {
        current: 200,
        total: 200
    },
    elHP: getById('health-character'),
    elProgressbar: getById('progressbar-character'),
    elDamage: getById('character-damage'),
    kickBtn: getById('btn-kick-character'),
    changeHP: changeHP,
    renderHP: renderHP,
}

const enemy = {
    name: 'Charmander',
    hp: {
        current: 100,
        total: 100
    },
    elHP: getById('health-enemy'),
    elProgressbar: getById('progressbar-enemy'),
    elDamage: getById('enemy-damage'),
    kickBtn: getById('btn-kick-enemy'),
    changeHP: changeHP,
    renderHP: renderHP,
}

character.kickBtn.addEventListener('click', function() {
    changeMove(this, enemy)
    enemy.changeHP(random(20))
})

enemy.kickBtn.addEventListener('click', function() {
    changeMove(this, character)
    character.changeHP(random(50))
})

function changeHP(count) {
    this.hp.current -= count

    if(this.hp.current <= 0) {
        this.hp.current = 0
        endGame(this)
    }

    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count)
    printLog(log)
    console.log(log)
    
    this.renderHP()
}

function renderHP() {
    renderHPLife.apply(this)
    renderProgressbarHP.apply(this)
}

function renderHPLife() {
    this.elHP.innerText = this.hp.current + ' / ' + this.hp.total
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = this.hp.current * 100 / this.hp.total + '%'
}



function random(num) {
    return Math.ceil(Math.random() * num)
}

function changeMove(clickedBtn, person) {
    clickedBtn.disabled = true
    person.kickBtn.disabled = false
}

function endGame(person) {
    alert('Бедный ' + person.name + ' проиграл!')
    character.kickBtn.disabled = true
    enemy.kickBtn.disabled = true
}

function init() {
    console.log('start game');
    character.renderHP()
    enemy.renderHP()
}

init()

function generateLog(firstPerson, secondPerson, damage) {
    firstPerson.elDamage.classList.remove("animate__fadeOutUp")
    firstPerson.elDamage.innerText = '-' + damage

    setTimeout(() => {
        firstPerson.elDamage.classList.add("animate__fadeOutUp")
    }, 100);


    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. <b><b>-${damage} [${firstPerson.hp.current}/${firstPerson.hp.total}]</b></b>`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. <b>-${damage} [${firstPerson.hp.current}/${firstPerson.hp.total}]</b>`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. <b>-${damage} [${firstPerson.hp.current}/${firstPerson.hp.total}]</b>`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. <b>-${damage} [${firstPerson.hp.current}/${firstPerson.hp.total}]</b>`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. <b>-${damage} [${firstPerson.hp.current}/${firstPerson.hp.total}]</b>`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. <b>-${damage} [${firstPerson.hp.current}/${firstPerson.hp.total}]</b>`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. <b>-${damage} [${firstPerson.hp.current}/${firstPerson.hp.total}]</b>`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника <b>-${damage} [${firstPerson.hp.current}/${firstPerson.hp.total}]</b>`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. <b>-${damage} [${firstPerson.hp.current}/${firstPerson.hp.total}]</b>`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. <b>-${damage} [${firstPerson.hp.current}/${firstPerson.hp.total}]</b>`
    ];

    return logs[random(logs.length - 1)]
}

function printLog(log) {
    const $log = document.querySelector('#logs')
    const $p = document.createElement('p')

    $p.innerHTML = log
    $log.insertBefore($p, $log.children[0])
}