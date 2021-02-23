//Creating Character
class Character {
	//proporties of Character
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
		this.y = 375 + this.h	
		}
	}//end of moveUP
	//lets character move down
	moveDown() {
		this.y += 5
		
		if (this.y > 375) {
		this.y = -this.h
		}
	}
}// end of character class
// info bar at bottom of screen

class InfoBar {
	//proporties of infobar
		constructor(x,y, num){
			this.x = x
			this.y = y
			this.w = 900
			this.h = 220
			this.r = 250
			this.g = 250
			this.b = 250
			this.name = "Object " + num
			this.mass = randNumber(55) + 5
			this.volume = randNumber(35)
			this.density = "???"
		this.active = false
		}//end of constructor
	//info for showing Infobar
	show() {
		//colors info bar
		fill(this.r, this.g, this.b)
		//draws info bar
		rect(this.x, this.y, this.w, this.h)
		//colors text
		fill("black")
		//text size for object number
		textSize(30)
		//object text
		text(this.name, this.x + 10, this.y + 25)
		//text size for other text
		textSize(20)
		//text 
		text("Mass- " + this.mass + "g", this.x + 10, this.y + 45)
		text("Volume- " + this.volume + "L", this.x + 10, this.y + 65)
		
		if(this.active) {
			// Do stuff here
			rect(50, 50, 50 ,50);
		}
		
		text("Density- " + this.density, this.x + 10, this.y + 85)
		//text inputs
		var d1 = this.mass/this.volume
		//createInput("Insert density here", d1, 890,480 )
		
		
	}//end of show
}//end of class

//random number(s)
function randNumber(num) { 
	var randy = Math.floor(Math.random()*num);
	return randy;
}

function densityInput(x, y) {
	var bod = document.getElementById("body");
	var denInput = document.createElement("div");
	denInput.id = "denInput";
	denInput.style = "position: absolute; padding-top: "+y+"px; padding-left: "+x+"px;";
	var txt = document.createElement("p");
	txt.innerHTML = "Input Density for object ";
	denInput.appendChild(txt);
	bod.appendChild(denInput);
	denInput = document.getElementById("denInput");
	var inp = document.createElement("input");
	inp.id = "densityInput";
	denInput.appendChild(inp);
	
}

function getDensity(id = 0) {
	var den = document.getElementById("densityInput");
	/*if (id >= 0 && <= 3) {
		if (isNaN(den.value)) {
			alert("Please input a number for density.");
		} else {
			info[id].density = den.value;
		}
	}*/
	
	//return den.value;
}

densityInput(0, 500);


