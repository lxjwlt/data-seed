'use strict';

const random = require('../util/random');
const arr = require('../util/arr');

let ip4 = () => {
    return arr(4, () => random.int(0, 255)).join('.');
};

ip4.cidr = () => {
    return ip4() + '/' + random.int(1, 32);
};

module.exports = ip4;
