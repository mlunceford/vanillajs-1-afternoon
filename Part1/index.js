console.log('you suck but cracks')

let board = [];


function play(clickedId) {
    let boardfull = true
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    console.log(playerSpan.innertext)
    if (playerSpan.innertext === 'X') {
        playerSpan.innertext = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innertext = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
        
    }
    
    console.log(board);

    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];

    if (topLeft !== undefined && topLeft === topCenter && topRight === topLeft) {
        alert(`${topLeft} is the winner`);
        
    }
    if (topLeft !== undefined && topLeft === topCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
    }
    if (topLeft !== undefined && topLeft === middleLeft && topleft === bottomLeft) {
        alert(`${topLeft} is the winner`);
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
    }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
    }
  

    for( i = 0; i < 8; i++){
        if (board[i] === undefined){
            boardfull = false
        }
    }
    if (boardfull === true){
        alert('cats game')
    }


}








