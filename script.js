let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");

btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);

function abreModal() {
    modal.style.display = "block";
}

function fechaModal() {
    modal.style.display = "none";
}

let tamanhoFonteAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;

let btnAumentaFonte = document.getElementById("btnAumentaTexto");
let btnDiminuiFonte = document.getElementById("btnDiminuiTexto");

btnAumentaFonte.addEventListener("click", aumentaFonte);
btnDiminuiFonte.addEventListener("click", diminuiFonte);

function aumentaFonte() {
    tamanhoFonteAtual = tamanhoFonteAtual + valorAdicionado;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}

function diminuiFonte() {
    tamanhoFonteAtual = tamanhoFonteAtual - valorSubtraido;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}



let lendo = false;

let btnLeitura = document.querySelector(".botao-leitura");

btnLeitura.addEventListener("click", lerEmVozAlta);

function lerEmVozAlta() {

    
    if (lendo == true) {

      
        if (speechSynthesis.paused == true){
            
            speechSynthesis.resume();
        } else {

            speechSynthesis.pause();
        }
        return;
    }

    let conteudo = document.querySelector("main");
    let texto = conteudo.innerText;

    let fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.onend = finalizarLeitura;

    lendo = true

    speechSynthesis.cancel();
    speechSynthesis.speak(fala);
}

function finalizarLeitura() {
    lendo = false;
}