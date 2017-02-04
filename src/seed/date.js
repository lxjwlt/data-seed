'use strict';

let moment = require('moment');
let random = require('../util/random');

function date (start='1970/1/1', end=Date.now()) {
    let time;

    if (Array.isArray(start)) {
        time = start[random.int(0, start.length - 1)];
        time = moment(time).toDate().getTime();

    } else {
        start = moment(start).toDate().getTime();
        end = moment(end).toDate().getTime();

        time = random.int(start, end);
    }

    return time;
}

date.toSecond = function () {
    return Math.ceil(date.apply(null, arguments) / 1000);
};

date.format = (format, start, end) => {
    return moment(date(start, end)).format(format);
};

module.exports = date;
