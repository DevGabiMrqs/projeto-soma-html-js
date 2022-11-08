// Selecionando o botão somar, a partir do doc eu seleciona a id button 
//a partir do button adicionei um evento de click, que me dará um callback de soma.
let btnSomar = document.querySelector('#btnSomar')
btnSomar.addEventListener('click', () => {
    soma()
})

//Seleciono os campos v1 e v2, a partir do doc eu seleciono a id valor, e faço uma
//função de soma, transformando eles para inteiro pois estavam concatenando antes, 
//depois crio uma const do valorSomado, e dou console, depois crio a constante resultado a partir do doc
//eu seleciono a id resultado e junto com o campo recebo o valor somado.
let campoV1 = document.querySelector('#valor1')
let campoV2 = document.querySelector('#valor2')

function soma() {
    const valor1 = parseInt(campoV1.value)
    const valor2 = parseInt(campoV2.value)

    const valorSomado = valor1 + valor2
    
    console.log(valorSomado)
    
    const campoResultado = document.querySelector('#resultado')
    campoResultado.textContent = valorSomado
}

