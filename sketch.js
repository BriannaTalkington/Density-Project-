var items = [];

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
}

function draw() {
  background(220);
    for (var x in items) {
        items[x].show();
        
    }
    }