"use strict"

const Animal = require('./Animal')
const SuperPower = require('./SuperPower')

class Dog extends Animal {
    constructor(legs, warmBlooded) {
        super(legs, warmBlooded)
        this._superpower = new SuperPower('dog')
    }  
}

module.exports = Dog