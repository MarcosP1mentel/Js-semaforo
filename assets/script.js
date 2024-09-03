const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const sinalAuto = (event) => {
    pararAuto();
    ligar[event.target.id]();
}

const nextIndex = () => {
    if (colorIndex < 2 ){
        colorIndex++
    } else {
        colorIndex = 0;
    }
}

const trocarCor = () => {
    const cores = ['red', 'yellow', 'green']
    const cor = cores[colorIndex];
    ligar[cor]();
    nextIndex();
}

const pararAuto = () => {
    clearInterval ( intervalId );
}

const ligar = {
    'red': () => img.src = './assets/img/vermelho.png',
    'yellow': () => img.src = './assets/img/amarelo.png',
    'green': () => img.src = './assets/img/verde.png',
    'automatic': () => intervalId = setInterval(trocarCor, 1000 )
}

buttons.addEventListener('click', sinalAuto);