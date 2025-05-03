function processarCliente() {
    let campoNome = document.querySelector("#nome");
    let nome = campoNome.value;

    let campoTipo = document.querySelector("#tipo");
    let tipo = campoTipo.value;

    let campoCpf = document.querySelector("#cpf");
    let cpf = campoCpf.value;

    let campoCnpj = document.querySelector("#cnpj");
    let cnpj = campoCnpj.value;

    gerar_csv(nome, tipo, cpf, cnpj);

    alert("Nome do cliente: " + nome + "\nTipo: " + tipo + "\nCPF: " + cpf + "\nCNPJ: " + cnpj)
}

function apresentarPf() {
    let divPessoaFisica = document.querySelector("#pessoa-fisica-cpf");
    divPessoaFisica.style.display = "block";

    let divPessoaJuridica = document.querySelector("#pessoa-juridica-cnpj");
    divPessoaJuridica.style.display = "none";
}

function apresentarPj() {
    let divPessoaJuridica = document.querySelector("#pessoa-juridica-cnpj");
    divPessoaJuridica.style.display = "block";

    let divPessoaFisica = document.querySelector("#pessoa-fisica-cpf");
    divPessoaFisica.style.display = "none";
}


function apresentarCampoPorTipoPessoa() {
    let campoTipo = document.querySelector("#tipo");
    let tipoSelecionado = campoTipo.value;

    if (tipoSelecionado === "pj") {
        apresentarPj();
    } else {
        apresentarPf();
    }
}

function gerar_csv(nome, tipo, cpf, cnpj){
    // Criando um vetor vazio
    let dados = []
    if(tipo === "pf"){
        dados.push(nome, tipo, cpf);
    }else{
        dados.push(nome, tipo, cnpj);
    }
    let cabecalho = ["Nome", "Tipo", "CPF_CNPJ"]

    let csvConteudo = [];

    csvConteudo.push(cabecalho.join(";"))
    csvConteudo.push(dados.join(";"))
    
    let csvConteudoString = csvConteudo.join("\r\n")

    let blob = new Blob([csvConteudoString], {type: "text/csv;charset=utf-8;"})
    let url = URL.createObjectURL(blob);

    let linkParaDownload = document.createElement("a");
    linkParaDownload.setAttribute("href", url);
    linkParaDownload.setAttribute("download", "cliente.csv");
    linkParaDownload.style.visibility = false;

    document.body.append(linkParaDownload);
    linkParaDownload.click();
    document.body.removeChild(linkParaDownload);
}

// Criar 03-exercicio-numeros.html
// Criar o formulário com os seguintes elementos:
//      label Número 1
//      input para o número 1
//      label Número 2
//      input para o número 2
//      botão Somar chamando função somar()
// Adicionar a tag script que chamara o arquivo 03-exercicio-numeros.js

// Abrir o script, criar a função somar()
// Selecionar o campo numero1 com querySelector, armazenando em uma variável (ex.: processarCliente() campoNome)
// Obter o valor do numero1 (ex.: processarCliente() value do nome)
// Converter para inteiro utilizando parseInt o numero1
// Selecionar o campo numero2 com querySelector
// Obter o valor do numero2
// Converter para inteiro utilizando parseInt o numero2
// Realizar a soma e apresentar com alert

// Ex.2: Criar uma tela com os seguintes elementos:
// Nome (input)
// Posição (select): Tank, Curandeiro, Suporte
// Nível: (input range)
// Poder ataque do tank: (deve apresentar somente quando for tank)
// Quantidade pessoas curadas: (deve apresentar somente quando for curandeiro)
// Quantidade de mortes: (deve apresentar somente quando for suporte)
// Botão Apresentar tank
// Botão Apresentar curandeiro
// Botão Apresentar suporte
// Salvar (deve gerar o csv com os dados da tela)


// Criar uma tela com nome, nota1, nota2, nota3, percentual presença
// Botão para calcular a média
// Botão para apresentar o status (Reprovado por Nota/Aprovado/Reprovado por frequencia)
// 



let campoSalario = document.querySelector("#salario"); // obter o input
let salario = parseFloat(campoSalario.valeu); // obter o valor do input