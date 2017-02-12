'use strict';

const {wrap} = require('../util/hooks');

let xss = wrap(() => {
    return '<script>alert("xss");</script>';
});

xss.noStrict = wrap(() => {
    return '<a href="javascript:void(0)">click me!</a>';
});

module.exports = xss;
