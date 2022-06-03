document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){
    let result = document.getElementById('result');
    
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        result.innerText = ("O jogo acabou.")
    }
    updateSquares();
}

function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position];

        if (symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}