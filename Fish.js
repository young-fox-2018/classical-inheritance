const Animal = require('./Animal.js')


class Fish extends Animal {
    constructor(endangered, cute, area){
        super(endangered, cute, area)
    }
}

module.exports = Fish