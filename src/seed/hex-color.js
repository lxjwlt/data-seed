'use strict';

let random = require('../util/random');

function hexColor () {
    let startPoint = 0;
    let endPoint = parseInt('ffffff', 16);
    let hex = random.int(startPoint, endPoint).toString(16);

    hex = '0'.repeat(6 - hex.length) + hex;

    return '#' + hex;
}

module.exports = hexColor;
