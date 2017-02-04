'use strict';

let random = require('../util/random');

function time (hourType = 24) {
    let hour = random.int(0, 23);
    let minute = random.int(0, 59);
    let tail = '';

    if (hourType !== 24) {
        hour = hour % 13;
        tail = random.array([' AM', ' PM']);
    }

    return hour + ':' + minute + tail;
}

module.exports = time;
