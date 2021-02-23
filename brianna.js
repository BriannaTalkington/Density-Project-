// Function to put an object on a plate.
function putOnPlate(item, plate){
    item.x = plate.x-(item.w/2)
    item.y= plate.y-(item.h/2)
}

function lvlGen(n) {
    var newPlateArr = [];
    var newItemArr = [];
    var plateStep= (width/(n+2))
    console.log(plateStep)
    var buffer=50
    
      // Creating the top plates
    for(var i=0;i<=n;i++){
    newPlateArr.push(new Plate(plateStep*(i+1),buffer))
    }
    for(var i=0;i<=n;i++){
    newPlateArr.push(new Plate(plateStep*(i+1),390-buffer))}
    
 
    /*  newPlateArr.push(new Plate(50, 200));
    newPlateArr.push(new Plate(200, 50));
    newPlateArr.push(new Plate(350, 200));

    for (var n in newPlateArr) {
        newItemArr.push(new Door());
        putOnPlate(newItemArr[n], newPlateArr[n]);
    }*/
    
    return [newItemArr, newPlateArr];
}

