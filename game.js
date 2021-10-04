let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour;
let gamePattern = [];
let userClickedPattern = [];

$('.btn').click(function(){
   let userChosenColour = $(this).attr('id')
   userClickedPattern.push(userChosenColour)
  playSound(userChosenColour)
  animatePress(userChosenColour)
})

function playSound(name){
    switch (name) {
        case 'blue':
            var blue = new Audio('./sounds/blue.mp3');
             blue.play();
            break;
            case 'red':
                var red = new Audio('./sounds/red.mp3');
                 red.play();
                break;
             case 'green':
                    var green = new Audio('./sounds/green.mp3');
                    green.play();
                  break;
             case 'yellow':
                    var yellow = new Audio('./sounds/yellow.mp3');
                    yellow.play();
                  break;   
        default:
            break;
    }
}

function animatePress(currentColour){
  $('#' + currentColour).addClass('pressed');

  setTimeout(() => {
    $('#' + currentColour).removeClass('pressed')
  }, 100);
}

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4)
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
  
}

$(document).click(function(){nextSequence()}); 
// nextSequence();
document.addEventListener('load',  () => {
    document.addEventListener('keydown', function(){
        nextSequence()
    })
} ) 
