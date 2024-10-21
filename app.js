var playerOne = prompt("Heads or Tails");
playerOne = playerOne.toLowerCase();
var playerTwo;
var currentPlayer = "";
var gameActive = true;

while (true) {
    if (playerOne === "heads") {
        playerTwo = "tails";
        currentPlayer = "Pink Panther";
        break;
    } else if (playerOne === "tails") {
        playerTwo = "heads";
        currentPlayer = "Big Nose";
        break;
    } else {
        alert("Invalid Input. Choose Heads or Tails");
        playerOne = prompt("Heads or Tails").toLowerCase();
    }
}

function rollDice() {
    var diceOne = Math.floor(Math.random() * 6) + 1;
    var diceTwo = Math.floor(Math.random() * 6) + 1;
    return { diceOne: diceOne, diceTwo: diceTwo };
}

function diceRoll() {
    if (!gameActive) {
        return;
    }

    var result = rollDice();
    var diceOne = result.diceOne;
    var diceTwo = result.diceTwo;

    var num1Element = document.getElementsByClassName("num")[0];
    var num2Element = document.getElementsByClassName("num")[1];

    num1Element.innerHTML = diceOne;
    num2Element.innerHTML = diceTwo;

    if (diceOne === 6 && diceTwo === 6) {
        alert(currentPlayer + " wins the game!");
        gameActive = false;
        return;
    }


    if (currentPlayer === "Pink Panther") {
        currentPlayer = "Big Nose";
    } else {
        currentPlayer = "Pink Panther";
    }

    alert("It's " + currentPlayer + "'s turn to roll.");
    updateButtons(); 
}

function updateButtons() {
    var rollButton = document.getElementById("rollButton");
    var rollButton2 = document.getElementById("rollButton2");

    if (currentPlayer === "Pink Panther") {
        rollButton.disabled = true;
        rollButton2.disabled = false;
    } else {
        rollButton.disabled = false;
        rollButton2.disabled = true;
    }
}

function diceRoll2() {
    if (!gameActive) {
        return;
    }

    var result = rollDice();
    var diceOne = result.diceOne;
    var diceTwo = result.diceTwo;

    var num1Element2 = document.getElementsByClassName("num2")[0];
    var num2Element2 = document.getElementsByClassName("num2")[1];

    num1Element2.innerHTML = diceOne;
    num2Element2.innerHTML = diceTwo;

    if (diceOne === 6 && diceTwo === 6) {
        alert(currentPlayer + " wins the game!");
        gameActive = false;
        return;
    }

    
    if (currentPlayer === "Pink Panther") {
        currentPlayer = "Big Nose";
    } else {
        currentPlayer = "Pink Panther";
    }

    alert("It's " + currentPlayer + "'s turn to roll.");
    updateButtons(); 
}


updateButtons();
