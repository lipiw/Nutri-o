var adicionar = document.querySelector("#adicionar-paciente");
var form = document.querySelector("#form-adiciona");



adicionar.addEventListener("click", function (event) {
    //Nos permite nao atualizar a pagina quando clica no botao
    event.preventDefault();



    //Pegando o valor de cada campo e colocando em uma variavel
    var paciente = obtemPacienteDoFormulario(form);

   

    var erros = validaPaciente(paciente);
    if (erros.length > 0) {

       exibeMensagensDeErro(erros);
        return;
    }

    

   
    adicionaPacienteNaTabela(paciente);
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    console.log(erros);
    erros.forEach(function(erro){
       var li = document.createElement("li");
       li.textContent = erro;
       ul.appendChild(li); 
    });
}

function obtemPacienteDoFormulario() {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function adicionaPacienteNaTabela(paciente){

     // Criando um elemento e adicionando a uma variavel
     var pacienteTr = montaTr(paciente);

     var tabela = document.querySelector("#tabela-pacientes");
     tabela.appendChild(pacienteTr);
}

function montaTD(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTD(paciente.nome, "info-nome");
    var pesoTd = montaTD(paciente.peso, "info-peso");
    var alturaTd = montaTD(paciente.altura, "info-altura");
    var gorduraTd = montaTD(paciente.gordura, "info-gordura");
    var imcTd = montaTD(paciente.imc, "info-imc");

    //Colocando os elementos TD dentro do paciente TR
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);


    // appendChild() é um metodo que adiciona algo como filho

    return pacienteTr;

}

function validaPaciente(paciente) {
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pose ser em branco");
    }
    
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) 
        erros.push("Peso é invalido");
    
    if(!validaAltura(paciente.altura))
        erros.push("Altura é invalida")
    
        return erros;
}

