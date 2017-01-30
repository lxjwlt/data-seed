'use strict';

let random = require('../util/random');
let arr = require('../util/arr');

function url (options) {

    options = Object.assign({
        protocol: true,
        host: true,
        path: true,
        query: true
    }, options);

    let protocol = options.protocol ? random.array(['http', 'https']) + '://' : '';

    let host = options.host ? arr(random.int(2, 3), randomWord).join('.') : '';

    let path = options.path ?
        '/' + arr(random.int(1, 5), randomWord).join('/') : '';

    let query = options.query ? '?' + arr(random.int(1, 5), () => {
        return randomWord() + '=' + randomWord();
    }).join('&') : '';

    return protocol + host + path + query;
}

function randomWord () {
    return arr(random.int(2, 5), () => random.letter()).join('');
}

module.exports = url;
