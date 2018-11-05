const Animal = require('./animal')
const SuperPower = require('./superpower')

class Frog extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        this.superpower = new SuperPower().invisible()
    }
}

module.exports = Frog