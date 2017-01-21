class xss {
    constructor () {
        if (!(this instanceof xss)) {
            return new xss();
        }

        let seed = this;
    }

    format () {
        return '<a href="javascript:void(0)">click me!</a>';
    }

    strict () {
        return '<script>alert("xss");</script>';
    }
}

module.exports = xss;
