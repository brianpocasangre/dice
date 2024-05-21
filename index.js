let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');
const display = document.querySelector('h1');

image1.setAttribute('src', `images/dice${randomNumber1}.png`);
image2.setAttribute('src', `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  display.innerHTML = 'Player 1 Wins!';
} else if (randomNumber1 === randomNumber2) {
  display.innerHTML = 'Draw!';
} else {
  display.innerHTML = 'Player 2 Wins!';
}
