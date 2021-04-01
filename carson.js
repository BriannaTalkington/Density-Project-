console.log("Hello");

//Making the task objects
class ToiletPaper {
 constructor( x,y, id) {
     
   this.x = x
   this.y = y
   this.w = 30
   this.h = 30
   this.r = 200
   this.g = 251
   this.b = 252
   this.mass = randNumber(20,40)+1
   this.volume = randNumber(10,20)+1
   this.id = id
   this.density = twoDec(this.mass/this.volume)
         
 }//end of constructor
    show(){
        noStroke();
        fill( this.r, this.g, this.b)
     ellipse( this.x, this.y, this.w, this.h); 
        
    }//end of show function
}//end of toilet paper class


//Making the hand snaitizer
class Sanitizer {
 constructor( x,y, id) {
     
   this.x = x
   this.y = y
   this.w = 20
   this.h = 25
   this.r = 200
   this.g = 251
   this.b = 252
   this.mass = randNumber(20,40)+1
   this.volume = randNumber(10,20)+1
   this.id = id
   this.density = twoDec(this.mass/this.volume)
         
 }//end of constructor
    show(){
        noStroke();
        fill( this.r, this.g, this.b)
     rect( this.x, this.y, this.w, this.h);
        fill( this.r+55, this.g+4, this.b+3);
        rect(this.x+5, this.y-10, this.w-10, this.h-15);
        
    }//end of show function
}//end of sanitizer class


//Making the masks
class Masks {
 constructor( x, y, id) {
     
   this.x = x
   this.y = y
   this.w = 50
   this.h = 30
   this.r = 142
   this.g = 202
   this.b = 237
   this.mass = randNumber(20,40)+1
   this.volume = randNumber(10,20)+1
   this.id = id
   this.density = twoDec(this.mass/this.volume)
     
 }//end of constructor
    show(){
        stroke( 255, 255, 255);
        fill( this.r, this.g, this.b)
     rect( this.x, this.y, this.w, this.h); 
        
    }//end of show function
}//end of masks class


//Making the bread (sourdough starters)
class Bread {
 constructor( x,y, id) {
     
   this.x = x
   this.y = y
   this.w = 30
   this.h = 30
   this.r = 207
   this.g = 174
   this.b = 97
   this.mass = randNumber(20,40)+1
   this.volume = randNumber(10,20)+1
   this.id = id
   this.density = twoDec(this.mass/this.volume)
         
 }//end of constructor
    show(){
        noStroke();
        fill( this.r, this.g, this.b)
     ellipse( this.x, this.y, this.w, this.h); 
        
    }//end of show function
}//end of bread class


//Making the Camera
class Camera {
 constructor( x,y, id) {
     
   this.x = x
   this.y = y
   this.w = 30
   this.h = 30
   this.r = 0
   this.g = 0
   this.b = 0
   this.mass = randNumber(20,40)+1
   this.volume = randNumber(10,20)+1
   this.id = id
   this.density = twoDec(this.mass/this.volume)
     
 }//end of constructor
    show(){
        noStroke();
        fill(this.r+63, this.g+63, this.b+63);
        rect(this.x-28, this.y-20, this.w+25, this.h+10);
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.w, this.h)
        fill(this.r+63, this.g+63, this.b+63);
        ellipse(this.x, this.y, this.w-10, this.h-10);
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.w/3, this.h/3);
        rect( this.x+10, this.y-25, this.w-20, this.h-25);
        
    }//end of show function
}//end of Camera class


//Making the Coins
class Coin {
 constructor( x,y, id) {
     
   this.x = x
   this.y = y
   this.w = 20
   this.h = 20
   this.r = 207
   this.g = 203
   this.b = 194
   this.mass = randNumber(20,40)+1
   this.volume = randNumber(10,20)+1
   this.id = id
   this.density = twoDec(this.mass/this.volume)
         
 }//end of constructor
    show(){
        stroke( this.r-41, this.g-39, this.b-37)
     fill(this.r, this.g, this.b);
        ellipse( this.x, this.y, this.w, this.h);
    }//end of show function
}//end of Coin class


//Making the puzzle piece
class Puzzle {
 constructor( x,y, id) {
     
   this.x = x
   this.y = y
   this.w = 30
   this.h = 30
   this.r = 149
   this.g = 52
   this.b = 235
   this.mass = randNumber(20,40)+1
   this.volume = randNumber(10,20)+1
   this.id = id
   this.density = twoDec(this.mass/this.volume)
         
 }//end of constructor
    show(){
        stroke(52);
        fill( this.r, this.g, this.b);
        rect( this.x, this.y, this.w, this.h/5);
        fill( this.r, this.g, this.b+25);
        rect(this.x, this.y+this.h/5, this.w, this.h/5);
         fill( this.r, this.g, this.b+45);    
        rect(this.x, this.y+2*this.h/5, this.w, this.h/5);
           fill( this.r+25, this.g, this.b+45);      
        rect(this.x, this.y+3*this.h/5, this.w, this.h/5);
          fill( this.r+45, this.g, this.b+45);    
        rect(this.x, this.y+4*this.h/5, this.w, this.h/5);  
        fill(52);
        line(this.x+this.w/5, this.y, this.x+this.w/5, this.y+this.h);
        line(this.x+2*this.w/5, this.y, this.x+2*this.w/5, this.y+this.h);
        line(this.x+3*this.w/5, this.y, this.x+3*this.w/5, this.y+this.h);
        line(this.x+4*this.w/5, this.y, this.x+4*this.w/5, this.y+this.h);
    }//end of show function
}//end of Puzzle class


//Making the TV 
class TV {
 constructor( x,y, id) {
     
   this.x = x
   this.y = y
   this.w = 50
   this.h = 30
   this.r = 43
   this.g = 42
   this.b = 43
   this.mass = randNumber(20,40)+1
   this.volume = randNumber(10,20)+1
   this.id = id
   this.density = twoDec(this.mass/this.volume)
         
 }//end of constructor
    show(){
        fill( this.r, this.g, this.b);
  rect(this.x, this.y, this.w, this.h);
        fill( this.r-43, this.g-42, this.b-43);
        rect(this.x+3, this.y+3, this.w-10, this.h-6);
      
    }//end of show function
}//end of TV class


//Making the Dog
class Dog{
 constructor( x,y, id) {
     
   this.x = x
   this.y = y
   this.w = 50
   this.h = 30
   this.r = 77
   this.g = 37
   this.b = 5
   this.mass = randNumber(20,40)+1
   this.volume = randNumber(10,20)+1
   this.id = id
   this.density = twoDec(this.mass/this.volume)
         
 }//end of constructor
    show(){
        noStroke();
     fill( this.r, this.g, this.b);
        rect( this.x, this.y, this.w, this.h);
        ellipse( this.x+50, this.y, this.w-20, this.h);
        fill( this.r-77, this.g-37, this.b-5);
        ellipse( this.x+65, this.y+5, this.w/4, this.h/3);
        fill(this.r, this.g, this.b);
        rect( this.x+55, this.y, this.w/4, this.h/3);
      fill( this.r-77, this.g-37, this.b-5);
        ellipse( this.x+55, this.y-5, this.w/6, this.h/5);
    }//end of show function
}//end of Dog class


//Making the Snacks
class Snacks{
 constructor( x,y, id) {
     
   this.x = x
   this.y = y
   this.w = 30
   this.h = 40
   this.r = 252
   this.g = 248
   this.b = 3
   this.mass = randNumber(20,40)+1
   this.volume = randNumber(10,20)+1
   this.id = id
   this.density = twoDec(this.mass/this.volume)
         
 }//end of constructor
    show(){
        fill(this.r, this.g, this.b);
        rect( this.x, this.y, this.w, this.h);
        fill(this.r-226, this.g-232, this.b-2);
        text("Chips", this.x+2, this.y+10, this.w, this.h);
        textSize(5);
        ellipse( this.x+30, this.y+30, this.w-10, this.h-20);
         fill(this.r, this.g, this.b);
        text("Cookie", this.x+20, this.y+25, this.w, this.h);
        textSize(10);
        
        
    }//end of show function
}//end of Snacks class

/*
class Answers{
    
    constructor( x, y){
      this.x = x
      this.y = y
      this.w = 30
      this.h = 20
      this.writing = d1
      
    }
      show(){
      text( this.writing, this.x, this.y, this.w, this.h)
      }
}*/



/*
for the sketch file:
var answers = [];

answers.push(new Answers( 150, 310));
*/
var densities = [];


function mixUp(arr, steps) {
    var mixedArr = arr;
    var temp = 0;
    var a = 0;
    var b = 0;
    for (var i = 0; i < steps; i++) {
        a = Math.floor(Math.random()*mixedArr.length);
        b = Math.floor(Math.random()*mixedArr.length);
        temp = mixedArr[a];
        mixedArr[a] = mixedArr[b];
        mixedArr[b] = temp;
    }
    return mixedArr;
}

function setDensities() {
    densities = [];
    for (var i = 0; i < items.length; i++) {
        densities.push(items[i].density)
        densities = mixUp(densities, 30);
    }
    console.log(densities);
}



function displayDensities (arr){
    for ( var i = 0; i < arr.length; i++){
        text(arr[i], plates[i+4].x-15, plates[i+4].y+10);
        
        
    }
}

 class Beaker{
 constructor( x, y) {
     
   this.x = x
   this.y = y
   this.w = 60
   this.h = 30
   this.r = 170
   this.g = 250
   this.b = 242
   this.amount = randNumber(50)+20
 }
   
     show(obj) {
         //var waterLine = obj.volume + this.amount
         //fill(this.r, this.g, this.b)
         stroke(51);
         fill( this.r+30, this.g+5, this.b+13)
        rect( this.x, this.y, this.w, this.h+20)
          ellipse( this.x+30, this.y, this.w, this.h)
         ellipse(this.x+30, this.y+50, this.w, this.h)
         
         
         
     }
     }

class BeakerWindow{
 constructor() {
     
   this.x = 200
   this.y = 10
   this.wl = 40    
   this.obj = null
 }
   
     show() {
        if (this.obj != null) {
            fill(255)
            rect(50, 50, 500, 300);
        }
    }
}
/*
function PutInMiddle(obj){
    obj.x = beaker.x+30
    obj.y = beaker.y+50
}




function SnapOnBeaker(){
    if(items[1].x >= beaker.x && items.x <= beaker.x+50 && items[1].y >= beaker.y && items[1].y <= beaker.y+90){
       PutInMiddle(items[1]); 
    }
    
}

*/
/*
function putInBeaker(item, thing){
       if(objDist(item, thing) <=40 && charSetup.hold != -1) {
       item.x = thing.x+10
       item.y= thing.y+20
       beakerDisplay.obj = item 
       
       }
}    
*/                     
    
                                          







