(function() {

    
function game(gameBoard, players, rules, choices) {
    
    this.gameBoard = function(){
        // Create Board 3x3 score
        let board = document.getElementById("board");
        let displayBoard = document.createElement("div");
        displayBoard.id = "gameBoard";
        board.appendChild(displayBoard);
    };
    this.players = function(playerOne, playerTwo, computer) {
        // get players information
        // Display players NAMES
        this.playerOne = playerOne; 
        this.playerTwo = playerTwo;
        this.computer = computer;

        playerOne = window.prompt("Enter Name");
        computer = "Computer";
        return(playerOne);

        playerTwo = window.prompt("Enter Name");

    };
    this.rules = function(){
        // get score of winner
        // display score
        let X = 1; 
        let O = 1;
        

        if(playerOne  ) {
            console.log("it works");
        }



    };

    this.choices = function(marker){
        this.marker = ["X", "O"];
    }
    
    }
    return game();
})()