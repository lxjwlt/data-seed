'use strict';

const random = require('../util/random');
const arr = require('../util/arr');
const wordSeed = require('./word');
const hexColor = require('./hex-color');
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

img.dummy = wrap((width, height, background, color) => {
    width = !width && width !== 0 ? random.int(0, 2000) : width;
    height = !height && height !== 0 ? random.int(0, 2000) : height;

    background = !background ? hexColor() : background;
    color = !color ? hexColor() : color;

    background = background.replace('#', '');
    color = color.replace('#', '');

    return `http://dummyimage.com/${width}x${height}.png/${background}/${color}`;
});

module.exports = img;
