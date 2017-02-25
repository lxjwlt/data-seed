'use strict';

let random = require('../util/random');
let arr = require('../util/arr');
const {wrap} = require('../util/hooks');
const wordSeed = require('./word');

let file = wrap(function () {
    return arr(random.int(1, 3), () => wordSeed()).concat([file.extension()]).join('.');
});

file.extension = wrap(() => {
    return random.array([
        'mp3', 'avi', 'txt', 'jpg', 'doc', 'png', 'gif',
        'ppt', 'sh', 'js', 'vue', 'php', 'css', 'html',
        'conf', 'xls'
    ]);
});

module.exports = file;
