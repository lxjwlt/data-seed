'use strict';

const random = require('../util/random');
const arr = require('../util/arr');

module.exports = (min = 1, max = 10) => {
    return arr(random.int(min, max), () => random.letter()).join('');
};
