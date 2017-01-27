'use strict';

class xss {
    constructor () {}


    format () {
        return '<a href="javascript:void(0)">click me!</a>';
    }

    strict () {
        return '<script>alert("xss");</script>';
    }
}

module.exports = xss;
