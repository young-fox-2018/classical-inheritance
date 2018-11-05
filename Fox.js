"use strict"

const Animal = require('./Animal')

class Fox extends Animal {
    constructor () {
        super('Fox')
    }
    
    get superpower () {
        // return super('fox')
    }
}

module.exports = Fox