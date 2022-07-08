var calleImg;
var calle;
var pika, pikacorre;
var distance=0;
var fruta, fruta2, fruta3;
var fru, fra, fri;
var frutaGroup;
var gameState = "play";
var fin,finImg;
var pokeImg,pokeGroup,aguacateGroup;
var puntos=0;
var barra,barra2;
var fuera,fueras;

function preload(){
    calleImg = loadImage("calle.jpg");

    pikacorre =loadAnimation("pika1.png","pika2.png","pika3.png");

    fru=loadImage("fruta.png");
    fra=loadImage("fruta2.png");
    fri=loadImage("fruta3.png");
    pokeImg=loadImage("poke.png");
    finImg=loadImage("fin.png")
}

function setup() {
 createCanvas(1200,500) //lienzo
 //mover fondo 
 calle =  createSprite(1000,170);
 calle.addImage(calleImg);
 calle.velocityX=-4
 calle.scale=1.5
//personaje
 pika = createSprite(100,300,100,50);
 pika.addAnimation("corre",pikacorre);
 pika.scale=0.4
 //colicion del personaje
 pika.setCollider("rectangle",70,50,150,250,90);
 pika.debug=false;
 //barra para no pasar en limite
 barra=createSprite(100,220,220,10);
 barra2=createSprite(19,500,520,10);
 barra.visible=false;
 barra2.visible=false;
 //nose
 frutaGroup=new Group();
 pokeGroup=new Group();
 aguacateGroup=new Group();
 //fin
 fin = createSprite(610,230);
 fin.addImage(finImg);
 fin.scale = 1;
 fin.visible = false; 

 
}

function draw() {
 
 drawSprites();
    textSize(25);
    text("frutas "+puntos,1020,60);
   
    fill("red")
    text(mouseX+","+mouseY,mouseX,mouseY);
    if(gameState==="play"){
        pokel();
        futas();
        frutas();
        frutal();
        
            
        if (frutaGroup.isTouching(pika)){
            puntos=puntos + 1
            if(pika.isTouching(frutaGroup,
                function(fuera,fueras){
                    frutas(fueras.x,fueras.y-40,3);
                    frutas.velocityX=2;
                    fueras.remove();
                
                })){}
        }
        if(aguacateGroup.isTouching(pika)){
            puntos=puntos+3
            if(pika.isTouching(aguacateGroup,
                function(fuera,fueras){
                    futas(fueras.x,fueras.y-40,3);
                    futas.velocityX=2;
                    fueras.remove();
                
                })){}
        }
          
    }
    if(pokeGroup.isTouching(pika)){
        pika.destroy();
        gameState="end"
      }
    if(gameState==="end"){
      frutaGroup.setVelocityXEach(0);
      pokeGroup.setVelocityXEach(0);
      aguacateGroup.setVelocityXEach(0);
        fin.visible = true; 
        frutaGroup.setLifetimeEach(-1);
        pokeGroup.setLifetimeEach(-1);
        aguacateGroup.setLifetimeEach(-1);
     
    }
    if(calle.x< 0){
        calle.x=width/2;
    }
   
 

   
    pika.collide(barra);
    pika.collide(barra2);
    if(keyDown("up")){
        pika.y=pika.y-15;
    
    }
    if(keyDown("down")){
        pika.y=pika.y+15;
    
    }
    
    
   

    function pokel(){
        var azar=Math.round(random(50,100));
         if(frameCount %azar === 0){
            var poker=createSprite(1200,300)
            poker.y= Math.round(random(260,450));
            poker.velocityX=-10;
            poker.addImage(pokeImg);
            poker.scale=0.3
            poker.lifetime=500;
            pokeGroup.add(poker);
        }
    }

    function futas(){
        var azar=Math.round(random(200,300));
        if(frameCount %azar === 0){
            var fruru=createSprite(1200,300)
            fruru.y= Math.round(random(300,450));
            fruru.velocityX=-10;
            fruru.addImage(fru);
            fruru.scale=0.2
            fruru.lifetime=500;
            aguacateGroup.add(fruru)
        }
    }    
    function frutas(){
        var azar=Math.round(random(50,100));
        if(frameCount %azar === 0){
            var fraru=createSprite(1200,300)
            fraru.y= Math.round(random(260,450));
            fraru.velocityX=-10;
            fraru.addImage(fra);
            fraru.scale=0.2
            fraru.lifetime=500;
            frutaGroup.add(fraru);
        }
    }    
    function frutal(){
        var azar=Math.round(random(30,100));
        if(frameCount %azar === 0){
            var friru=createSprite(1200,300)
            friru.y= Math.round(random(260,450));
            friru.velocityX=-10;
            friru.addImage(fri);
            friru.scale=0.2
            friru.lifetime=500;
            frutaGroup.add(friru);
        }
    }    
   
      
      




}