const Animal = require('./animal')
const superPower = require('./superpower')

class Bear extends Animal {
    constructor (classification, foodType, habitat, strength) {
        super(classification, foodType, habitat)
        this._strength = strength
        this.superPower = new superPower()
    }
}

let bear = new Bear ('wild', 'meat', 'mountain', 'very strong')
console.log(bear.superPower.launch_rocket());

