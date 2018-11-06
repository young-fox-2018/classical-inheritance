const Animal = require('./animal.js')
const superPower = require('./superpower')

class Dog extends Animal {
    constructor (classification, foodType, habitat, tail) {
        super(classification, foodType, habitat)
        this.tail = tail
        this.superPower = new superPower()
    }
}

let dog = new Dog ('pet', 'meat', 'neighborhood', 1)

console.log(dog.superPower.use_laser_vision());