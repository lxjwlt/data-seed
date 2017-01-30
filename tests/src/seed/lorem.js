'use strict';

const assert = require('chai').assert;
const loremSeed = require('../../../src/seed/lorem');

describe('seed/lorem.js', () => {

    it('should be string', () => {
        assert.isString(loremSeed());
    });

    it('should be diff', () => {
        assert.notStrictEqual(loremSeed(), loremSeed());
    });

    it('should be right format', () => {
        assert.notStrictEqual(loremSeed().match(/^[a-zA-Z\s.]+\.$/), null);
    });

    it('specific range', () => {
        assert.strictEqual(loremSeed(0,0), '');
    });

});
