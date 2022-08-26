const result = document.querySelector("header");
const player1Dice = document.querySelector(".player1 img");
const player2Dice = document.querySelector(".player2 img");
const button = document.querySelector("button")

function randomNum() {
    //generate a random number between 1 and 6
    return Math.floor(Math.random()*6 + 1)
}
function randomDice() {
    //update the result of the game
    //get the random dice number for both players and update the images
    p1Dice = randomNum();
    p2Dice = randomNum();
    player1Dice.src = `images/dice${p1Dice}.png`;
    player2Dice.src = `images/dice${p2Dice}.png`;
    console.log(result)
    if (p1Dice > p2Dice) {
        result.innerText = "🚩Player 1 wins!"
    } else if (p2Dice > p1Dice) {
        result.innerText = "Player 2 wins!🚩"
    } else {
        result.innerText = "Draw!"
    }

}
window.addEventListener("load", randomDice);
button.addEventListener("click", randomDice);