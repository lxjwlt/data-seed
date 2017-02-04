'use strict';

let seed = {
    util: {
        deep: require('./util/deep'),
        random: require('./util/random'),
        arr: require('./util/arr')
    },
    seed: {
        color: require('./seed/color'),
        date: require('./seed/date'),
        email: require('./seed/email'),
        hexColor: require('./seed/hex-color'),
        lorem: require('./seed/lorem'),
        paragraph: require('./seed/paragraph'),
        url: require('./seed/url'),
        uuid: require('./seed/uuid'),
        word: require('./seed/word'),
        xss: require('./seed/xss'),
        ip4: require('./seed/ip4'),
        mac: require('./seed/mac'),
        isbn: require('./seed/isbn'),
        time: require('./seed/time'),
        img: require('./seed/img')
    }
};

module.exports = seed;
