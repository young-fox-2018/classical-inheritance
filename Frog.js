"use strict"

const Animal = require('./Animal')
const SuperPower = require('./SuperPower')

class Frog extends Animal {
    constructor(legs, warmBlooded) {
        super(legs, warmBlooded)
        this._superpower = new SuperPower('frog')
    }  
}

module.exports = Frog