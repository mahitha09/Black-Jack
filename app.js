const userMessage = document.getElementById('message');
const btnStart = document.getElementById('btn-start');
const userSum = document.getElementById('sum');
const cards = document.getElementById('cards');
const btnNew = document.getElementById('btn-new');

btnStart.addEventListener('click',startGame);
btnNew.addEventListener('click',newCard);

let cardsArr = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let count = 0;
let message = "";

//Staring Game
function startGame(){
    isAlive = true;
    let firstCard = getRandom();
    let secondCard = getRandom();
    cardsArr = [firstCard, secondCard];
    sum = firstCard + secondCard;
    game();
}

//Rendering game
function game(){

    cards.textContent = "Cards: " ;

    for(let i=0;i<cardsArr.length;i++){
        cards.textContent += cardsArr[i] + " ";
    }

    userSum.innerText = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    userMessage.textContent = message;

}

//New card function
function newCard(){

    if(hasBlackJack === false && isAlive === true){
        let card = getRandom();
        sum += card;
        cardsArr.push(card);
        game();
    }
    else{
        alert('Start your game again!');
    }
    
}

function getRandom(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10){
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}