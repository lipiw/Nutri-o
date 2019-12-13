//A variavel tabela é o #tabela-pacientes
var tabela = document.querySelector("#tabela-pacientes");

    //Ao dar dois cliques na tabela sera acionada esse funcao:
    tabela.addEventListener("dblclick", function(event){
        
        //Adicionando o evento ao pai do evento
        event.target.parentNode.classList.add("fadeOut");
        //depois de 500ms
        setTimeout(function(){
            //remove o pai do alvo
            event.target.parentNode.remove();
        },500);  
    })
