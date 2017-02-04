'use strict';

let random = require('../util/random');

function hexColor () {
    return hex(0, 16777215);
}

hexColor.short = () => {
    return hex(0, 4095);
};

function hex (start, end) {
    let hex = random.int(start, end).toString(16);
    let len = end.toString(16).length;

    hex = '0'.repeat(len - hex.length) + hex;

    return '#' + hex;
}

module.exports = hexColor;
