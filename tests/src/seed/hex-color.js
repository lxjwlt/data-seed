'use strict';

const assert = require('chai').assert;
const validator = require('validator');
const hexColorSeed = require('../../../src/seed/hex-color');

describe('seed/hex-color.js', () => {

    it('should be hex color', () => {
        assert.strictEqual(hexColorSeed().length, 7);
        assert.isTrue(validator.isHexColor(hexColorSeed()));
    });

    it('should be short hex color', () => {
        assert.strictEqual(hexColorSeed.short().length, 4);
        assert.isTrue(validator.isHexColor(hexColorSeed.short()));
    });
});
