(function(){
    const character = {
        name: 'Pikachu',
        defaultHP: 200,
        damageHP: 200,
        elHP: document.getElementById('health-character'),
        elProgressbar: document.getElementById('progressbar-character'),
        kickBtn: document.getElementById('btn-kick-character'),
        changeHP: changeHP,
        renderHP: renderHP,
    }
    
    const enemy = {
        name: 'Charmander',
        defaultHP: 100,
        damageHP: 100,
        elHP: document.getElementById('health-enemy'),
        elProgressbar: document.getElementById('progressbar-enemy'),
        kickBtn: document.getElementById('btn-kick-enemy'),
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
        if(this.damageHP <= count) {
            this.damageHP = 0
            endGame(this)
        } else {
            this.damageHP -= count
        }
        
        this.renderHP()
    }
    
    function renderHP() {
        renderHPLife.apply(this)
        renderProgressbarHP.apply(this)
    }
    
    function renderHPLife() {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP
    }
    
    function renderProgressbarHP() {
        this.elProgressbar.style.width = this.damageHP * 100 / this.defaultHP + '%'
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
})()