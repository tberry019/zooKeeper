export class Alligator {
  constructor(name, color, gender) {
    this.name = name;
    this.color = color;
    this.gender = gender;

  }
  eat(food) {
    console.log(`chomp all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

