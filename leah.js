//Creating Character
class Character {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.w = 75
        this.h = 75
        this.r = 130
        this.g = 203
        this.b = 245
    }
    
    show() {
     // Character color
        fill(this.r, this.g, this.b)
     // Character box
        rect(this.x, this.y, this.w, this.h)
    }//end of show
	//lets character move right
	moveRight() {
		this.x += 5
		
		if (this.x > 900) {
		this.x = -this.w	
		}
	}//end of moveRight
	//lets character move left
	moveLeft() {
		this.x -= 5
		
		if (this.x < -this.w) {
		this.x = 900 + this.w	
		}
	}//end of moveLeft
	//lets character move up
	moveUp() {
		this.y -= 5
		
		if (this.y < -this.h) {
		this.y = 500 + this.h	
		}
	}//end of moveUP
	//lets character move down
	moveDown() {
		this.y += 5
		
		if (this.y > 500) {
		this.y = -this.h
		}
	}
}// end of character class

// Canvas = 900 by 500