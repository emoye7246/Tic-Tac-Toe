let markers = ["X", "O"];

// For board control
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

function players(){
let playerOne = window.prompt("enter name");
let playerChoice = window.prompt(`Hello ${playerOne} CHOOSE ${markers[0]} or ${markers[1]}`);
if (playerChoice != markers[0] && playerChoice != markers[1] ) {

    return console.log("it works");
}
else if (playerChoice == markers[0] || playerChoice == markers[1]){
    return playerChoice;
}

}
players();

function boardControl(){
    one.addEventListener("click", () => {
        one.innerHTML = playerChoice;
        console.log("User has clicked the first square")

    })
    two.addEventListener("click", () => {
        two.innerHTML = playerChoice;
        console.log("User has clicked the second square")

    })
    three.addEventListener("click", () => {
        three.innerHTML = playerChoice;
        console.log("User has clicked the third square")

    })
    four.addEventListener("click", () => {
        four.innerHTML = playerChoice;
        console.log("User has clicked the fourth square")

    })
    five.addEventListener("click", () => {
        five.innerHTML = playerChoice;
        console.log("User has clicked the fifth square")

    })
    six.addEventListener("click", () => {
        six.innerHTML = playerChoice;
        console.log("User has clicked the sixth square")

    })
    seven.addEventListener("click", () => {
        seven.innerHTML = playerChoice;
        console.log("User has clicked the seventh square")

    })
    eight.addEventListener("click", () => {
        eight.innerHTML = "X";
        console.log("User has clicked the eighth square")

    })
    nine.addEventListener("click", () => {
        nine.innerHTML = "X";
        console.log("User has clicked the ninth square")
    })
}
boardControl();

// function player() {
//     // checkwinner
//     if()
// }

// gameboard keys