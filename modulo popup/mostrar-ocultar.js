function muestraMenu(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    document.querySelector(".modulo").classList.toggle("activo");
    document.querySelector(".abrir").classList.toggle("oculto");
  }
  
  function ocultaMenu(evento) {
    evento.preventDefault();
    document.querySelector(".modulo").classList.remove("activo");
    document.querySelector(".abrir").classList.remove("oculto");
  }
  
  function clickFueraDeMenu(evento) {
    if (evento.target.closest(".modulo")) {
      return;
    }
    document.querySelector(".modulo").classList.remove("activo");
    document.querySelector(".abrir").classList.remove("oculto");
  }
  
  function teclaEscCierraMenu(evento) {
    if (evento.key === "Escape") {
      document.querySelector(".modulo").classList.remove("activo");
      document.querySelector(".abrir").classList.remove("oculto");
    }
  }
  
  document.querySelector(".abrir").addEventListener("click", muestraMenu);
  document.querySelector(".cerrar").addEventListener("click", ocultaMenu);
  document.addEventListener("click", clickFueraDeMenu);
  document.addEventListener("keydown", teclaEscCierraMenu);