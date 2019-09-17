
//Vaca
let yVaca = 365;
let yOvelha = 365;
let movimentaY = 5;
let colidiu = false;
let xVaca = 350;
let xOvelha = 100;



function movimentaVaca(){
  if(keyIsDown(UP_ARROW)){
   if(yVaca < 0){ yVaca -= 0;
      } else{
      yVaca -= movimentaY;
      }
  }
  
  
  if(keyIsDown(DOWN_ARROW)){
  if(yVaca >390 ){ yVaca -= 0;
  } else {
  yVaca += movimentaY;
  }
  }
}

 function movimentaOvelha(){
  if(keyIsDown(87)){
   if(yOvelha < 0){ yOvelha -= 0;
      } else{
      yOvelha -= movimentaY;
      }
  }
  
  
  if(keyIsDown(83)){
  if(yOvelha >390 ){ yOvelha -= 0;
  } else {
  yOvelha += movimentaY;
  }
  }
}   
  
function colisaoAtores(){
  for(let i=0; i< imagemCarros.length; i++){
 colidiu = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarros[i],altura,xVaca,yVaca,15)
  if(colidiu){
  console.log("Colidiu")
  yVaca = 365
    somColidiu.play();
    if(placar>0)
    placar -=1;
    }
  }
  
  
    for(let i=0; i< imagemCarros.length; i++){
 colidiu = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarros[i],altura,xOvelha,yOvelha,15)
  if(colidiu){
  console.log("Colidiu")
  yOvelha = 365
    somColidiu.play();
    if(placarDois>0)
    placarDois -=1;
  }
  }
}

