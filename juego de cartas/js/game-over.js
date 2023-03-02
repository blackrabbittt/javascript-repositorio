function gameOver(){
    clearInterval(cronometro);
    document.querySelector("#gameover").classList.add("visited");
}

function timeOver() {
    document.querySelector("#timeover").classList.add("visited");
  }