//function avisar(){
    //alert("bem vindo ao conversor de dolar para real"); // alert exibe uma mensagem na tela em forma de aviso 
//<button onclick="avisar()">clique aqui</button> onclick chama a função avisar na tela  

//let botao = document.querySelector("#botao"); // crio a variavel pra armazenar o botao no html e depois seleciono o botao com o querySelector
//botao.addEventListener("click", avisar);  // tb posso fazer com arrow function anonima // addEventListener recebe dois parametros/argumentos: o primeiro é oq vou fazer e o segundo é oq vai mudar quando eu fazer
// document é o documento, ou seja: a página que estou trabalhando 

// evento p que tudo que o usuario digite no input apareca no console

//armazenar em uma variavel cada input: // querySelector serve para selecionar um elemento do html 
//let usdInput = document.querySelector("#usd") // uso os seletores de css para selecionar qual objeto vou mexer 
//let brlInput = document.querySelector("#brl")

//usdInput.addEventListener("keyup", () =>{ // addEventListener serve para adicionar um evento ao elemento selecionado
//    console.log(usdInput.value)//mostra o que o usuario digitou no input
//}) 

//brlInput.addEventListener("keyup", () =>{
//    console.log("apertou o campo BRL")
//})


//FAZENDO O SISTEMA FUNCIONAR:

let dolar = 5.71

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")



usdInput.addEventListener("keyup", () =>{
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () =>{
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () =>{
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () =>{
    brlInput.value = formatCurrency(brlInput.value)
})



usdInput.value = "1000,00"
convert("usd-to-brl")



function formatCurrency(value){
    let fixedValue = fixValue(value) // fixValue vai ajustar o valor
    let options = {
        useGrouping: false, // nao vai colocar ponto em milhar, centena etc
        minimumFractionDigits  : 2, // vai colocar duas casas decimais apos o ponto
    }
    let formatter = new Intl.NumberFormat("pt-br", options)  // eh uma biblioteca interna do js para internacionalizacao
    return formatter.format(fixedValue)
    // utilizar funccao de formatar 
    //retorna o valor formatado
}

function fixValue(value){ // essa funcao vai ajustar olvalor
    let fixedValue = value.replace(",", ".") // replace significa trocar, ou seja, usaremos para trocar a virgula por um ponto
    let floatValue = parseFloat(fixedValue) // parseFloat serve para converter uma string em um numero
    return isNaN(floatValue) ? 0 : floatValue; // if condicional, se o valor for invalido, vai retornar 0
}

function convert(type){
    if(type == "usd-to-brl"){
      let fixedValue = fixValue(usdInput.value)
      let result = fixedValue * dolar
      result = result.toFixed(2) // vai arredondar para 2 casas decimais para nao dar uma dizima periodica

      brlInput.value = formatCurrency(result)
      
      
    } else if(type == "brl-to-usd"){
        let fixedValue = fixValue(brlInput.value)
        let result = fixedValue / dolar
        result = result.toFixed(2)
        usdInput.value = formatCurrency(result)
    }
}