const block = document.getElementById('block')
const hole = document.getElementById('hole')
const character = document.getElementById('character')
let jumping = 0
var counter = 0

// this means that after each animation has happened it will come back to this code and run it
hole.addEventListener('animationiteration', () => {
    // the hole is currently top -500 , this will generate a number between -150 and -450 to move the hole up and down
    const random = -( ( Math.random()*300 ) + 150 )
    hole.style.top = random + 'px'
})

setInterval( () => {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    if(jumping == 0){
        character.style.top = ( characterTop + 3 ) + 'px'
    }
    // hit detection

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'))
    var cTop = -(500-characterTop)

    if ((characterTop > 480) || ((blockLeft < 20) && ( blockLeft > -50) && ( (cTop < holeTop) || ( cTop > holeTop + 130) ))) {
        alert('Game over - Score '+ counter)
        // resets the character
        character.style.top = 100 + 'px'
        counter = 0
    }

}, 10)

const jump = () => {
    jumping = 1
    var jumpCount = 0
    var jumpInterval = setInterval(() => {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
        // Stops the character jumping out the top of the box
        if (characterTop > 6 ) {
            character.style.top = (characterTop - 5) + 'px'
        }
        if (jumpCount > 20 ){
            // by setting the interval to a variable we can clear it to stop it
            clearInterval(jumpInterval)
            // so gravity starts now the jumping is over
            jumping = 0
        }
        jumpCount++
    })
}

document.addEventListener('keydown', (event) => {
    if ( event.which == 32 ) {
        jump()
    }
})