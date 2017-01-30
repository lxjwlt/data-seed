'use strict';

const assert = require('chai').assert;
const urlSeed = require('../../../src/seed/url');

describe('seed/url.js', () => {

    it('should be string', () => {
        assert.isString(urlSeed());
    });

    it('should be diff', () => {
        assert.notStrictEqual(urlSeed(), urlSeed());
    });

    it('should be right format', () => {
        const urlReg = /^(?:http|https):\/\/(?:[a-z]+\.)+[a-z]+(?:\/[a-z]+)+\?[a-z]+=[a-z]+(?:&[a-z]+=[a-z]+)*$/;
        assert.notStrictEqual(urlSeed().match(urlReg), null);
    });

    it('specific argument', () => {
        assert.strictEqual(urlSeed({
            protocol: false,
            host: false,
            path: false,
            query: false
        }), '');
    });

});
