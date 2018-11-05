const SuperPower = require('./SuperPower')

class Animal {
    constructor(classification, lived, food) {
        this._classification = classification,
        this._lived_at = lived,
        this._food = food || 'grass'
        this._power = new SuperPower()
    }

    get eat(){
        return `The animal eats ${this._food}`;
    }
    
    get superpower() {
        return this._power;
    }
}

module.exports = Animal;