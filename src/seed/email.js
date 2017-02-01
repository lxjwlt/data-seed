'use strict';

const random = require('../util/random');
const arr = require('../util/arr');
const wordSeed = require('./word');

function email () {
    return wordSeed() + '@' + arr(random.int(2, 4), wordSeed).join('.');
}

module.exports = email;
