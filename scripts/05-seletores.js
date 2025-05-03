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
