function finalizar(){
    if( nivelActual < niveles.length - 1){
    document.querySelector("#subenivel").classList.add("visited");
    }
    else{
        document.querySelector("#endgame").classList.add("visited");
    }
}