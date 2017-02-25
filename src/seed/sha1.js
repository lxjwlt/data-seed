'use strict';

const random = require('../util/random');
const arr = require('../util/arr');
const {wrap} = require('../util/hooks');

let sha1 = wrap(() => {
    return arr(40, () => random.int(0, 15).toString(16)).join('');
});

module.exports = sha1;
