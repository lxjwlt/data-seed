'use strict';

let random = require('../util/random');
let arr = require('../util/arr');

const FACTOR = [1, 3];

function isbn (version) {

    if (!version) {
        version = random.array([10, 13]);
    }

    let result;

    if (version === 10) {
        let list = arr(9, () => random.int(0, 9));
        let sum = 0;

        for (let i = 0; i < list.length; i++) {
            sum += list[i] * (i + 1);
        }

        let checkNum = sum % 11;

        checkNum = checkNum === 10 ? 'X' : checkNum;

        result = list.join('') + '-' + checkNum;
    }

    if (version === 13) {
        let list = arr(12, () => random.int(0, 9));
        let sum = 0;

        for (let i = 0; i < list.length; i++) {
            sum += list[i] * FACTOR[i % 2];
        }

        let checkNum = 10 - sum % 10;

        result = list.join('') + checkNum;
    }

    return result;
}

module.exports = isbn;
