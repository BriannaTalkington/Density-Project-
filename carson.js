console.log("Hello");

//Making the task objects
class ToiletPaper {
 constructor( x,y) {
     
   this.x = x
   this.y = y
   this.w = 30
   this.h = 30
   this.r = 200
   this.g = 251
   this.b = 252
         
 }//end of constructor
    show(){
        noStroke();
        fill( this.r, this.g, this.b)
     ellipse( this.x, this.y, this.w, this.h); 
        
    }//end of show function
}//end of toilet paper class


//Making the hand snaitizer
class Sanitizer {
 constructor( x,y) {
     
   this.x = x
   this.y = y
   this.w = 20
   this.h = 25
   this.r = 200
   this.g = 251
   this.b = 252
         
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
 constructor( x,y) {
     
   this.x = x
   this.y = y
   this.w = 50
   this.h = 30
   this.r = 142
   this.g = 202
   this.b = 237
         
 }//end of constructor
    show(){
        stroke( 255, 255, 255);
        fill( this.r, this.g, this.b)
     rect( this.x, this.y, this.w, this.h); 
        
    }//end of show function
}//end of masks class


//Making the bread (sourdough starters)
class Bread {
 constructor( x,y) {
     
   this.x = x
   this.y = y
   this.w = 30
   this.h = 30
   this.r = 207
   this.g = 174
   this.b = 97
         
 }//end of constructor
    show(){
        noStroke();
        fill( this.r, this.g, this.b)
     ellipse( this.x, this.y, this.w, this.h); 
        
    }//end of show function
}//end of bread class


//Making the Camera
class Camera {
 constructor( x,y) {
     
   this.x = x
   this.y = y
   this.w = 30
   this.h = 30
   this.r = 0
   this.g = 0
   this.b = 0
         
 }//end of constructor
    show(){
        noStroke();
        fill(this.r+63, this.g+63, this.b+63);
        rect(this.x-28, this.y-20, this.w+25,                   this.h+10);
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
 constructor( x,y) {
     
   this.x = x
   this.y = y
   this.w = 20
   this.h = 20
   this.r = 207
   this.g = 203
   this.b = 194
         
 }//end of constructor
    show(){
        stroke( this.r-41, this.g-39, this.b-37)
     fill(this.r, this.g, this.b);
        ellipse( this.x, this.y, this.w, this.h);
    }//end of show function
}//end of Coin class


//Making the puzzle piece
class Puzzle {
 constructor( x,y) {
     
   this.x = x
   this.y = y
   this.w = 30
   this.h = 30
   this.r = 149
   this.g = 52
   this.b = 235
         
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
 constructor( x,y) {
     
   this.x = x
   this.y = y
   this.w = 50
   this.h = 30
   this.r = 43
   this.g = 42
   this.b = 43
         
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
 constructor( x,y) {
     
   this.x = x
   this.y = y
   this.w = 50
   this.h = 30
   this.r = 77
   this.g = 37
   this.b = 5
         
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
 constructor( x,y) {
     
   this.x = x
   this.y = y
   this.w = 30
   this.h = 40
   this.r = 252
   this.g = 248
   this.b = 3
         
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








