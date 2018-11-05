const Animal = require('./Animal.js');

class Cat extends Animal {
    constructor(classification, lived, food, adopt) {
        super(classification, lived, food),
        this._can_adopt = adopt
    }
}

module.exports = Cat;