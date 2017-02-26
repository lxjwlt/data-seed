'use strict';

const random = require('../util/random');
const arr = require('../util/arr');
const {wrap} = require('../util/hooks');

let avatar = wrap((size) => {
    size = size || random.int(50, 100);

    let set = random.int(1, 3);

    return `https://robohash.org/${randomText()}.png?size=${size}x${size}&set=set${set}`;
});

function randomText () {
    return arr(random.int(3, 20), () =>
        random.one(random.letter(), random.int(0, 9))).join('');
}

module.exports = avatar;
