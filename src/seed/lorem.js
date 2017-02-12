'use strict';

let random = require('../util/random');
const arr = require('../util/arr');
const {wrap} = require('../util/hooks');

const WORDS = arr(10, (i) => {
    return arr(i, () => random.letter()).join('');
});

let lorem = wrap(function lorem (minSentence = 1, maxSentence = 5) {

    let str = arr(random.int(minSentence, maxSentence), () => {
        return arr(random.int(1, 10), randomWord).join(' ');
    }).join('. ');

    return str ? str + '.' : str;
});

function randomWord () {
    return WORDS[random.int(0, WORDS.length - 1)];
}

module.exports = lorem;
