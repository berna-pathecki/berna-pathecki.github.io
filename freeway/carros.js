//Carro
let velocidadesCarros = [-4,3,-2,-3,4,-5];
let xCarros = [500,500,0,0,0, 0];
let yCarros =[45,150,215,315,265,95];
let comprimentoCarros = [40,35,50,40,35,50];
let altura = 35;


function mostraCarro(){
  for(let i=0; i<=5; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros[i], altura);
  }
}

function movimentaCarro(){
  for(let i=0; i<=5; i++){
  xCarros[i] -= velocidadesCarros[i];
  if(xCarros[i] < -50){
  xCarros[i] = 480;}
  } 
  for(let i=0; i<=5; i++){
  xCarros[i] -= velocidadesCarros[i];
  if(xCarros[i] > 515){
  xCarros[i] = -20;
    }
  }
}