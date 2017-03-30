// set up inheritance when creating objects
// classes still make use of prototypal inheritance
// constructor object
// es5
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return "vroom";
}

const car = new Car({ title: 'focus' });
car.drive();
car;

// basically boilerplate
function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

// resulting outputs we can use
const toyota = new Toyota({ color: 'red', title: 'daily driver' });
toyota;
toyota.drive();
toyota.honk();

// es6
// classes
class Car {
  // handle initialization with a constructor
  constructor({ title }) {
    this.title = title;
  }  // <--- don't need commas
  // use enhanced object literal syntax to call methods
  drive() {
    return 'vroom';
  }
}
// const car = new Car({ title: 'Toyota' });
// car.drive;

// inherit Car attributes with new class creation
// including all previous constructors, methods and properties
class Toyota extends Car {
  constructor(options) {
// super() method calls Car.constructor - can't use desctructuring above with this
    super(options);
    this.color = options.color;
  }
  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({ color: 'red', title: 'daily driver'});
toyota.honk();
toyota;

// game developing
// create parent monster class
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

// child monster class
class Snake {

}
