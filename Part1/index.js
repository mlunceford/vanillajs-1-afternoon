console.log('hey there turd face')

const board = [];

let play = (clickedId) => {
    let playerSpan = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)

    if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }
    console.log(board)


    const tl = board[0]
    const tc = board[1]
    const tr = board[2]
    const ml = board[3]
    const mc = board[4]
    const mr = board[5]
    const bl = board[6]
    const bc = board[7]
    const br = board[8]
    if (tl !== undefined && tl === tc && tl === tr) {
        alert(`${tl} is the Winner`)
    }
    if (tl !== undefined && tl === mc && tl === br) {
        alert(`${tl} is the Winner`)
    }
    if (tl !== undefined && tl === ml && tl === bl) {
        alert(`${tl} is the Winner`)
    }
    if (tc !== undefined && tc === mc && tc === bc) {
        alert(`${tc} is the Winner`)
    }
    if (tr !== undefined && tr === mr && tr === br) {
        alert(`${tr} is the Winner`)
    }
    if (ml !== undefined && ml === mc && ml === mr) {
        alert(`${ml} is the Winner`)
    }
    if (bl !== undefined && bl === mc && bl == tr) {
        alert(`${bl} is the Winner`)
    }
    if (bl !== undefined && bl === bc && bl == br) {
        alert(`${bl} is the Winner`)
    }

    

    let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}
let reset = () => {
    
} 

    // function resetBoard(){
    //     let squares = document.getElementsByTagName('td')
    //     var playerSpan = document.getElementById('player');
    //     for(let i = 0; i < squares.length; i++){
    //         squares[i].innerText = ''
    //     }

//     }


// }








