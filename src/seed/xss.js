'use strict';

let xss = () => {
    return '<script>alert("xss");</script>';
};

xss.noStrict = () => {
    return '<a href="javascript:void(0)">click me!</a>';
};

module.exports = xss;
