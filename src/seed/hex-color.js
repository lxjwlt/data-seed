'use strict';

let random = require('../util/random');

function hexColor () {
    let startPoint = 0;
    let endPoint = parseInt('ffffff', 16);
    let hex = random.int(startPoint, endPoint);

    return '#' + hex.toString(16);
}

module.exports = hexColor;
