function iniciar(){
movimientos = 0;
reparteTarjetas(niveles[nivelActual].tarjetas);
document.querySelector("#mov").innerText = "00";
maxContador();
document.querySelector(".selecciona-nivel").classList.remove("visited");
document.querySelector("#endgame").classList.remove("visited");
document.querySelector("#gameover").classList.remove("visited");
document.querySelector("#timeover").classList.remove("visited");
document.querySelector("#subenivel").classList.remove("visited");

document.querySelectorAll(".tarjeta").forEach(
    function(elemento){
        elemento.addEventListener("click", descubrir);
    }
);

if (!modoRelax) {
    iniciaCronometro();
  } else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
  }
}

function reiniciar (){
 nivelActual = 0;
 actualizaNivel();
 iniciar();   
}

function iniciaJuegoNormal() {
    modoRelax = false;
    document.querySelector("#bienvenida").classList.remove("visited");
    iniciar();
    document.querySelector(".control-nivel").classList.add("control-oculto");
  }
  
  function iniciaJuegoRelax() {
    modoRelax = true;
    document.querySelector("#bienvenida").classList.remove("visited");
    iniciar();
  }
  