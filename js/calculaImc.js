
var titulo = document.querySelector("h1");
console.log(titulo);


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var calculoImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        
        pesoEhValido = false;
        tdPeso.textContent = "Peso invalido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        
        pesoEhValido = false;
        tdAltura.textContent = "Altura invalido!";
        paciente.classList.add("paciente-invalido");
    }


    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        calculoImc.textContent = imc;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 1 && peso < 500)
    return true;

        return false;
}

function validaAltura(altura){
    if(altura >= 1 && altura < 3)
    return true;

        return false;
}

    