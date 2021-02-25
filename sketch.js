var plates = [];
var items = [];
var door;
var top_plate;
var xOffset;
var yOffset;

//checked curly brackets, not missing any of those
//checked parenthese, not missing any of those either
//no misspellings
//it says that lvlGen(3) doesn't exist, but nothing else.

function setup() {
  items.push(new ToiletPaper(50,50));
  items.push(new Bread(150, 50));
    items.push(new Masks( 250, 50));
    items.push(new Sanitizer( 0, 50));
    items.push(new Camera( 500, 50));
    items.push(new Coin( 225, 150));
    items.push(new Puzzle( 225, 250));
    items.push(new TV( 0, 250));
    items.push(new Dog( 100, 250));
    items.push(new Snacks( 150, 300));
  createCanvas(900, 500);
    var levelReset = [];
    levelReset = lvlGen(3);
    items = levelReset[0];
    plates = levelReset[1];
      for (var i = 0; i < 4; i++) {
	  items.push(new Plate(225*i + 50, 30));
  }
	
  for (var i = 0; i < 4; i++) {
	  items.push(new Plate(225*i + 50, 375));
  }
	
	for (var i = 870; i < 871; i++) {
	  items.push(new Door(870,(500/2)-50, 30, 100));
  }
	
	for (var i = 870; i < 871; i++) {
	  items.push(new Door(0, (500/2)-50, 30, 100));
  }
  
  door = new Door(870, (500/2)-50, 30, 100)
  door = new Door(0, (500/2)-50, 30, 100)
  top_plate = new Plate (25, 50);

}

function draw() {
  background(220);
    for (var x in items) {
        items[x].show();
        
    }
     for (var i in plates) {
        plates[i].show();
    }
    for (var j in items) {
        items[j].show();

    }

    for (var i = 0; i < items.length; i++) {
		items[i].show();
	}
	top_plate.show();
	

	if (mouseIsPressed && itemSelected) {
		// checking if mouse is pressed on a sample
		top_plate.x = mouseX - xOffset;
		top_plate.y = mouseY - yOffset;
  	} else {
		itemSelected = false;
		//itemNumber = Infinity;
		xOffset = 0;
		yOffset = 0;
 	 }	
 
function keyPressed() {
    for (var i in items) {
		for (var j in items) {
			if (i != j) {
				console.log(objDist(items[i], items[j]));
			}
		}
	}
}

    }