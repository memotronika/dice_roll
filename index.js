randomNumber1 = Math.floor(Math.random()*6)+1;
randomNumber2 = Math.floor(Math.random()*6)+1;

if (randomNumber1>randomNumber2) {
    document.querySelector('h1').innerHTML='Player 1 wins'
}
else if (randomNumber1<randomNumber2) {
    document.querySelector('h1').innerHTML='Player 2 wins'
}
else{
    document.querySelector('h1').innerHTML='its draw(('
}

document.querySelector('.img1').setAttribute('src','images/dice'+randomNumber1+'.png');
document.querySelector('.img2').setAttribute('src','images/dice'+randomNumber2+'.png');
