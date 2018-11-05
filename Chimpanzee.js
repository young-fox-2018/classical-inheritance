const Animal = require('./Animal.js');

class Chimpanzee extends Animal{
    constructor(classification, lived, food, hair) {
        super(classification, lived, food),
        this._hairy = hair
    }
}

module.exports = Chimpanzee;