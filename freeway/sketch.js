
function draw() {
  background(imagemEstrada)
  jogo();
  
}

function jogo(){
  movimentaVaca();
  movimentaOvelha();
  movimentaCarro();
  mostraImagens();
  colisaoAtores();
  mostrarPlacar();
  mostrarPlacarDois();
  seila();
  mostraCarro();

}



function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

