//create board
function creeatboard(board) {
    for (let i = 1; i <= board; i++) {
        let div = document.createElement('div');
        div.className = "squer"
        div.innerHTML = ""
        div.id = `div${i}`
        div.addEventListener("click",()=>{
            alert("Click")
        } )
        document.querySelector("#canvas").append(div);
        
    }   
    divelm = document.querySelectorAll(".squer");
    
}
creeatboard(9)
