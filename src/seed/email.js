'use strict';

const random = require('../util/random');
const arr = require('../util/arr');
const wordSeed = require('./word');
const {wrap} = require('../util/hooks');

let email = wrap(function () {
    return wordSeed() + '@' + arr(random.int(2, 4), () => wordSeed()).join('.');
});

module.exports = email;
