const Animal = require('./animal')
const SuperPower = require('./superpower')

class Chimpanzee extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        this.superpower = new SuperPower().super_strength()
    }
}

module.exports = Chimpanzee