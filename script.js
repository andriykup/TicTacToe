const gameBoard = document.getElementById('gameBoard');

for(let i = 1; i <= 9; i++){
    const boardElement = document.createElement('div');
    boardElement.dataset.index = i;
    boardElement.addEventListener('click', boardElementClicked.bind(this, boardElement.dataset.index));
    gameBoard.appendChild(boardElement);
}

function boardElementClicked(elementIndex) {
    console.log("boardElement with index: " + elementIndex + " was clicked");
}