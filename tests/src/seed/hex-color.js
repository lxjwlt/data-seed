'use strict';

const assert = require('chai').assert;
const validator = require('validator');
const hexColorSeed = require('../../../src/seed/hex-color');

describe('seed/hex-color.js', () => {

    it('should be hex color', () => {
        assert.isTrue(validator.isHexColor(hexColorSeed()));
    });

});
