// Function to put an object on a plate.
function putOnPlate(item, plate){
    item.x = plate.x-(item.w/2)
    item.y= plate.y-(item.h/2)
}

function lvlGen(n) {
    var newPlateArr = [];
    var newItemArr = [];
    var plateStep= (width/(n+2))
    //console.log(plateStep)
    var buffer=50
    
      // Creating the top plates
    for(var i=0;i<=n;i++){
    newPlateArr.push(new Plate(plateStep*(i+1),buffer))
    }
    for(var i=0;i<=n;i++){
    newPlateArr.push(new Plate(plateStep*(i+1),300-buffer))}
    
    for (var i = 0; i <= n; i++) {
        var randItem = Math.floor(Math.random()*5);
        if (randItem == 0) {
            newItemArr.push(new ToiletPaper(0,0))
        } else if (randItem == 1) {
            newItemArr.push(new Sanitizer(0,0))
        } else if (randItem == 2) {
            newItemArr.push(new Bread(0,0))
        } else if (randItem == 3) {
            newItemArr.push(new Masks(0,0))
        } else if (randItem == 4) {
            newItemArr.push(new Camera(0,0))
        } else if (randItem == 5) {
            newItemArr.push(new Coin(0,0))
        } else if (randItem == 6) {
            newItemArr.push(new Puzzle(0,0))
        } else if (randItem == 7) {
            newItemArr.push(new TV(0,0))
        } else if (randItem == 8) {
            newItemArr.push(new Dog(0,0))
}
        putOnPlate(newItemArr[i], newPlateArr[i]);
            
    }
    
 
    /*  newPlateArr.push(new Plate(50, 200));
    newPlateArr.push(new Plate(200, 50));
    newPlateArr.push(new Plate(350, 200));

    for (var n in newPlateArr) {
        newItemArr.push(new Door());
        putOnPlate(newItemArr[n], newPlateArr[n]);
    }*/
    
    return [newItemArr, newPlateArr];
}

