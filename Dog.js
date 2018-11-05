const Animal = require('./Animal.js')

class Dog extends Animal {
    constructor(endangered, cute, area, housePets){
        super(endangered, cute, area)
        this._housePets = housePets
    }
}
module.exports = Dog