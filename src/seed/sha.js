'use strict';

const random = require('../util/random');
const arr = require('../util/arr');
const {wrap} = require('../util/hooks');

let sha = wrap((type) => {
    let length = type === 256 ? 64 : 40;

    return arr(length, () => random.int(0, 15).toString(16)).join('');
});

module.exports = sha;
