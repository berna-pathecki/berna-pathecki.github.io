//Váriaveis
let imagemEstrada;
let imagemAtor;
let imagemAtorDois;
let imagemCarros = [];//Array de imagens

let trilha;
let somColidiu;
let pontos;


function preload(){
  //Carregamento das Imagens
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemAtorDois = loadImage("imagens/ovelha.png");
  imagemCarros[0] = loadImage("imagens/carro-1.png");
  imagemCarros[1] = loadImage("imagens/carro-2.png");
  imagemCarros[2] = loadImage("imagens/carro-3.png");
  imagemCarros[3] = loadImage("imagens/carro-1.png");
  imagemCarros[4] = loadImage("imagens/carro-2.png");
  imagemCarros[5] = loadImage("imagens/carro-3.png");

    trilha = loadSound("sons/trilha.mp3");
    somColidiu = loadSound("sons/colidiu.mp3");
    pontos = loadSound("sons/pontos.wav");
  }
  
function mostraImagens(){
  image(imagemAtor,xVaca,yVaca, 30,30);
  image(imagemAtorDois,xOvelha,yOvelha, 30,30);
  for(let i=0; i< imagemCarros.length; i++){

  }
}
