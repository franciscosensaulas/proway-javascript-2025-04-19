let gifsDisponiveis = [
    "https://media.giphy.com/media/YBHJyPCU9h1VewdaPZ/giphy.gif",
    "https://media.giphy.com/media/7whm31rMz0t9yB42Tp/giphy.gif",
    "https://media.giphy.com/media/yALcFbrKshfoY/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3cyZTNmZXhwdThjZ2doejkxZjBoN3F1amRyM215M3p6MTdsczgzbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G1vplGMypxBcp7kx32/giphy.gif",
    "https://media.giphy.com/media/e6TR9n00dL3JS/giphy.gif",
    "https://media.giphy.com/media/BdAn5S0xigpO/giphy.gif"
]

// Selecionar um elemento por tag
let a = document.querySelector("a");

// Selecionar um elemento por id
// <input id="campo-nome">
let campoNome = document.querySelector("#campo-nome");

// Selecionar um elemento por uma classe
// <div class="estilizar-campo">
// ....
// </div>
let campo = document.querySelector(".estilizar-campo");

// Selecionar um elemento por seu name
// <input id="campo-sobrenome" name="sobrenome">
let campoSobrenome = document.querySelector("[name='sobrenome']");

// Selecionar elementos por uma classe
// Buscar todos os elementos que contém a class="estilizar-campo"
let campos = document.querySelectorAll(".estilizar-campo");

// querySelector => retorna um elemento ou nenhum(caso não encontrar o elemento)
// querySelector => retorna uma lista com os elementos encontrados ou uma lista vazia


function estilizarParagrafo() {
    let paragrafo = document.getElementById("exemplo-paragrado-do-id");
    paragrafo.classList.add("estilizar-paragrafo");
}

function alterarVisibilidadeTagP() {
    // Selecionando todas as tags p da página
    let paragrafos = document.getElementsByTagName("p");

    // Percorrer cada uma das tags p
    // for(let i = 0; i < paragrafos.length; i = i + 1){
    //     let paragrafo = paragrafos[i];  
    //     if (paragrafo.style.display == "block" || paragrafo.style.display == "")
    //         paragrafo.style.display = "none";
    //     else
    //         paragrafo.style.display = "block";      
    // }

    Array.from(paragrafos).forEach(paragrafo => {
        if (paragrafo.style.display == "block" || paragrafo.style.display == "")
            paragrafo.style.display = "none";
        else
            paragrafo.style.display = "block";
    });
}

function alterarTamanhoCaixa(){
    let divCaixas = document.getElementsByName("caixa");
    
    if (divCaixas.length === 0){
        alert("Div da caixa não encontrada com o nome 'caixa'.")
        return;
    }

    // Pegar o primeiro elemento da lista de elementos
    let divCaixa = divCaixas[0];
    // Pegar do elemento(div) os estilos que estão aplicados naquele instante
    let tamanhoCaixa = window.getComputedStyle(divCaixa);
    
    let largura = parseInt(tamanhoCaixa.width, 10);
    let altura = parseInt(tamanhoCaixa.height, 10);
    
    let novaLargura = largura + 20;
    let novaAltura = altura + 20;

    // Alterar o width e height da div de 20 em 20
    divCaixa.style.width = novaLargura + "px";
    divCaixa.style.height = novaAltura + "px";
}

function criarGif(){
    let divs = document.getElementsByClassName("gifs");
    if (divs.length === 0){
        alert("Não foi possível criar o gif")
        return
    }

    let divGifs = divs[0];

    let indiceAleatorio = Math.floor(Math.random() * 6)
    let gifAleatorio = gifsDisponiveis[indiceAleatorio];

    let imagem = `<img src="${gifAleatorio}">`
    
    divGifs.innerHTML += imagem;
}

function adicionarAtalho(e){
    // Alt + G 
    const tecla = e.key.toLowerCase();
    if(e.altKey && !e.shiftKey){
        switch(tecla){
            case "g": // Alt + G
                criarGif();
                break;
            case "arrowup": // Alt + ↑
                movimentar("cima");
                break;
            case "arrowdown": // Alt + ↓
                movimentar("baixo");
                break;
            case "arrowleft": // Alt + ←
                movimentar("esquerda");
                break;
            case "arrowright": // Alt + →
                movimentar("direita");
                break;
        }
        // Encerra a execução daquele atalho
        e.preventDefault();
    }
}

function movimentar(direcao){
    let divCaixas = document.getElementsByName("caixa");
    if (divCaixas.length === 0){
        alert("Div da caixa não encontrada com o nome 'caixa'.")
        return;
    }

    // Pegar o primeiro elemento da lista de elementos
    let divCaixa = divCaixas[0];
    // Pegar do elemento(div) os estilos que estão aplicados naquele instante
    let estiloComputado = window.getComputedStyle(divCaixa);

    let topAtual = parseInt(estiloComputado.top, 10);
    let leftAtual = parseInt(estiloComputado.left, 10);

    let novoTop = topAtual;
    let novoLeft = leftAtual;
    const passo = 10;
    // window.innerHeight é altura da janela
    switch(direcao){
        case "cima": novoTop -= passo; break;
        case "baixo": novoTop += passo; break;
        case "direita": novoLeft += passo; break;
        case "esquerda": novoLeft -= passo; break;
    }

    divCaixa.style.top = novoTop + "px";
    divCaixa.style.left = novoLeft + "px";
}

document.addEventListener("keyup", adicionarAtalho);

/*
Exercícios:
Ex. 1: 
    HTML:
        - Criar uma página com os seguintes elementos:
            - Label referenciando o id nome-pet ex.: <label for='idade-cliente'>Idade</label>
            - Campo com o id nome-pet ex.: <input type="number" id="idade-cliente">
            - Criar um botão Obter por Id que chame a função apresentarPet() 
            - Adicionar o script no html chamando o 'scripts/pet.js'

    JAVASCRIPT
        - Criar o arquivo pet.js dentro da pasta scripts
        - Criar a função apresentarPet()
        - Utilizar o getElementById para pegar o campo do nome do pet
        - Obter o valor do campo do nome do pet (o valor que o usuário digitou)
        - Apresentando o nome do pet para o usuário com alert
        - Alterar a cor da fonte do campo para vermelho

 

*/