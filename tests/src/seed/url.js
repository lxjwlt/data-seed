'use strict';

const assert = require('chai').assert;
const urlSeed = require('../../../src/seed/url');
const validator = require('validator');

describe('seed/url.js', () => {

    it('should be string', () => {
        assert.isString(urlSeed());
    });

    it('should be right format', () => {
        assert.isTrue(validator.isURL(urlSeed()));
    });

    it('specific argument', () => {
        assert.strictEqual(urlSeed({
            protocol: false,
            host: false,
            path: false,
            query: false
        }), '');
    });

    it('#protocol', () => {
        assert.isString(urlSeed.protocol());
        assert.isOk(urlSeed.protocol());
    });

    it('#domain', () => {
        assert.isString(urlSeed.domain());
        assert.isOk(urlSeed.domain());
    });

    it('#host', () => {
        assert.isString(urlSeed.host());
        assert.match(urlSeed.host(), /^[a-z]+(?:\.[a-z]+)+$/);
    });

    it('#path', () => {
        assert.isString(urlSeed.path());
        assert.match(urlSeed.path(), /^(?:\/[a-z]+)+$/);
    });

    it('#query', () => {
        assert.isString(urlSeed.query());
        assert.match(urlSeed.query(), /^\?[a-z]+=[a-z]+(?:&[a-z]+=[a-z]+)*$/);
    });
});
