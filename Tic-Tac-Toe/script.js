const cells = document.querySelectorAll(".cell");

let board = ["","","","","","","","",""];

const human = "X";
const ai = "O";

let gameOver = false;

const winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach(cell=>{
    cell.addEventListener("click",playerMove);
});

function playerMove(e){

    const index = e.target.dataset.index;

    if(board[index]!=="" || gameOver) return;

    board[index]=human;
    e.target.innerHTML=human;

    if(checkWinner(board,human)){
        alert("You Win!");
        gameOver=true;
        return;
    }

    if(board.every(cell=>cell!="")){
        alert("Draw");
        return;
    }

    aiMove();
}

function aiMove(){

    let bestScore=-Infinity;
    let move;

    for(let i=0;i<9;i++){

        if(board[i]==""){

            board[i]=ai;

            let score=minimax(board,false);

            board[i]="";

            if(score>bestScore){
                bestScore=score;
                move=i;
            }
        }
    }

    board[move]=ai;
    cells[move].innerHTML=ai;

    if(checkWinner(board,ai)){
        alert("AI Wins!");
        gameOver=true;
        return;
    }

    if(board.every(cell=>cell!="")){
        alert("Draw");
    }

}

function minimax(board,isMax){

    if(checkWinner(board,ai)) return 1;

    if(checkWinner(board,human)) return -1;

    if(board.every(cell=>cell!="")) return 0;

    if(isMax){

        let best=-Infinity;

        for(let i=0;i<9;i++){

            if(board[i]==""){

                board[i]=ai;

                best=Math.max(best,minimax(board,false));

                board[i]="";

            }

        }

        return best;

    }

    else{

        let best=Infinity;

        for(let i=0;i<9;i++){

            if(board[i]==""){

                board[i]=human;

                best=Math.min(best,minimax(board,true));

                board[i]="";

            }

        }

        return best;

    }

}

function checkWinner(board,player){

    return winPatterns.some(pattern=>{

        return pattern.every(index=>board[index]==player);

    });

}

function restartGame(){

    board=["","","","","","","","",""];

    gameOver=false;

    cells.forEach(cell=>cell.innerHTML="");

}