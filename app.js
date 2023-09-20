
let img = ['zar1.png', 'zar2.png', 'zar3.png', 'zar4.png', 'zar5.png', 'zar6.png'];
let zartut;

let player;


const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
let kraltacp1 = document.querySelector('#kraltacp1');
let kraltacp2 = document.querySelector('#kraltacp2');

let player1_currentscore = document.querySelector('#player_1--currentscore');
let player2_currentscore = document.querySelector('#player_2--currentscore');

let player1_totalscore = document.querySelector('#player_1--totalscore');
let player2_totalscore = document.querySelector('#player_2--totalscore');



const zarimg = document.querySelector('#zar_img');

let puaneklebuton = document.querySelector('#puaneklebuton');
let zaratbuton = document.querySelector('#zarat');
let resetbuton = document.querySelector('#reset');
let player1score = 0;
let player2score = 0;
let player1total = 0;
let player2total = 0;


let p1zar = Math.floor(Math.random() * 6);
let p2zar = Math.floor(Math.random() * 6);

if (p1zar > p2zar) {
    alert('p1 başlar');
    player1.classList.add('activeplayer');
    player2.classList.remove('activeplayer');
    player = false;
} else {
    alert('p2 başlar');
    player1.classList.remove('activeplayer');
    player2.classList.add('activeplayer');
    player = true;
}

function randomzarat() {
    let zarsayisi = Math.floor(Math.random() * 6);


    if (!player) {
        if (zarsayisi === 0) {
            if (!player1.classList.toggle('activeplayer')) {

                player1.classList.remove('activeplayer');
                player2.classList.add('activeplayer');
                player1score = 0;
                player1_currentscore.innerHTML = 0;

                player = true;

            } else {

                player1.classList.add('activeplayer');
                player2.classList.remove('activeplayer');
                player1score = 0;
                player1_currentscore.innerHTML = 0;

                player = true;
            }

        } else {
            zarimg.src = img[zarsayisi - 1]
            player1score += zarsayisi;
            player1_currentscore.innerHTML = player1score;
        }

    } else {
        if (zarsayisi === 0) {
            if (!player1.classList.toggle('activeplayer')) {

                player1.classList.remove('activeplayer');
                player2.classList.add('activeplayer');
                player2score = 0;
                player2_currentscore.innerHTML = 0;
                player = false;
            } else {

                player1.classList.add('activeplayer');
                player2.classList.remove('activeplayer');
                player2score = 0;
                player2_currentscore.innerHTML = 0;
                player = false;
            }

        } else {

            zarimg.src = img[zarsayisi - 1]
            player2score += zarsayisi;

            player2_currentscore.innerHTML = player2score;
        }


    };

}

function puantopla() {



    if (!player) {
        if (player1score === 0) alert('Zar Atmalısınız!!')
        else {
            console.log(player1score, player1total);
            player1total += player1score;
            player1_totalscore.innerHTML = player1total;
            player1.classList.remove('activeplayer');
            player2.classList.add('activeplayer');
            player1_currentscore.innerHTML = 0;
            player1score = 0;
            if (player1total >= 100) {
                alert("PLAYER 1 WON");
                puaneklebuton.style.display = 'none';
                zaratbuton.style.display = 'none';
                resetbuton.style.display = 'block';
                player1_totalscore.style.fontWeight = '600';
                player1.classList.add('activeplayer');
                player2.classList.remove('activeplayer');
                kraltacp1.style.display = 'inline-block';
            }
            player = true;
        }

    } else {
        if (player2score === 0) alert('Zar Atmalısınız!!')
        else {
            console.log(player2score, player2total);
            player2total += player2score;
            player2_totalscore.innerHTML = player2total;
            player2.classList.remove('activeplayer');
            player1.classList.add('activeplayer');
            player2_currentscore.innerHTML = 0;
            player2score = 0;
            if (player2total >= 100) {
                alert("PLAYER 2 WON");
                puaneklebuton.style.display = 'none';
                zaratbuton.style.display = 'none';
                resetbuton.style.display = 'block';
                player2_totalscore.style.fontWeight = '600';
                player2.classList.add('activeplayer');
                player1.classList.remove('activeplayer');
                kraltacp2.style.display = 'inline-block';
            }
            player = false;
        }
    }



}


function sifirla() {
    player1_currentscore.innerHTML = 0;
    player2_currentscore.innerHTML = 0;
    player1_totalscore.innerHTML = 0;
    player2_totalscore.innerHTML = 0;
    player1score = 0;
    player2score = 0;
    player1total = 0;
    player2total = 0;
    puaneklebuton.style.display = 'block';
    zaratbuton.style.display = 'block';
    resetbuton.style.display = 'none';
    player = false;
    player1.classList.add('activeplayer');
    player2.classList.remove('activeplayer');
    kraltacp2.style.display = 'none';

}

zaratbuton.addEventListener('click', randomzarat);
puaneklebuton.addEventListener('click', puantopla);

resetbuton.addEventListener('click', sifirla);