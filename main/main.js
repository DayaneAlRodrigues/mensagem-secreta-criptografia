const inputEntrada = document.querySelector(".container__entrada__textarea");
const asideInicial = document.querySelector(".container__saida__inicial");
const inputSaida = document.querySelector(".container__saida__textarea__inicial");

const buttonCriptografar = document.querySelector("#btn__criptografar");
                            

const buttonDescriptografar = document.querySelector("#btn__descriptografar");
                            
const buttonCopiar = document.querySelector("#btn__copiar")
                                .addEventListener("click",copiarTexto);


// chamar  a função do btnCriptografar
buttonCriptografar.addEventListener("click", btnCriptografar);
// chamar  a função a partir do click para limpar a tela
buttonCriptografar.addEventListener("click", limparCampo);

buttonDescriptografar.addEventListener("click", btnDescriptografar);
buttonDescriptografar.addEventListener("click", limparCampo);

//função para limpar o input de entrada
function limparCampo(){
    inputEntrada.value = "";
}

function btnCriptografar (){ 
    //chamar função criptografar com a string no campo de input
     inputSaida.innerHTML = criptografar(inputEntrada.value);
     removeTextareaInicial();
}

function btnDescriptografar (){
    //chamar função descriptografar com a string no campo de input
    inputSaida.innerHTML = descriptografar(inputEntrada.value);
    removeTextareaInicial();
}

function removeTextareaInicial (){
    inputSaida.classList.remove('container__saida__textarea__inicial');
    inputSaida.classList.add('container__saida__textarea');
}
function criptografar(string){
    let criptografado = string
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
    return criptografado;
}

function descriptografar(string){
    let descriptografado = string
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    return descriptografado;
}

function copiarTexto() {
    const verifica = inputSaida.value === "" ? alert("Voce não copiou nada") : inputSaida.value ;
    const copiaTexto =  navigator.clipboard.writeText(inputSaida.value);
}

