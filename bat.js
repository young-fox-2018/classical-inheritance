const Animal = require('./animal')
const SuperPower = require('./superpower')

class Bat extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        this.superpower = new SuperPower().ultra_sonic_sound()
    }
}

module.exports = Bat