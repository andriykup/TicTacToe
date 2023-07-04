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
    const setBoard = () => {
        let i = 0;
        while(boardElements[i]){
            const boardElement = document.createElement('div');
            const boardElemenValue = document.createElement('p');
            boardElement.dataset.index = boardElements[i];
            if(boardElements[i] != 'number'){
                boardElemenValue.textContent = boardElements[i];
            }
            boardElement.appendChild(boardElemenValue);
            boardElement.addEventListener('click', boardElementClicked.bind(this, boardElement.dataset.index - 1));
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
    
    function boardElementClicked(elementIndex) {
        console.log("element was clicked");
        resetBoard();
        updateBoard(elementIndex, "x");
        setBoard();
    }
    
    return {
        updateBoard,
        setBoard,
    }
})();

function startgame(){
    //PLayers initialization
    player1 = Player(prompt("Player N1, please introduce you name: "));
    player2 = Player(prompt("Player N2, please introduce you name: "));
    gameBoard.setBoard();

}