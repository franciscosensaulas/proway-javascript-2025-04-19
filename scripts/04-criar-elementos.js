function criarTagH1(){
    // Selecionando a tag body (que utilizaremos para adicionar os elementos)
    let body = document.querySelector("body");

    // Uma string que representa a tag que iremos adicionar
    let tagH1 = "<h1>Cursos</h1>";

    // Adicionar a string que contém a tag no body
    body.innerHTML = body.innerHTML + tagH1;
}

function criarTagH2(){
    let tagH2 = "<h2>Curso de JavaScript Avançado</h2>";

    let body = document.querySelector("body");
    body.innerHTML = body.innerHTML + tagH2;
}