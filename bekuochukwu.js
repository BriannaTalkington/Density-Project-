//plate class and constructor
class Plate {
	constructor(x, y){
		this.name = "Plate";
		this.x = x;
		this.y = y;
		this.w = 100;
		this.h = 100;
		this.r = 91;
		this.g = 199;
		this.b = 225;
	}		
	show(){
		fill(this.r, this.g, this.b);
		//rect(this.x, this.y, this.w, this.h, this.w/2);
        circle(this.x, this.y, this.w);
	}
}

//door class and constructor
class Door {
	constructor(x, y, w, h){
		this.name = "Door";
		this.x = x;
		this.y = y;
		this.r = 91;
		this.g = 199;
		this.b = 225;
		this.w = w;
		this.h = h;
	}		
	show(){
		fill(this.r, this.g, this.b);
		rect(this.x, this.y, this.w, this.h);
	}
}

// Returns the distance between two points
function objDist(obj1, obj2){	
	
	var x1 = obj1.x+(obj1.w / 2);
	var y1 = obj1.y+(obj1.h / 2);
	
	var x2 = obj2.x+(obj2.w / 2);
	var y2 = obj2.y+(obj2.h / 2);
	
//run of ¨slope¨
		var a = x2 - x1;
//rise of ¨slope¨
		var b = y2 - y1;
//distace form
		var c = Math.sqrt( (a*a) + (b*b) );

	return c;
}

/*
Move the character using the arrows 
Press enter to hold an item 
Move the character and item at the same time 
Enter to drop
Do that for all the items 
levelCheck makes sure everything is on the right pedestal.*/


var objDen = [];

//check if answer is right
function levelCheck(){
	var complete = true;
	for (var i = 0; i < densities.length; i++){
		if (densities + [i] != objDen[i]) {
			complete = false;
		}
	}
	
	return complete;
}