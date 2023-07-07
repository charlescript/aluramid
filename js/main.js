// // Função de som POM
// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play();
// }

// //Função de som TIM
// function tocaSomClap() {
//     document.querySelector('#som_tecla_clap').play();
// }

// //Função de som TIM
// function tocaSomTim() {
//     document.querySelector('#som_tecla_tim').play();
// }

// function tocaSomPuff(){
//     document.querySelector('#som_tecla_puff').play();
// }

// function tocaSomSplash() {
//     document.querySelector('#som_tecla_splash').play();
// }

// function tocaSomToin() {
//     document.querySelector('#som_tecla_toim').play();
// }

// function tocaSomPsh() {
//     document.querySelector('#som_tecla_psh').play();
// }

// function tocaSomTic() {
//     document.querySelector('#som_tecla_tic').play();
// }

// function tocaSomTom() {
//     document.querySelector('#som_tecla_tom').play();
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;
// document.querySelector('.tecla_clap').onclick = tocaSomClap;
// document.querySelector('.tecla_tim').onclick = tocaSomTim;
// document.querySelector('.tecla_puff').onclick = tocaSomPuff;
// document.querySelector('.tecla_splash').onclick = tocaSomSplash;
// document.querySelector('.tecla_toim').onclick = tocaSomToin;
// document.querySelector('.tecla_psh').onclick = tocaSomPsh;
// document.querySelector('.tecla_tic').onclick = tocaSomTic;
// document.querySelector('.tecla_tom').onclick = tocaSomTom;



// let sons = [tocaSomPom,tocaSomClap, tocaSomTim, 
//             tocaSomPuff, tocaSomSplash, tocaSomToin,
//             tocaSomPsh, tocaSomTic, tocaSomTom];

const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

for (let cont = 0; cont < listaDeTeclas.length; cont++) {
    // listaDeTeclas[cont].onclick = sons[cont];

    const tecla = listaDeTeclas[cont];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }


    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}


// switch (listaDeTeclas) {

//     case listaDeTeclas[0].onclick = tocaSomPom:
//         function tocaSomPom() {
//             document.querySelector('#som_tecla_pom').play();
//         }
//     break;

//     case listaDeTeclas[1].onclick = tocaSomClap:
//         //Função de som CLAP
//         function tocaSomClap() {
//             document.querySelector('#som_tecla_clap').play();
//         }
//     break;

//     case listaDeTeclas[2].onclick = tocaSomTim:
//         //Função de som CLAP
//         function tocaSomTim() {
//             document.querySelector('#som_tecla_tim').play();
//         }
//     break;

//     case listaDeTeclas[3].onclick = tocaSomPuff:
//         //Função de som CLAP
//         function tocaSomPuff() {
//             document.querySelector('#som_tecla_puff').play();
//         }
//     break;

//     case listaDeTeclas[4].onclick = tocaSomSplash:
//         //Função de som CLAP
//         function tocaSomSplash() {
//             document.querySelector('#som_tecla_splash').play();
//         }
//     break;

//     case listaDeTeclas[5].onclick = tocaSomToim:
//         //Função de som CLAP
//         function tocaSomToim() {
//             document.querySelector('#som_tecla_toim').play();
//         }
//     break;

//     case listaDeTeclas[6].onclick = tocaSomPsh:
//         //Função de som CLAP
//         function tocaSomPsh() {
//             document.querySelector('#som_tecla_psh').play();
//         }
//     break;

//     case listaDeTeclas[7].onclick = tocaSomTic:
//         //Função de som CLAP
//         function tocaSomTic() {
//             document.querySelector('#som_tecla_tic').play();
//         }
//     break;

//     case listaDeTeclas[8].onclick = tocaSomTom:
//         //Função de som CLAP
//         function tocaSomTom() {
//             document.querySelector('#som_tecla_tom').play();
//         }
//     break;
// }

//listaDeTeclas[0].onclick = tocaSomPom;