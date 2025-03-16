let arrGame = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let newCard = [];

let firstCard = Math.floor(Math.random() * arrGame.length);
let secondCard = Math.floor(Math.random() * arrGame.length);
let randomNumber = firstCard + secondCard;
let conunt = 0;

console.log(randomNumber);
let cards = [firstCard, secondCard];
cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
