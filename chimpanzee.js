let Animals = require('./animals.js')

class Chimpanzee extends Animals {
    constructor(num_legs,is_warm_blooded,breed,age){
        super(num_legs,is_warm_blooded,breed)
        this._age = age
    }
    
    do_something() {
        return console.log(`this Animals has ${this.num_legs} legs and a ${this.is_warm_blooded} a warm blood, breed with ${this.breed}, age is ${this._age} and have power ${this.power.be_invisible()}`)    }

}

module.exports = Chimpanzee