const b1=document.getElementById("b1");
const boardCol=document.getElementById("boardCol");
const save=document.querySelector(".saveBtn");



function createBoard(){
    document.getElementsByClassName("modalTitle")[0].innerText="create board";
    document.getElementById("modalLayOut").style.display="flex";
    

}

 function addToColumn(){
    let boardName=document.getElementById("modalInput").value;
    document.getElementById("modalLayOut").style.display="none";
    let board=document.createElement("div");
    board.innerHTML=`<p>${boardName}</p>`
    board.classList.add("board");
    boardCol.appendChild(board)
 }
 save.addEventListener("click",()=>
    {
    addToColumn();
    
    })

 
