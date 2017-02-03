'use strict';

const random = require('../util/random');
const arr = require('../util/arr');

let mac = () => {
    return arr(6, () => {
        let num = random.int(0, 255).toString(16);

        return num.length < 2 ? '0' + num : num;

    }).join(':').toUpperCase();
};

module.exports = mac;
