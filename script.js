const board = document.getElementById('gameBoard');
const startButton = document.getElementById('startGame');
const resetButton = document.getElementById('resetGame');
const displaySection = document.getElementById('display');

startButton.addEventListener('click', startgame);
resetButton.addEventListener('click', resetGame);

let player1; //palyer declaration
let player2; //player declaration

const Player = (userName, mark) => {
    return {userName, mark};
}

const gameBoard = (() => {
    let boardElements = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
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

    function resetGame(){
        boardElements = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        resetBoard();
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
            displaySection.textContent = "Its a tie";
        }
    }

    function winnerCongratulates(mark){
        if(mark == "X"){
            displaySection.textContent = "Congratulation! " + player1.userName + " you are the winner :)"
        }else{
            displaySection.textContent = "Congratulation! " + player2.userName + " you are the winner :)"
        }
    }

    function winnerCheck(){
        tieCheck();
        if(boardElements[0] == boardElements[1] && boardElements[1] == boardElements[2] && boardElements[1] != " "){
            winnerCongratulates(boardElements[0]);
        }else if(boardElements[3] == boardElements[4] && boardElements[4] == boardElements[5] && boardElements[3] != " "){
            winnerCongratulates(boardElements[3]);
        }else if(boardElements[6] == boardElements[7] && boardElements[7] == boardElements[8] && boardElements[6] != " "){
            winnerCongratulates(boardElements[6]);
        }else if(boardElements[0] == boardElements[3] && boardElements[3] == boardElements[6] && boardElements[6] != " "){
            winnerCongratulates(boardElements[0]);
        }else if(boardElements[1] == boardElements[4] && boardElements[4] == boardElements[7] && boardElements[7] != " "){
            winnerCongratulates(boardElements[1]);
        }else if(boardElements[2] == boardElements[5] && boardElements[5] == boardElements[8] && boardElements[8] != " "){
            winnerCongratulates(boardElements[2]);
        }else if(boardElements[0] == boardElements[4] && boardElements[4] == boardElements[8] && boardElements[8] != " "){
            winnerCongratulates(boardElements[0]);
        }else if(boardElements[2] == boardElements[4] && boardElements[4] == boardElements[6] && boardElements[6] != " "){
            winnerCongratulates(boardElements[2]);
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
        resetGame
    }
})();

function startgame(){
    //Players initialization
    player1 = Player(prompt("Player N1, please introduce you name: "), "X");
    player2 = Player(prompt("Player N2, please introduce you name: "), "O");
    gameBoard.resetGame();
    gameBoard.setBoard();
}

function resetGame(){
    displaySection.textContent = "";
    gameBoard.resetGame();
    gameBoard.setBoard();
}