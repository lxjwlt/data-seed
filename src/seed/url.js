'use strict';

let random = require('../util/random');
let arr = require('../util/arr');
const {wrap} = require('../util/hooks');
const wordSeed = require('./word');

let url = wrap(function (options) {

    options = Object.assign({
        protocol: true,
        host: true,
        path: true,
        query: true
    }, options);

    let protocol = options.protocol ? random.array(['http', 'https']) + '://' : '';

    let host = options.host ? url.host() : '';

    let path = options.path ? url.path() : '';

    let query = options.query ? url.query() : '';

    return protocol + host + path + query;
});

url.protocol = wrap(() => {
    return random.array(['http', 'https', 'file', 'mailto', 'ftp']);
});

url.domain = wrap(() => {
    return random.array([
        'com', 'org', 'net', 'name', 'biz', 'info',
        'int', 'edu', 'gov', 'mil', 'jobs', 'mobi',
        'tel', 'mil'
    ]);
});

url.host = wrap(() => {
    let list = arr(random.int(1, 2), randomWord);

    list.push(url.domain());

    return list.join('.')
});

url.path = wrap(() => {
    return '/' + arr(random.int(1, 5), randomWord).join('/');
});

url.query = wrap(() => {
    return '?' + arr(random.int(1, 5), () => {
        return randomWord() + '=' + randomWord();
    }).join('&');
});

function randomWord () {
    return wordSeed(2, 5);
}

module.exports = url;
