"use strict"

const Animal = require('./Animal')
const SuperPower = require('./SuperPower')

class Bat extends Animal {
    constructor(legs, warmBlooded) {
        super(legs, warmBlooded)
        this._superpower = new SuperPower('bat')
    }  
}

module.exports = Bat