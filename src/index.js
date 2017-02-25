'use strict';

const hooks = require('./util/hooks');

let mod = {
    util: {
        deep: require('./util/deep'),
        random: require('./util/random'),
        arr: require('./util/arr'),
        gather: require('./util/gather')
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
        ip6: require('./seed/ip6'),
        mac: require('./seed/mac'),
        isbn: require('./seed/isbn'),
        time: require('./seed/time'),
        img: require('./seed/img'),
        file: require('./seed/file'),
        md5: require('./seed/md5'),
        mimeType: require('./seed/mime-type'),
        sha: require('./seed/sha')
    },
    hook (func) {
        hooks.set(func);
        return mod;
    },
    register (name, func) {
        mod.seed[name] = hooks.wrap(func);
    }
};

module.exports = mod;
