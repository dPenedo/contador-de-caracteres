
// captura
const entradaTexto = document.querySelector(".entradaTexto") 
const submitTexto = document.querySelector(".submitTexto") 

const resultado = document.querySelector(".resultado") 
let radioEspacios = document.querySelector('input[name="espacios"]:checked').value



function calcularCaracteres(){
    let nuevoRadioEspacios = document.querySelector('input[name="espacios"]:checked').value

    if(nuevoRadioEspacios!==radioEspacios){
        radioEspacios = nuevoRadioEspacios}
    if (radioEspacios ==="contando"){
    const numeroCaracteres = entradaTexto.value.length
    resultado.textContent = `El texto tiene ${numeroCaracteres} caracteres, contando los espacios`
    console.log("contando: " + entradaTexto.value)
    }else if(radioEspacios==="sin-contar"){
    let textoSinEspacios = entradaTexto.value.replaceAll(' ','')
    let numeroSinEspacios = textoSinEspacios.length
    console.log("No contando: " + numeroSinEspacios)
    resultado.textContent = `El texto tiene ${numeroSinEspacios} caracteres, sin contar los espacios`
    }
}

submitTexto.addEventListener('click', calcularCaracteres)

