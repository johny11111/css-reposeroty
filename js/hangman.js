let guesses = "";
let board = ["-","-","-","-","-"]
const letters_selected = [
    ["apple"],
    ["lemon"],
    ["hello"]
]

function checkWin(){
    letters_selected.forEach((letter) =>{
        for(let i = 0; i < letter.length ;i++){
            let guseT = guesses.trim()
            let letterCopy = letter.filter(letter => letter.includes(guseT))
         
            if(letterCopy){
                for(j= 0; j < letterCopy.length; j++){
                    debugger
                    document.querySelector("#showSelectLeter").innerHTML = ""
                    console.log(letterCopy[j]);
                    board[i] = letterCopy[i]
                    console.log(board);
                    document.querySelector("#showSelectLeter").innerHTML = createSign(board)
                }

             
            }
        }  
    })


  
}

// arry for results
function createSign(arr_letter){
    arr_letter.forEach((e) =>
        document.querySelector("#showSelectLeter").innerHTML += e);
}
createSign(board)



// create letters 
function createLetter() {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let divElement;
    let div;
    for (let i = 0; i <= 25; i++){
        div = document.createElement('div');
        div.className = "squer"
        div.innerHTML = letters[i];
        div.id = `div${i}`;
        div.addEventListener("click", (e) => {
            onClick(e)
        })
        divElement = document.querySelector("#lateer").append(div)
    }
}
createLetter()


// function to add the licked letter to arr letter list

function onClick(e) {
    let whoClickedValue = e.target.innerHTML;
    let whoClickedID = e.target.id;
    addSelect(whoClickedValue)
    checkWin()
   
}


// add selected to guesses
function addSelect(arr) {
    guesses += arr + " "
    document.querySelector('#guues').innerHTML += guesses
}