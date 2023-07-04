const board = document.getElementById('gameBoard');
const startButton = document.getElementById('startGame');
startButton.addEventListener('click', startgame);

let player1; //palyer declaration
let player2; //player declaration

const Player = (userName) => {
    return {userName};
}

const gameBoard = (() => {
    const boardElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const createBoard = () => {
        let i = 0;
        while(boardElements[i]){
            const boardElement = document.createElement('div');
            boardElement.dataset.index = boardElements[i];
            boardElement.addEventListener('click', boardElementClicked.bind(this, boardElement.dataset.index));
            board.appendChild(boardElement);
            i++;
        }
    }
    return {
        createBoard,
    }
})();


function boardElementClicked(elementIndex) {
    console.log("boardElement with index: " + elementIndex + " was clicked");
}

function startgame(){
    //PLayers initialization
    player1 = Player(prompt("Player N1, please introduce you name: "));
    player2 = Player(prompt("Player N2, please introduce you name: "));
    gameBoard.createBoard();
}