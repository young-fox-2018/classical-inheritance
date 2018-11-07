const SuperPower = require('./superPower')

class Animals {
    constructor(num_legs,is_warm_blooded, breed, age) {
        this._numlegs = num_legs || 'no leg'
        this.iswarmblooded = is_warm_blooded || false
        this.power = new SuperPower()
        this.breed = breed
        this._age = age
    }
    get num_legs() {
        return this._numlegs
    }
    set num_legs(num) {
        this._numlegs -= num
    }

    get is_warm_blooded() {
        return this.iswarmblooded
    }
    set is_warm_blooded(statemnt) {
        this.iswarmblooded = statemnt
    }
    
}
module.exports = Animals