'use strict';

const assert = require('chai').assert;
const paragraphSeed = require('../../../src/seed/paragraph');

describe('seed/paragraph.js', () => {

    it('should be string', () => {
        assert.isString(paragraphSeed());
    });

    it('should be diff', () => {
        assert.notStrictEqual(paragraphSeed(), paragraphSeed());
    });

    it('should be right format', () => {
        assert.notStrictEqual(paragraphSeed().match(/^[a-zA-Z\s.\n]+\.$/m), null);
    });

    it('specific range', () => {
        assert.strictEqual(paragraphSeed(0, 0), '');
    });

});
