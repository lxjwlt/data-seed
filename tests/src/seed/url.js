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

});
