function diceRoll() {
    // return alert('It Works!');

    const randomNumber = Math.floor(Math.random() * (6 - 0) + 1);
    const randomDiceImage = "dice" + randomNumber + ".png";
    const randomImageSource = "images/" + randomDiceImage;
    const image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    } else if (randomNumber2 > randomNumber) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}