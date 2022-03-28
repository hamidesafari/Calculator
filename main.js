class Calculator {
  constructor(x, y) {
    //properties
    this.x = x;
    this.y = y;
  }

  pi() {
    return Math.PI;
  }
  eulnersZahl() {
    let eulne = Math.E;
    return eulne;
  }

  ratio() {
    let rat = this.y * Math.E ** this.x;
    return rat;
  }
  percentage() {
    let percen = (this.x / 100) * this.y;
    return percen;
  }
  additation() {
    let sum = this.x + this.y;
    return sum;
  }
  subtract() {
    let sub = this.x - this.y;
    return sub;
  }
  multiplay() {
    let multi = this.x * this.y;
    return multi;
  }
  divide() {
    let divi =
      this.x / this.y === 0
        ? console.log("Error")
        : console.log(this.x / this.y);
  }
  mudulation() {
    let mudul =
      this.x % this.y === 0
        ? console.log(this.x % this.y)
        : console.log("Error");
  }
  elevate() {
    let elev = Math.pow(this.x, this.y);
    return elev;
  }
  sqrt() {
    let res = Math.sqrt(this.x);
    return res;
  }
}
let calculate = new Calculator(5, 2);
console.log(calculate.pi());
console.log(calculate.eulnersZahl());
console.log(calculate.ratio());
console.log(calculate.percentage());
console.log(calculate.additation());
console.log(calculate.subtract());
console.log(calculate.multiplay());
calculate.divide();
calculate.mudulation();
console.log(calculate.elevate());
console.log(calculate.sqrt());
