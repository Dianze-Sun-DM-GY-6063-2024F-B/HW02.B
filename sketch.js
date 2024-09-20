let h=100;
let w=200;
let x1,x2,x3,x4,x5,x6,x7,x8;
let y1,y2,y3,y4,y5,y6,y7,y8;
let P;
let P2;
let R;
let S1;
let S2;
let StrokeW=12;
let trans=180;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  strokeWeight(StrokeW);
  textSize(70);
  textFont('Courier New');
  textAlign(CENTER);
  text('2024/9/20', windowWidth/2, windowHeight/5*4);
  text('HW02.B-Denzel', windowWidth/2, windowHeight/5*4+100);
  noFill();
translate(windowWidth/2-1600, windowHeight/2-1100, )
push();
noStroke();
fill(235,235,235);
rect(650,100,1800,1800);
pop();
x1= 1400;y1=700;

  let n=0;
  while(n<30){
 push();
 let R=random(-20.20);
 
   P=int(random(0, 8));
  P2=int (random(0, 3));
  S1=random(0,8);
  S2=random(0,15);
    stroke(251, 255, 0,trans);
    
  translate(x1+P*h+S1,y1+P2*w+S1);
  rotate(R);
    rect(0,0,h+S2,w+S2,10);
    pop();
    n=n+1;
  }

  x2= 900;y2=400;

  let n2=0;
  while(n2<6){
    push();
    let R=random(-20.20);
  P=int(random(0, 5));
  P2=int (random(0, 3));
  S1=random(0,8);
  S2=random(0,12);
    stroke(251, 255, 0,trans);
    translate(x2+P*h+S1,y2+P2*w+S1,);
    rotate(R);
    rect(0,0,h+S2,w+S2,10);
    pop();
    n2=n2+1;
  }
  //yellow rect
  x3= 1000;y3=400;

  let n3=0;
  while(n3<20){
      push();
      let R=random(-40,40)
  P=int(random(0, 5));
  P2=int (random(0, 3));
  S1=random(0,8);
  S2=random(0,12);
    stroke(1, 14, 99,trans);
    translate(x3+P*h+S1,y3+P2*w+S1)
    rotate(R);
    rect(0,0,h+S2,w+S2,10);
    pop();
    n3=n3+1;
  }
  x4= 1100;y4=1300;
  let n4=0;
  while(n4<7){
      push();
      let R=random(-40,40)
  P=int(random(0, 8));
  P2=int (random(0, 2));
  S1=random(0,8);
  S2=random(0,12);
    stroke(1, 14, 99,trans);
    translate(x4+P*h+S1,y4+P2*w+S1)
    rotate(R);
    rect(0,0,h+S2,w+S2,10);
    pop();
    n4=n4+1;
  }
  
 //dark blue rect
 x5= 1000;y5=400;

 let n5=0;
 while(n5<12){
     push();
     let R=random(-20, 30)
 P=int(random(0, 2));
 P2=int (random(0, 5));
 S1=random(0,8);
 S2=random(0,12);
   stroke(176, 218, 255,trans);
   translate(x5+P*h+S1,y5+P2*w+S1);
   rotate(R);
   rect(0,0,h+S2,w+S2,10);
   n5=n5+1;
   pop();
 }
 x6= 1600;y6=1400;

 let n6=0;
 while(n6<6){
     push();
     let R=random(-20, 30)
 P=int(random(0, 5));
 P2=int (random(0, 2));
 S1=random(0,8);
 S2=random(0,12);
   stroke(176, 218, 255,trans);
   translate(x6+P*h+S1,y6+P2*w+S1);
   rotate(R);
   rect(0,0,h+S2,w+S2,10);
   n6=n6+1;
   pop();
 }
 //shallow blue rect
 x7= 1300;y7=350;

 let n7=0;
 while(n7<40){
     push();
     let R=random(-20, 30)
 P=int(random(0, 9));
 P2=int (random(0, 7));
 S1=random(0,8);
 S2=random(0,12);
 stroke(209, 91, 13,trans);
   translate(x7+P*h+S1,y7+P2*w+S1);
   rotate(R);
   rect(0,0,h+S2,w+S2,10);
   n7=n7+1;
   pop();
 }
 
 //orange rect
}

function draw() {
  
  
}
