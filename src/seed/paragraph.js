'use strict';

let random = require('../util/random');
const arr = require('../util/arr');
let loremSeed = require('./lorem');
const {wrap} = require('../util/hooks');

const LOREMS = arr(10, (i) => {
    return arr(i + 1, () => loremSeed()).join('\n');
});

let paragraph = wrap(function (min = 1, max = LOREMS.length) {

    max = Math.min(max, LOREMS.length);

    return LOREMS[random.int(min - 1, max - 1)] || '';
});

module.exports = paragraph;
