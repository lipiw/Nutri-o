//Adicionando o campo de filtro a uma variavel
var campoFiltro = document.querySelector("#filtrar-tabela");

/*
    Adicionando um evento ao filtro.
    "Input" é quando você digita.
    Quando digitarem nesse filtro ira acontecer essa função:
*/
campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    //se o valor de campoFiltro tiver algo
    if (this.value.length > 0) {

        //Um for para andar por todos os pacientes.
        for (var i = 0; i < pacientes.length; i++) {

            //paciente é igual o paciente atual.
            var paciente = pacientes[i];

            //tdNome é o campo nome de cada paciente.
            var tdNome = paciente.querySelector(".info-nome");

            //tdNome.textContent me da o texto que esta no tdNome
            var nome = tdNome.textContent;

            //Criando uma Expressao regular(RegExp) 
            //RegExp(oq vc quer q busca, se liga pra letra maiscula/minuscula)
            var expressao = new RegExp(this.value, "i");

            //Quero testar se no NOME não ha pelo menos um pedacinho de expressao
            if(!expressao.test(nome)){
                //se não tem, remove adicionando a classe invisivel
                paciente.classList.add("invisivel");
            } else {
                //se tem, retira a class invisivel
                paciente.classList.remove("invisivel");
            }
        }
        //se nao tem nada no campo, retira a classe invisivel de cada paciente
    }else{
        for(var i = 0; i< pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})