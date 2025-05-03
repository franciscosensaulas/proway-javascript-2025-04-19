// Selecionando a tag body (que utilizaremos para adicionar os elementos)
let body = document.querySelector("body");

function criarTagH1() {
    // Uma string que representa a tag que iremos adicionar
    let tagH1 = "<h1>Cursos</h1>";
    // Adicionar a string que contém a tag no body
    body.innerHTML = body.innerHTML + tagH1;

    // let h1 = document.createElement("h1");
    // h1.innerText = "Cursos";
    // body.appendChild(h1);

    // let tbody = document.querySelector("tbdoy");

    // let linha = `
    //     <tr>
    //         <td>1</td>
    //         <td>Maria</td>
    //     </tr>
    //     `
    // tbody.innerHTML += linha;

    // let tr = document.createElement("tr");
    // let tdCodigo = document.createElement("td");
    // tdCodigo.innerText = "1";
    // let tdNome = document.createElement("td");
    // tdNome.innerText = "Maria";
    // tr.appendChild(tdCodigo);
    // tr.appendChild(tdNome);
    // tbody.appendChild(tr);

}

function criarTagH2() {
    let tagH2 = "<h2>Curso de JavaScript Avançado</h2>";
    body.innerHTML = body.innerHTML + tagH2;
}

function criarParagrafo() {
    let tagP = "<p>Em JavaScript, a realização de requisições HTTP pode ser feita de forma eficiente utilizando a Fetch API, que permite interagir com servidores através dos métodos da RESTful API, como GET, POST, PUT e DELETE, essenciais para a construção de um CRUD completo (Create, Read, Update, Delete). Com GET, é possível buscar dados de uma API; com POST, enviar novas informações; com PUT, atualizar dados existentes; e com DELETE, remover registros. Para organizar melhor esses processos e promover a reutilização de código, é comum utilizar objetos e classes em JavaScript. As classes permitem estruturar o código de forma mais clara, encapsulando propriedades e métodos relacionados às operações do CRUD, facilitando o gerenciamento de estados e ações sobre os dados recebidos ou enviados via Fetch.</p>"
    // body.innerHtml recebe ele mesmo mais a tag p
    body.innerHTML += tagP;
}

function criarImagem() {
    let tagImg = '<img alt="Logo do js" src="assets/javascript.png">'
    body.innerHTML += tagImg;
}

function criarListaNaoOrdenada() {
    // ol => ordered list (lista ordenada)
    // ul => unordered list (lista não ordenada)
    // let ul = '<ul id="lista-conteudos"><li>Classes</li></ul>'
    let ul = "<ul id=\"lista-conteudos\"><li>Classes</li></ul>" // escapando uma string
    body.innerHTML += ul;
}

function criarCampo() {
    let label = "<label>Conteúdo</label>";
    let campo = "<input type=\"text\" id=\"campo-conteudo\">";
    let botao = "<button onclick='cadastrar()'>Cadastrar</button>";
    body.innerHTML += label + campo + botao;
}

function cadastrar() {
    let campoNome = document.querySelector("#campo-conteudo");
    let nome = campoNome.value;
    let itemDaOl = `<li>${nome}</li>`;

    let listaNaoOrdenada = document.querySelector("#lista-conteudos")
    listaNaoOrdenada.innerHTML += itemDaOl;
}

function criarTudo() {
    criarTagH1()
    criarTagH2()
    criarParagrafo()
    criarImagem()
    criarListaNaoOrdenada()
    criarCampo()
}


// Depuração
// Colocar um breakpoint
// Executar a ação até chegar neste breakpoint
// F10 - Step over (ir para próxima linha)
// F11 - Step into (entrar na função ou ir para próxima linha)
// F8 - Resume

/* 
Ex. 1: Criar uma página exercícios criar_elementos.html
Criar os seguitens botões:
- botão para criar um título
- botão para criar um img que apresente um gif
- botão para criar os seguintes:
    - label para Nome
    - campo para Nome com id campo-nome
    - label para Sobrenome
    - campo para Sobrenome com id campo-sobrenome
    - botão que chama a função apresentarNomeCompleto()

função apresentarNomeCompleto()
    deve pegar o campo do nome
    deve pegar o nome que o usuário digitou do campo
    deve pegar o campo do sobrenome
    deve pegar o sobrenome que o usuário digitou do campo
    concatenar o nome e sobrenome
    apresentar o nome completo

criar função que cria os seguintes campos
idade, altura e peso
dois botões 'Calcular Imc', 'Calcular Ano de Nascimento'
*/