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
    characterKick.call(this)
    // changeMove(this, enemy)
    enemy.changeHP(random(20))
})

enemy.kickBtn.addEventListener('click', function() {
    enemyKick.call(this)
    // changeMove(this, character)
    character.changeHP(random(50))
})

// function getClickCount() {
//     let click = 0
//     return function() {
//         console.log(++click)
//     }
// }

function getKickNumber(maxCount, kickDivID) {
    return function() {
        $div = document.querySelector('#' + kickDivID)
        maxCount--
        $div.innerHTML = `Осталось ударов <b>${maxCount}</b>` 
        if(maxCount === 0) {
            this.disabled = true   
        }
    }
}

let characterClick = getClickCount()
let enemyClick = getClickCount()

let characterKick = getKickNumber(4, 'kick-count-character')
let enemyKick = getKickNumber(5, 'kick-count-enemy')



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
    const {elHP, hp: {current, total}} = this
    elHP.innerText = current + ' / ' + total
}

function renderProgressbarHP() {
    const {elProgressbar, hp: {current, total}} = this
    elProgressbar.style.width = current * 100 / total + '%'
}



function random(num) {
    return Math.ceil(Math.random() * num)
}

// function changeMove(clickedBtn, person) {
//     clickedBtn.disabled = true
//     person.kickBtn.disabled = false
// }

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
    const {elDamage, name, hp: {current, total}} = firstPerson
    const {name: enemyName} = secondPerson

    firstPerson.elDamage.classList.remove("animate__fadeOutUp")
    firstPerson.elDamage.innerText = '-' + damage

    setTimeout(() => {
        firstPerson.elDamage.classList.add("animate__fadeOutUp")
    }, 100);


    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. <b><b>-${damage} [${current}/${total}]</b></b>`,
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. <b>-${damage} [${current}/${total}]</b>`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. <b>-${damage} [${current}/${total}]</b>`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. <b>-${damage} [${current}/${total}]</b>`,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. <b>-${damage} [${current}/${total}]</b>`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. <b>-${damage} [${current}/${total}]</b>`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. <b>-${damage} [${current}/${total}]</b>`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника <b>-${damage} [${current}/${total}]</b>`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. <b>-${damage} [${current}/${total}]</b>`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. <b>-${damage} [${current}/${total}]</b>`
    ];

    return logs[random(logs.length - 1)]
}

function printLog(log) {
    const $log = document.querySelector('#logs')
    const $p = document.createElement('p')

    $p.innerHTML = log
    $log.insertBefore($p, $log.children[0])
}