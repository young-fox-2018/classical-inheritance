"use strict"

const Animal = require('./Animal')

class Chicken extends Animal {
    constructor () {
        super('Chicken', 'unggas', 2, 'herbivora')
        this.wing = true
    }
}

module.exports = Chicken