const limit = document.getElementById("ate");
const init = document.getElementById("de");
const quant = document.getElementById("quantidade");
const text = document.getElementById("resultado");
const btnRein = document.getElementById("btn-reiniciar");

function sortear() {
    randomNumbers = [];
    let uniqueNumbers = new Set();
    
    while (uniqueNumbers.size < quant.value) {
        let numero = obterNumeroAleatorio();
        uniqueNumbers.add(numero);
    }

    randomNumbers = Array.from(uniqueNumbers);
    text.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${randomNumbers.join(', ')}</label>`;
    btnRein.className = "container__botao";
}

function obterNumeroAleatorio() {
    let number = Math.floor(Math.random() * (limit.value - init.value + 1)) + parseInt(init.value);
    return number;
}

function reiniciar() {
    quant.value = "";
    init.value = "";
    limit.value = "";
    randomNumbers = [];
    btnRein.className = "container__botao-desabilitado";
    text.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
}

let randomNumbers = [];
let numero;
