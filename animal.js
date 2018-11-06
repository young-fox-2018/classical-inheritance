const SuperPower = require('./superpower')

class Animal {
    constructor (classification, foodType, habitat) {
        this._classification = classification
        this._foodType = foodType
        this._habitat = habitat
        this._superpower = new SuperPower();
    }

    get classification () {
        return this._classification
    }

    get foodType () {
        return this._foodType
    }

    get habitat () {
        return this._habitat
    }
    get superpower() {
        return this._superpower
    }
}

module.exports = Animal