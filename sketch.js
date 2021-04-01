var plates = [];
var items = [];
var door;
var top_plate;
var xOffset;
var yOffset;
var charSetup;
var taskBar;
var info = [];
var doors = [];
var distNumb = 50
var beaker;
var beakerDisplay;
//var answers = [];



//checked curly brackets, not missing any of those
//checked parenthese, not missing any of those either
//no misspellings
//it says that lvlGen(3) doesn't exist, but nothing else.

function setup() {
     createCanvas(900, 500);
   // answers.push(new Answers( 150, 310));
  /*items.push(new ToiletPaper(50,50));
  items.push(new Bread(150, 50));
    items.push(new Masks( 250, 50));
    items.push(new Sanitizer( 0, 50));
    items.push(new Camera( 500, 50));
    items.push(new Coin( 225, 150));
    items.push(new Puzzle( 225, 250));
    items.push(new TV( 0, 250));
    items.push(new Dog( 100, 250));
    items.push(new Snacks( 150, 300));
 
    var levelReset = [];
    levelReset = lvlGen(3); // Making circles
    items = levelReset[0];
    plates = levelReset[1];
      for (var i = 0; i < 4; i++) {
	  items.push(new Plate(225*i + 50, 30));
  }
	
  for (var i = 0; i < 4; i++) {
	  items.push(new Plate(225*i + 50, 375));
  }*/
    
  var newLevel = lvlGen(3);
    items = newLevel[0];
    plates = newLevel[1];
	
	for (var i = 870; i < 871; i++) {
	  doors.push(new Door(870,(500/2)-50, 30, 100));//
  }
	
	for (var i = 870; i < 871; i++) {
	  doors.push(new Door(0, (500/2)-50, 30, 100));//
  }
  
  door = new Door(870, (500/2)-50, 30, 100)
  door = new Door(0, (500/2)-50, 30, 100)
  /*top_plate = new Plate (25, 50);*/
    
    charSetup = new Character(375,175)
	
	for (var i = 0; i < 4; i++) {
		info.push(new InfoBar(225*i, 375, i + 1));
	}
 setDensities();

	  beaker = new Beaker(50, 50)
    beakerDisplay = new BeakerWindow();
}

function draw() {
  background(220);
    beaker.show()
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
    for (var i in doors) {
        doors[i].show();

    }
	/*top_plate.show();*/
	

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
				//console.log(objDist(items[i], items[j]));
			}
		}
	}
}
    charSetup.show()
	for (var x in info) {
		info[x].show();
	}
	
	if (keyIsDown(RIGHT_ARROW)) {
    charSetup.moveRight()
	}
	if (keyIsDown(LEFT_ARROW)) {
	charSetup.moveLeft()  
		//densityInput(1);
	}
	if (keyIsDown(UP_ARROW)) {
	charSetup.moveUp()  
	//console.log(getDensity());
		//densityInput(2);
	}
	if (keyIsDown(DOWN_ARROW)) {
	charSetup.moveDown()  
 	}
	/*
    if (keyIsDown(32)) { //SPACEBAR
	//setDensities() 
		if (charSetup.hold == -1) {
			for(var i = 0; i < items.length; i++) {
				if (objDist(charSetup, items[i]) < distNumb) {
					charSetup.hold = i
				}
			}	
		} else {
			charSetup.hold = -1
			/*for(var i = 0; i < items.length; i++) {
				if (objDist(charSetup, plates[i]) < distNumb) {
					charSetup.hold = -1 
				}
			}
		}
	}*/
		/*for(var i = 0; i < items.length; i++) {
			console.log(putOnPlate(items[i],plates[i]));
			if (objDist(charSetup, items[i]) < distNumb) {
				//putOnPlate(items[i],plates[i])
			}
		}

		
 	}*/
	if (charSetup.hold != -1) {
			charSetup.carry(items[charSetup.hold]);
		}
		
	
	/*
	if (keyIsDown(ENTER)) {
	charSetup.hold = 0
	} 
	*/
	
	displayDensities(densities)
    
    
    //BeakerDisplay.show()
    

    if (beakerDisplay.obj != null) {
        beakerDisplay.show();
        }
    }

function keyReleased() {
  if (keyCode === 32) {
    if (charSetup.hold == -1) {
			for(var i = 0; i < items.length; i++) {
				if (objDist(charSetup, items[i]) < distNumb) {
					charSetup.hold = i
				}
			}	
		} else {
			charSetup.hold = -1
			for(var i = 0; i < items.length; i++) {
				if (objDist(charSetup, plates[i]) < distNumb) {
					//charSetup.hold = -1 
					putOnPlate(items[i],plates[i])
				}
			}
		}
      /*for (var k in items) {
        putInBeaker(items[k], beaker)
          
    }*/
      thanos()
  }
  return false; // prevent any default behavior
	
}

function thanos() {
	var cd = Infinity;
	var closestItemId = -1;
	for (var i = plates.length/2; i < plates.length; i++) {
		cd = Infinity;
		closestItemId = -1
		for (var j = 0; j < items.length; j++) {
			var howClose = objDist(plates[i],items[j])
			if (howClose < distNumb && howClose < cd) {
				cd = howClose
				closestItemId = j;
			}
		// Put closest item on plate
		//console.log(items[j].x)
		//items[j].x = plates[i].x 
		}
		if (closestItemId != -1) {
			putOnPlate(items[closestItemId], plates[i]);	
		}
	}
}



