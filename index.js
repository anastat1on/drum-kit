for (let i=0; i < document.querySelectorAll('.drum').length; i++){
    // clicking the button
    document.querySelectorAll('.drum')[i].addEventListener('click',handleClick)
}
function handleClick() {
    let letterClicked = this.innerHTML

    makeSound(letterClicked)
    animationPicture(letterClicked) 
}

// pressing the keyboard
document.addEventListener('keydown', function(event){
    makeSound(event.key)
    animationPicture(event.key) 

})

// for play sound
function playSound(soundName){
    let music = new Audio(soundName)
    music.play()
}

// checking which letter was pressed and execute the sound
function makeSound(letterPressed){
    switch(letterPressed){
        case 'w':
            playSound('sounds/crash.mp3')
        break

        case 'a':
            playSound('sounds/tom-1.mp3')
        break

        case 's':
            playSound('sounds/tom-2.mp3')
        break

        case 'd':
            playSound('sounds/kick-bass.mp3')
        break

        case 'j':
            playSound('sounds/tom-3.mp3')
        break

        case 'k':
            playSound('sounds/snare.mp3')
        break

        case 'l':
            playSound('sounds/tom-4.mp3')
        break

    default: console.log(letterPressed + " letter does not have any sound")
    } 
} 

function animationPicture(letter){
    document.querySelector("." + letter).classList.add("pressed")

    setTimeout( function(){
        document.querySelector("." + letter).classList.remove("pressed")}, 100)
}