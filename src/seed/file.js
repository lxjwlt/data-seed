'use strict';

let random = require('../util/random');
let arr = require('../util/arr');
const {wrap} = require('../util/hooks');
const wordSeed = require('./word');

let file = wrap(function () {
    return arr(random.int(1, 2), () => randomWord()).concat([file.extension()]).join('.');
});

file.extension = wrap(() => {
    return random.array([
        'mp3', 'avi', 'txt', 'jpg', 'doc', 'png', 'gif',
        'ppt', 'sh', 'js', 'vue', 'php', 'css', 'html',
        'conf', 'xls'
    ]);
});

function randomWord () {
    return wordSeed(1, 5) + random.one('-', '_', '') + wordSeed(1, 5);
}

module.exports = file;
