let numberOfDrums = document.querySelectorAll('.drum').length

for(let i = 0; i < numberOfDrums ; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', playSound)
}

function playSound(){
 let buttonText = this.innerHTML;
 produceSound(buttonText)
 animateButton(buttonText)
}

document.addEventListener('keydown', keyPressValue)
function keyPressValue(e){
  produceSound(e.key)
  animateButton(e.key)

}

function produceSound(key){
    switch (key) {
        case 'w': 
         let music = new Audio( './sounds/tom-1.mp3')
          music.play()
            break;
        case 'a': 
        let music2 = new Audio( './sounds/tom-2.mp3')
          music2.play()
            break;
    
        case 's': 
        let music3 = new Audio( './sounds/tom-3.mp3')
          music3.play()
            
            break;
        case 'd':
           let music4 = new Audio( './sounds/tom-4.mp3')
        music4.play()
            
            break;
        case 'j':
               let music5 = new Audio( './sounds/snare.mp3')
            music5.play()
                
                break;
    
                case 'k':
                   let music6 = new Audio( './sounds/crash.mp3')
                music6.play()
                    
                    break;
    
                    case 'l':
                       let music7 = new Audio( './sounds/kick-bass.mp3')
                    music7.play()
                        
                        break;
    
        default:
            break;
    }
}

function animateButton(currentKey){
    document.querySelector('.' + currentKey).classList.add('pressed');
    setTimeout( function(){
        document.querySelector('.' + currentKey).classList.remove('pressed')
    }, 100);
}

