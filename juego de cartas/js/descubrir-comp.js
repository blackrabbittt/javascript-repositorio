function descubrir(){
    var descubiertas;
    var tarjetasPendiente;
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

    if(totalDescubiertas.length > 1){
return;
    }

    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if(descubiertas.length < 2){
return;
    }

comparar(descubiertas);
actualizarContador();
tarjetasPendiente = document.querySelectorAll(".tarjeta:not(.acertada)");
if( tarjetasPendiente.length === 0){
setTimeout(finalizar, 1000);
}
}

function comparar(tarjetasAcomparar){
    if (tarjetasAcomparar[0].dataset.valor === tarjetasAcomparar[1].dataset.valor){
    acierto(tarjetasAcomparar);
} else{
    error(tarjetasAcomparar);
}
}