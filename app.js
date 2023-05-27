 const textArea = document.querySelector(".text-area");
 const mensaje = document.getElementById("resultado-pedido");
 const detector1 = document.querySelector(".activador1");
 const detector2 = document.querySelector(".activador2");

 let encriptador = true;
 //Laves de encriptacion

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


//Encriptar

function encriptar (stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

//Desencriptar
function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

//Botones

function btnEnctiprar(){
    const textoEncriptado = encriptar(textArea.value);
    comprobarTexto(textArea.value);
    if (encriptador == true){
    mensaje.textContent = textoEncriptado;
    estadoMensaje();
    }
    textArea.value = "";
}

function btnDesenctiprar(){
    const textoDesencriptado = desencriptar(textArea.value);
    comprobarTexto(textArea.value);
    if (encriptador == true){
    mensaje.textContent = textoDesencriptado;
    estadoMensaje();
    }
    textArea.value = "";
}

//Boton de copiar

function copiarContenido() {
    let resultado = document.getElementById("resultado-pedido").textContent;
    let inputTemp = document.createElement("input");

    inputTemp.value = resultado;

    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);
}

// swich

function estadoMensaje() {
    if(textArea.value != ""){
        detector1.style.display = "none";
        detector2.style.display = "inline-block";
    }
    else{
        detector1.style.display = "inline-block";
        detector2.style.display = "none";
    }
}

// Comprobar las mayusculas y acentos.

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function comprobarTexto(texto){
    let textoSinAcentos = removerAcentos(texto);

    if (texto !== texto.toLowerCase() || texto !== textoSinAcentos) {
        swal("Error", "El texto debe estar en minúsculas y sin acentos.", "error", {
            button: false,
        });
        encriptador = false;
    }
    else{
        encriptador = true;
    }
}