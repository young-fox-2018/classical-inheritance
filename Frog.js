const Animal = require('./Animal.js');

class Frog extends Animal {
    constructor(classification, lived, food, poisoned) {
        super(classification, lived, food),
        this._poisoned = poisoned        
    }
}

module.exports = Frog;