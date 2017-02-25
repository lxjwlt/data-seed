'use strict';

const random = require('../util/random');
const arr = require('../util/arr');
const {wrap} = require('../util/hooks');

let md5 = wrap(() => {
    return arr(32, () => random.int(0, 15).toString(16)).join('');
});

module.exports = md5;
