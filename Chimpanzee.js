"use strict"

const Animal = require('./Animal')

class Chimpanzee extends Animal {
    constructor () {
        super('Chimpanzee', 'mamalia', 2, 'herbivora')
    }
}

module.exports = Chimpanzee