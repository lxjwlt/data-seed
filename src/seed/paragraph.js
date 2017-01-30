'use strict';

let random = require('../util/random');
let loremSeed = require('./lorem');

const LOREMS = arr(10, (i) => {
    return arr(i, () => loremSeed()).join('\n');
});

function paragraph (min = 1, max = LOREMS.length) {

    max = Math.min(max, LOREMS.length);

    return LOREMS[random.int(min - 1, max - 1)] || '';
}

function arr (count, callback) {
    return Array.from(Array(count)).map((value, i) => {
        return callback(i);
    });
}

module.exports = paragraph;
