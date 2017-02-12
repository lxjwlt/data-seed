'use strict';

const random = require('../util/random');
const arr = require('../util/arr');
const wordSeed = require('./word');
const {wrap} = require('../util/hooks');

let img = wrap(() => {
    let path = arr(random.int(0, 3), () => wordSeed()).join('/');
    let tail = random.array(['png', 'svg', 'jpg', 'gif']);

    path = path ? path + '/' : '';

    return path + wordSeed() + '.' + tail;
});

img.base64 = wrap(() => {
    let len = 4 * random.int(5, 10);

    return 'data:image/png;base64,' +
        arr(len, () => random.array([random.letter(), random.int(0, 9), '/', '+']))
            .join('');
});

module.exports = img;
