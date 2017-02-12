'use strict';

const random = require('../util/random');
const arr = require('../util/arr');

let ip6 = () => {
    return arr(8, () => random.int(0, 65535).toString(16)).join(':');
};

ip6.cidr = () => {
    return ip6() + '/' + random.int(1, 128);
};

ip6.mask = (start = 1, end = 128) => {
    let binary = ip6.mask.binary(start, end);
    let segments = [];

    for (let i = 0; i + 16 <= binary.length; i += 16) {
        let binarySegment = binary.slice(i, i + 16);

        segments.push(parseInt(binarySegment, 2).toString(16));
    }

    return segments.join(':');
};

ip6.mask.binary = (start = 1, end = 128) => {
    let num = random.int(start, end);

    let str = '1'.repeat(num);

    return str + '0'.repeat(128 - str.length);
};

module.exports = ip6;
