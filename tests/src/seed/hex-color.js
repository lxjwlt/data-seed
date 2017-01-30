'use strict';

const assert = require('chai').assert;
const hexColorSeed = require('../../../src/seed/hex-color');

describe('seed/hex-color.js', () => {

    it('should be string hex value', () => {
        let hex = hexColorSeed();

        assert.isString(hex);
        assert.notStrictEqual(hex.match(/^#[0-9a-f]{6}$/), null);
    });

});
