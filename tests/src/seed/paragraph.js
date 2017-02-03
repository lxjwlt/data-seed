'use strict';

const assert = require('chai').assert;
const paragraphSeed = require('../../../src/seed/paragraph');

describe('seed/paragraph.js', () => {

    it('should be string', () => {
        assert.isString(paragraphSeed());
    });

    it('should be right format', () => {
        assert.notStrictEqual(paragraphSeed().match(/^[a-zA-Z\s.\n]+\.$/m), null);
    });

    it('specific range', () => {
        assert.strictEqual(paragraphSeed(0, 0), '');
    });

    it('should be 2 linebreak', () => {
        assert.strictEqual(paragraphSeed(3, 3).match(/\n/gm).length, 2);
    });

});
