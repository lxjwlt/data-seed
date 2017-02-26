'use strict';

const random = require('../util/random');
const arr = require('../util/arr');
const {wrap} = require('../util/hooks');

let wordSeed = wrap((min = 1, max = 10) => {
    return arr(random.int(min, max), () => random.letter()).join('');
});

wordSeed.cn = wrap(() => {

    // '\u4e00' - '\u9fa5'
    let chartCode = random.int(19968, 40869);

    return String.fromCharCode(chartCode);
});

module.exports = wordSeed;
