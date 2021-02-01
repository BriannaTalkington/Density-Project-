
class Plate {
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.diameter = 100;
		this.r = 91;
		this.g = 199;
		this.b = 225;
	}		
	show(){
		fill(this.r, this.g, this.b);
		circle(this.x, this.y, this.diameter);
	}
}


class Door {
	constructor(x, y, w, h){
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