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