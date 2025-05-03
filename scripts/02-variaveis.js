function exemploApresentar() {
    let nome = "Vanish"; // string
    let preco = 13.00; // int
    let quantidade = 30; // float

    let total = preco * quantidade;

    // Concatenando o texto "Nome: " e "Vanish" que está armazenada na variável nome
    console.log("Nome: " + nome);
    console.log("Quantidade: " + quantidade);
    console.log("Preço unitário: " + preco);
    console.log("Total: " + total);
}

function exemploComDesconto() {
    let jogo = "RD2";
    let categoria = "Open World";

    let preco = 0;
    // se a categoria for igual a "Open World"
    if (categoria == "Open World") {
        preco = 150.00; // Definimos o preço como 150.00
    } else if (categoria == "RPG") { // senão se a categoria for igual a "RPG"
        preco = 30.00; // Definimos o preço como 30.00
    }

    console.log("Jogo: " + jogo);
    console.log("Categoria: " + categoria);
    console.log("Preço: " + preco);
}

// Criar uma função exercicioCalcularDataNascimento
// Criar uma variável chamada nome e armazenar seu nome nela
// Criar uma variável idade e armazenar sua idade nela
// Criar uma variável ano de nascimento e com a sua idade calcule o seu ano de nascimento
// Apresentar no console nome, idade, ano de nascimento

// Padrão de nomenclatura de variáveis (camelCase)
// nome
// nomeCompleto
// precoUnitario
function exercicioCalcularDataNascimento() {
    // Criar uma variável chamada nome e armazenar seu nome nela
    let nome = "Francisco";  // Substitua "Seu Nome" pelo seu nome real

    // Criar uma variável idade e armazenar sua idade nela
    let idade = 25;  // Substitua 25 pela sua idade real

    // Criar uma variável ano de nascimento e com a sua idade calcule o seu ano de nascimento
    let anoAtual = 2025;  // Obtém o ano atual
    let anoNascimento = anoAtual - idade;  // Calcula o ano de nascimento

    // Apresentar no console nome, idade, ano de nascimento no formato solicitado
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Ano de Nascimento: " + anoNascimento);
}

function exemploSolicitarDados() {
    // Entrada de dados
    let nome = prompt("Digite o seu nome");
    let sobrenome = prompt("Digite o seu sobrenome");

    // Processamento
    let nomeCompleto = nome + " " + sobrenome;

    // Saída de dados
    alert("Nome completo: " + nomeCompleto);
}

function exemploConversaoTipos() {
    // O que o usuário digitar vem como texto, convertemos para o devido tipo
    // Converter de string para int
    let numero = parseInt("2");

    // Converter de string para float
    let valor = parseFloat("2013.29");

    console.log("Número: " + numero)
    console.log("Valor: " + valor);
}

function exemploSolicitarDadosComConversao() {
    let curso = prompt("Digite o nome do curso");
    let categoria = prompt("Digite a categoria");
    let totalCurso = parseFloat(prompt("Digite o total que será pago"))

    let desconto;
    if (categoria == "Tecnologia") {
        desconto = 1999.90;
    } else if (categoria == "Informática Básica") {
        desconto = 150.00;
    } else {
        desconto = 75.90;
    }

    let totalCursoComDesconto = totalCurso - desconto;
    alert("O curso " + curso + " tem um desconto de " + desconto +
        ", vc pagará somente: " + totalCursoComDesconto);
}

function exemploNumero(){
    let numero = parseInt(prompt("Digite um número"));

    if(numero > 0){
        console.log("Número positivo");
    } else if (numero < 0){
        console.log("Número negativo");
    } else {
        console.log("Número neutro");
    }

    if (numero % 2 == 0){
        console.log("Número par");
    }else {
        console.log("Número ímpar");
    }

    if (numero >= 1000){
        console.log("Número maior ou igual a 1000");
    }
    if (numero <= 200){
        console.log("Número menor ou igual a 200");
    }
    // Símbolo de diferente é !=
    if (numero != 14){ 
        console.log("Número não é o 14");
    } else { 
        console.log("Número é o 14");
    }
}

// Chama a função para exibir os resultados
// exemploConversaoTipos();


// Executando a função exemploApresentar
// exemploApresentar();
// exemploComDesconto();