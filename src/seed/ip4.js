'use strict';

const random = require('../util/random');
const arr = require('../util/arr');
const {wrap} = require('../util/hooks');

let ip4 = wrap(() => {
    return arr(4, () => random.int(0, 255)).join('.');
});

ip4.cidr = wrap(() => {
    return ip4() + '/' + random.int(1, 32);
});

ip4.mask = wrap((start = 1, end = 32) => {
    let binary = ip4.mask.binary(start, end);
    let segments = [];

    for (let i = 0; i + 8 <= binary.length; i += 8) {
        let binarySegment = binary.slice(i, i + 8);

        segments.push(parseInt(binarySegment, 2));
    }

    return segments.join('.');
});

ip4.mask.binary = wrap((start = 1, end = 32) => {
    let num = random.int(start, end);

    let str = '1'.repeat(num);

    return str + '0'.repeat(32 - str.length);
});

module.exports = ip4;
