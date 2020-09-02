export function getById(id) {
    return document.getElementById(id)
}

export function random(num) {
    return Math.ceil(Math.random() * num)
}

export function endGame(person) {
    alert('Бедный ' + person.name + ' проиграл!')
    person.kickBtn.disabled = true
}

export function generateLog(firstPerson, secondPerson, damage) {
    const {elDamage, name, hp: {current, total}} = firstPerson
    const {name: enemyName} = secondPerson

    elDamage.classList.remove("animate__fadeOutUp")
    elDamage.innerText = '-' + damage

    setTimeout(() => {
        elDamage.classList.add("animate__fadeOutUp")
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

export function printLog(log) {
    const $log = document.querySelector('#logs')
    const $p = document.createElement('p')

    $p.innerHTML = log
    $log.insertBefore($p, $log.children[0])
}

export function getKickNumber(maxCount, kickDiv) {
    return function() {
        maxCount--
        kickDiv.innerHTML = `Осталось ударов <b>${maxCount}</b>` 
        if(maxCount === 0) {
            this.disabled = true   
        }
    }
}