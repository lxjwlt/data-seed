'use strict';

const random = require('../util/random');
const arr = require('../util/arr');

module.exports = () => {
    return arr(4, () => random.int(0, 255)).join('.');
};
