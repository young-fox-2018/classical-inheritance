const Animal = require('./animal')
const superPower = require('./superpower')

class Shark extends Animal {
    constructor (classification, foodType, habitat, fins) {
        super(classification, foodType, habitat)
        this._fins = fins
        this.superPower = new superPower()
    }
}

let shark = new Shark ('exotic', 'meat', 'sea', 8)

console.log(shark.superPower.be_invisible());