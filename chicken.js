const Animal = require('./animal')
const SuperPower = require('./superpower')

class Chicken extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        this.superpower = new SuperPower().time_manipulation()
    }
}

module.exports = Chicken