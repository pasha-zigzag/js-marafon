const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    kickBtn: document.getElementById('btn-kick-character')
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    kickBtn: document.getElementById('btn-kick-enemy')
}

character.kickBtn.addEventListener('click', function() {
    changeMove(this, enemy)
    changeHP(random(20), enemy)
})

enemy.kickBtn.addEventListener('click', function() {
    changeMove(this, character)
    changeHP(random(20), character)
})

function init() {
    console.log('start game');
    renderHP(character)
    renderHP(enemy)
}

function renderHP(person) {
    renderHPLife(person)
    renderProgressbarHP(person)
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%'
}

function changeHP(count, person) {
    if(person.damageHP <= count) {
        person.damageHP = 0
        endGame(person)
    } else {
        person.damageHP -= count
    }
    
    renderHP(person)
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

init()