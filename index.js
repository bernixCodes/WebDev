let randomNumber1 = (Math.floor(Math.random()*6)) + 1;

document.getElementsByClassName('img1')[0].setAttribute('src', `./images/dice${randomNumber1}.png`);

// player 2

let randomNumber2 = (Math.floor(Math.random()*6)) + 1;

document.getElementsByClassName('img2')[0].setAttribute('src', `./images/dice${randomNumber2}.png`);

//title text


if(randomNumber1 > randomNumber2){
    document.querySelector('h5').innerHTML= '🚩Player 1 wins!'
}
else if(randomNumber1 < randomNumber2){
    document.querySelector('h5').innerHTML= 'Player 2 wins!🚩'
}
else if(randomNumber1 === randomNumber2){
    document.querySelector('h5').innerHTML= 'Draw!'
}
else{
    document.querySelector('h5').innerHTML= 'Refresh Me'
}