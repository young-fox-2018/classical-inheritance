"use strict"

const Animal = require('./Animal')

class Bat extends Animal {
    constructor () {
        super('Bat', 'mamalia', 2, 'omnivora')
    }
}

module.exports = Bat