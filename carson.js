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
         
 }
    show(){
        fill( this.r, this.g, this.b)
     ellipse( this.x, this.y, this.w, this.h); 
        
    }
}

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
         
 }
    show(){
        fill( this.r, this.g, this.b)
     rect( this.x, this.y, this.w, this.h);
        fill( this.r+55, this.g+4, this.b+3);
        rect(this.x+5, this.y-10, this.w-10, this.h-15);
        
    }
}

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
         
 }
    show(){
        fill( this.r, this.g, this.b)
     rect( this.x, this.y, this.w, this.h); 
        
    }
}

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
         
 }
    show(){
        fill( this.r, this.g, this.b)
     ellipse( this.x, this.y, this.w, this.h); 
        
    }
}








