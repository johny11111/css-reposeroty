let lastIndex = []
let currentPlayer = "x"
let text = document.querySelector("#win");
let lastIndexId = []
let counadd = 0;
const arr_wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


//create board
function creeatboard(board) {
    for (let i = 1; i <= board; i++) {
        let div = document.createElement('div');
        div.className = "squer"
        div.innerHTML = ""
        div.id = `div${i}`
        div.addEventListener("click", (e) => {
        onClick(e , checkWin)
        })
        document.querySelector("#canvas").append(div);

    }
    divelm = document.querySelectorAll(".squer");

}
creeatboard(9)


document.querySelector("#textWin").style.display = "block";
// function te check winner
function checkWin() {
    let bool = false;
    for (let i = 0; i < arr_wins.length; i++) {
        const win1 = arr_wins[i];
        const opt = divelm[win1[0]].textContent;
        const opt1 = divelm[win1[1]].textContent;
        const opt2 = divelm[win1[2]].textContent;
        if (opt && opt1 && opt2) {
            if (opt === opt1 && opt1 === opt2) {
                bool = true;
            }
        }
        if (bool) {
           
            document.querySelector("#textWin").style.display = "block"
            document.querySelector("#win").style.display = "block"
            text.textContent = `the winner is:${currentPlayer}`
            setTimeout(() => {
                 text.textContent = ""
                 divelm.forEach(e => e.innerHTML = "")
                 document.querySelector("#win").style.display = "none"
                 document.querySelector("#textWin").style.display = "none"


            }, 2000)
            divelm.forEach(e => e.innerHTML = currentPlayer)
            return changePlayer()
        }
    }


}

const onClick = (e, checkwi) => {
    if (e.target.innerHTML !== "") {
      return
    }
    changePlayer()
    lastIndex[counadd] = e.target.textContent = currentPlayer
    lastIndexId[counadd] = e.target.id
    counadd++
    checkwi()
  }


// function to change player
function changePlayer() {
    currentPlayer = (currentPlayer === "x") ? "o" : "x";
  }