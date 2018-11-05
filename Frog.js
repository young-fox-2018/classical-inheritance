"use strict"

const Animal = require('./Animal')

class Frog extends Animal {
    constructor () {
        super('Frog', 'amphibi', 2, 'insectivora')
    }
}

module.exports = Frog