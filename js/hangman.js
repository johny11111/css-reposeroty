let guesses = "";
let board = ["_", "_", "_", "_", "_"]
let toString = board.toString()
let split = toString.replaceAll(",", "")



const letters_selected = [
    "apple",
    "lemon",
    "hello"
]

let random = Math.floor(Math.random() * 3)
function checkWin(e) {
    let whoClickedValue = e.target.textContent;
    for (let i = 0; i < letters_selected[random].length; i++) {
        if (letters_selected[random][i].includes(whoClickedValue)) {
            board[i] = letters_selected[random][i];
            document.querySelector("#showSelectLeter").innerHTML = createSign(board)
        }
        toString = board.toString()
        split = toString.replaceAll(",", "")
        document.querySelector("#showSelectLeter").innerHTML = createSign(split)
        if (split === letters_selected[random]) {
            document.querySelector("#alert").innerHTML = "Congratulations! You won!"
        }
        if (guesses.length > 21) {
            document.querySelector("#alert").innerHTML = "game over! you lost"
        }
    }
}




// arry for results
function createSign(arr_letter) {
    debugger

    document.querySelector("#showSelectLeter").innerHTML += arr_letter;
    return arr_letter
}




// create letters 
function createLetter() {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let divElement;
    let div;
    for (let i = 0; i <= 25; i++) {
        div = document.createElement('div');
        div.className = "squer"
        div.innerHTML = letters[i];
        div.id = `div${i}`;
        div.addEventListener("click", (e) => {
            onClick(e)
            checkWin(e)
        })
        divElement = document.querySelector("#lateer").append(div)
    }
    createSign(split)
}
createLetter()


// function to add the licked letter to arr letter list

function onClick(e) {
    let whoClickedValue = e.target.innerHTML;
    let whoClickedID = e.target.id;
    addSelect(whoClickedValue)

}


// add selected to guesses
function addSelect(arr) {
    guesses += arr + " "
    document.querySelector('#guues').innerHTML = guesses
}

// function reset(){
document.querySelector('#reset').addEventListener('click', () => {
    board = ["-", "-", "-", "-", "-"]
    toString = board.toString()
    split = toString.replaceAll(",", "")
    guesses = []
    document.querySelector('#alert').innerHTML = ""
    document.querySelector('#guues').innerHTML = ""
    random = Math.floor(Math.random() * 3)
    document.querySelector('#showSelectLeter').innerHTML = createSign(split)
    counter = 0;

})
// }