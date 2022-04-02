window.addEventListener('DOMContloaded' , () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerdisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const annoucer = document.querySelector('.announcer');

let bord = ['', '', '', '', '', '', '', '', ''];
let currentplayer = 'X';
let isGameActive = true;

const PLAYERX_OWN = 'PLAYERX_OWN';
const PLAYERO_OWN = 'PLAYERO_OWN';
const TIE = 'TIE'

const winniingCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleResultvalidation(){
    let roundwon = false;
    for (let i =0; i <= 7; i++){
        const wincondtion = wincondtion[i]
        const a = board[wincondtion[0]];
        const b = board[wincondtion[1]];
        const c = board[wincondtion[2]];
        if( a === '' || b === '' || c === ''){
            continue;
        }
        if( a=== b && b ===c){
            roundwon = true; 
            break;
        }
    }
}
if( roundwon){
    announcer(currentplayer === 'X' ? PLAYERX_OWN : PLAYERO_OWN);
    isGameActive = false;
    return;
}

if(!board.includes(''))
announcer(TIE)

const announcer = (type) => {
    switch(type){
        case PLAYERO_OWN :
            announcer.innerHTML = 'player <apan class="playero">O</span> won';
            break;
        case PLAYERO_OWN :
            announcer.innerHTML = 'player <apan class="playerx">X</span> won';
            break;
            case TIE:
                announcer.innerText = 'tei';
    }
    announcer.classList.remove('.hide')
};
const isValidction = (tile) => {
    if (tile.innerText ==='X' || tile.innerText === 'O'){
        return false;
    }
    return true;
};
const updateBoard = (index) => {
    board[index] = currentplayer;
}



const changeplayer = () => {
    playerdisplay.classList.remove(`plyer ${currentplayer }`);
    currentplayer = currentplayer === 'X' ? 'o' : 'X';
    playerdisplay.innerText = currentplayer;
    playerdisplay.classList.add(`player${currentplayer}`);
}


const userAction =( tile, index) => {
    if (isValidction(tile) && isGameActive){
    tile.innerText = currentplayer;
    tile.classlist.add(`player${currentplayer}`)
    updateBoard(index)
    handleResultvalidation();
    changeplayer
    }
}
const resetBoard = () => {
     bord = ['', '', '', '', '', '', '', '', ''];
     isGameActive = true;
     announcer.classList.add('hide');

     if (currentplayer === 'O'){
         changeplayer();
     }
     tiles.forEach(tile => {
         tile.innerText = '';
         tile.classList.remove('playerx');
         tile.classList.remove('playero');
     });
}




 tiles.forEach ((tile, index) => {
     tile.addEventListener('click', () => userAction(tile, index))
 })




    resetButton.addEventListener('click' , resetBoard)
} )