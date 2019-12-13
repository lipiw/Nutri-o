var btnAdicionar = document.querySelector("#buscar-pacientes");

btnAdicionar.addEventListener("click", function () {

    //Variavel para fazer requisição
    var xhr = new XMLHttpRequest();

    //abrindo requisicao e expecificando da onde
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //quando sua resposta estiver carregada, faça essa funcao
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        console.log(xhr.responseText);

        //se der tudo certo
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
        var resposta =xhr.responseText;
        //convertendo para um objeto javascript
        var pacientes = JSON.parse(resposta);

        //para cada um de "pacientes"
        pacientes.forEach(function (paciente) {
            //adiciona paciente na tabela
            adicionaPacienteNaTabela(paciente);
        })
    }else{
        
        erroAjax.classList.remove("invisivel");
    }
    });
    

    //eviando requisicao
    xhr.send();
});