function iniciaCronometro(){
    var segundos = 0;
    var minutos = 1;
    var segundosTexto;
    var minutosTexto;
    var cromometro;
 
    function actualizarContador(){
        segundos = segundos - 1;
        if (segundos < 0){
            segundos = 59;
            minutos = minutos - 1;
        }
        if (minutos < 0){
            segundos = 0;
            minutos = 0;
            clearInterval(cromometro);
        }
        segundosTexto = segundos;
        minutosTexto = minutos;
        if(segundos < 10){
            segundosTexto = "0"+ segundos;
        }
        if(minutos < 10 ){
            minutosTexto = "0" + minutos;
        }

        document.querySelector("#minutos").innerText = minutosTexto;
        document.querySelector("#segundos").innerText = segundosTexto;

    }
    setInterval(actualizarContador, 1000);
}