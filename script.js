const board = document.getElementById('gameBoard');
const startButton = document.getElementById('startGame');
startButton.addEventListener('click', startgame);

let player1; //palyer declaration
let player2; //player declaration

const Player = (userName, mark) => {
    return {userName, mark};
}

const gameBoard = (() => {
    const boardElements = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const setBoard = () => {
        let i = 0;
        while(boardElements[i]){
            const boardElement = document.createElement('div');
            const boardElemenValue = document.createElement('p');
            boardElement.dataset.index = i;
            boardElemenValue.textContent = boardElements[i];
            boardElement.appendChild(boardElemenValue);
            boardElement.addEventListener('click', boardElementClicked.bind(this, boardElement.dataset.index));
            board.appendChild(boardElement);
            i++;
        }
    }

    function updateBoard(index, value){
        boardElements[index] = value;
    }

    function resetBoard(){
        while(board.firstChild){
            board.firstChild.remove();
        }
    }

    function tieCheck(){
        let tieCheck = 0; //if it stay 0, its a tie.
        for(let i = 0; boardElements[i]; i++){
            if(boardElements[i] == " "){
                tieCheck = 1;
            }
        }
        //declaring tie if it is a case
        if(tieCheck == 0){
            console.log("tie");
        }
    }

    function winnerCheck(){
        tieCheck();
        if(boardElements[0] == boardElements[1] && boardElements[1] == boardElements[2] && boardElements[1] != " "){
            console.log("winner");
        }else if(boardElements[3] == boardElements[4] && boardElements[4] == boardElements[5] && boardElements[3] != " "){
            console.log("winner");
        }else if(boardElements[6] == boardElements[7] && boardElements[7] == boardElements[8] && boardElements[6] != " "){
            console.log("winner");
        }else if(boardElements[0] == boardElements[3] && boardElements[3] == boardElements[6] && boardElements[6] != " "){
            console.log("winner");
        }else if(boardElements[1] == boardElements[4] && boardElements[4] == boardElements[7] && boardElements[7] != " "){
            console.log("winner");
        }else if(boardElements[2] == boardElements[5] && boardElements[5] == boardElements[8] && boardElements[8] != " "){
            console.log("winner");
        }else if(boardElements[0] == boardElements[4] && boardElements[4] == boardElements[8] && boardElements[8] != " "){
            console.log("winner");
        }else if(boardElements[2] == boardElements[4] && boardElements[4] == boardElements[6] && boardElements[6] != " "){
            console.log("winner");
        }
    }
    
    let currentPlayer;
    function boardElementClicked(elementIndex) {
        // keeps players from playing in spots that are already taken
        if(boardElements[elementIndex] != " "){
            return;
        } 
        //check for first round
        if(currentPlayer == undefined){
            currentPlayer = player1;
        }
        console.log(currentPlayer);
        if(currentPlayer == player1){
            updateBoard(elementIndex, player1.mark);
            currentPlayer = player2;
        }else{
            updateBoard(elementIndex, player2.mark);
            currentPlayer = player1;
        }
        resetBoard();
        setBoard();
        winnerCheck();
    }
    
    return {
        updateBoard,
        setBoard,
    }
})();

function startgame(){
    //Players initialization
    player1 = Player(prompt("Player N1, please introduce you name: "), "X");
    player2 = Player(prompt("Player N2, please introduce you name: "), "O");
    gameBoard.setBoard();
}