const Animal = require('./animal')
const SuperPower = require('./superpower')

class Fox extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        this.superpower = new SuperPower().use_laser_vision()
    }
}

module.exports = Fox