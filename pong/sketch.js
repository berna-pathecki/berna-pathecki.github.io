//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raioBolinha = diametro/2;
let corBolinha = [0,0,0];
let velocidadeX = 10;
let velocidadeY = 10;

//Variáveis da Pontuação
let pontosP1 = 0;
let pontosP2 = 0;

//Variáveis SOM
let ponto;
let raquetada;


//Variáveis Raquete
let alturaRaquete = 100;
let larguraRaquete = 20;
let corMinhaRaquete = [255,0,0];
let corRaqueteOponente = [0,0,255];

//Variaveis Posição Raquete
let xMinhaRaquete = 580;
let yMinhaRaquete = 150;
let xRaqueteOponente = 0;
let yRaqueteOponente = 150;

//Função Responsável pelo SOM
function preload() {
  soundFormats('mp3', 'ogg');
  raquetada = loadSound('raquetada.mp3');
  ponto = loadSound('ponto.mp3');
}



//Config. Inicial
function setup() {
  createCanvas(600, 400);
  largura = width;
  altura = height;
  print("Largura: "+largura+"  Altura: "+altura);
 
}


//Desenha - Loop Infinito while(1)
function draw() {
  background(255,255,45);
  if(!(pontosP1 >=10 || pontosP2 >=10))
  jogo();
  else
  vitorioso();

}//Fechamento do DRAW

function jogo(){
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
  pontos();
}



function vitorioso(){
  if(pontosP1 >= 10){
     textSize(40);
     text('P1 Venceu ', 200, 200);
     fill(0, 102, 153);
     }
  if(pontosP2 >= 10){
     textSize(40);
     text('P2 Venceu ', 200, 200);
     fill(0, 102, 153);
    }
}


function pontos(){
  fill(255,255)
  strokeWeight(2)
  stroke(0)
  rect(550,5,45,30,10)
  rect(10,5,45,30,10)

  textSize(32)
  fill(0, 102, 180);
  text('Pontuação',200,30);
  fill(0);
   //Pontos P1 
  text(' '+ pontosP1, 550, 30);
  if(xBolinha <= 10){
    pontosP1 += 1;
    ponto.play();
     }
  //Pontos P2
  text(' '+ pontosP2, 10, 30);
  if(xBolinha >= 590){
    pontosP2 += 1;
    ponto.play();
     }
  text('P1',560,390);
  text('P2',5,390);
  
}





function verificaColisaoRaqueteOponente()
{
  //Colisão Raquete

  if(xBolinha - raioBolinha < xRaqueteOponente + larguraRaquete
     && yBolinha - raioBolinha < yRaqueteOponente + alturaRaquete
     && yBolinha + raioBolinha > yRaqueteOponente)
  {if(!(xBolinha < 300 && velocidadeX > 0 || xBolinha > 300 && velocidadeX < 0)){
    velocidadeX *= -1;
    raquetada.setVolume(5)
    raquetada.play();
    } 
  }
}


function verificaColisaoRaquete()
{
  //Colisão Raquete
  if(xBolinha + raioBolinha > xMinhaRaquete 
     && yBolinha - raioBolinha < yMinhaRaquete + alturaRaquete
     && yBolinha + raioBolinha > yMinhaRaquete)
  {if(!(xBolinha < 300 && velocidadeX > 0 || xBolinha > 300 && velocidadeX < 0)){
    velocidadeX *= -1;
    raquetada.setVolume(5)
    raquetada.play();
    }
  }
}


function movimentaMinhaRaquete()
{
  if(keyIsDown(UP_ARROW)){
    if(yMinhaRaquete < 0){
      yMinhaRaquete = 0;//Corrigido
    }else{
    yMinhaRaquete -= 10;//Velocidade da Raquete/Cima   
    }
  }
    
  if(keyIsDown(DOWN_ARROW)){
        if(yMinhaRaquete > 300){
      yMinhaRaquete = 300;//Corrigido
    }else{
  yMinhaRaquete += 10; //Velocidade da Raquete/Baixo
    }
  }
}


function movimentaRaqueteOponente()
{if(keyIsDown(87)){
        if(yRaqueteOponente < 0){
      yRaqueteOponente = 0;//Corrigido
    }
    yRaqueteOponente -= 10;//Velocidade da Raquete/Cima
  }

  if(keyIsDown(83)){
            if(yRaqueteOponente > 300){
      yRaqueteOponente = 300;//Corrigido
    }else{
  yRaqueteOponente += 10; //Velocidade da Raquete/Baixo
    }
  }  
}



function mostraRaquete()
{
  fill(corMinhaRaquete);
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
  
  fill(corRaqueteOponente);
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}


function mostraBolinha()
{
  noStroke();
  fill(corBolinha);
  circle(xBolinha,yBolinha,diametro);
}


function movimentaBolinha()
{
  if(frameCount > 200){
  //Velocidade Horizonte
  xBolinha += velocidadeX;//Incremento de X !!!
  //Velocidade Vertical
  yBolinha += velocidadeY;//Incremento de Y !!!
  }
}


function verificaColisao()
{
  //Colisão X (direita/esquerda)
  if(xBolinha + raioBolinha> largura || xBolinha - raioBolinha <0)   {
    //velocidadeX = velocidadeX + -1;
    velocidadeX *= -1;
  }
  //Colisão Y (superior/inferior)
  if(yBolinha + raioBolinha> altura || yBolinha - raioBolinha <0)
  {
    //velocidadeY = velocidadeY + -1;
    velocidadeY *= -1;
  }

}                              




