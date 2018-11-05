"use strict"
const Animal = require('./Animal')   
const SuperPower = require('./SuperPower')

class Cat extends Animal {
    constructor(legs, warmBlooded) {
        super(legs, warmBlooded)
        this._superpower = new SuperPower('cat')
    }  
}

module.exports = Cat