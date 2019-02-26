class Car {
  constructor(options) {
    this.title = options.title;
  }

  drive() {
    return "vroom";
  }
}

const toyota = new Car({ title: "Toyota" });
console.log(toyota);
console.log(toyota.drive());
/////

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return "beep";
  }
}
const toyota2 = new Toyota({ title: "Toyota", color: "red" });
console.log(toyota2);
console.log(toyota2.drive());
console.log(toyota2.honk());
