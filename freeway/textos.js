let placar = 0;
let placarDois = 0;


function seila(){
  
textSize(25);
textAlign(CENTER);
fill(color(255,0,0));
text("PONTOS",240,30)
  
textSize(25);
textAlign(CENTER);
fill(color(255,0,380));
text("P2        /        P1",240,390)
}


function mostrarPlacar(){
  
  if(yVaca<15){
  placar +=1;
  yVaca=380;
    pontos.play();
  }
textSize(25);
textAlign(CENTER);
fill(color(255,0,0));
text(""+placar,450,30)
  
  if(placar >= 10){
  textSize(25);
textAlign(CENTER);
fill(color(255,0,0));
text("PLAYER UM VENCEU",250,200);
      frameRate(0);
  }
  
}


function mostrarPlacarDois(){
  
  if(yOvelha<15){
  placarDois +=1;
  yVaca2=380;
    pontos.play();
  }
textSize(25);
textAlign(CENTER);
fill(color(255,0,0));
text(""+placarDois,50,30)
  
    if(placarDois >= 10){
  textSize(25);
textAlign(CENTER);
fill(color(255,0,0));
text("PLAYER DOIS VENCEU",250,200);
      frameRate(0);
  }
  
  
}