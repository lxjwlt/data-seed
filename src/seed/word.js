'use strict';

const random = require('../util/random');
const arr = require('../util/arr');
const {wrap} = require('../util/hooks');

module.exports = wrap((min = 1, max = 10) => {
    return arr(random.int(min, max), () => random.letter()).join('');
});
