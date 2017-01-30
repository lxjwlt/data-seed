'use strict';

const assert = require('chai').assert;
const colorSeed = require('../../../src/seed/color.js');

describe('seed/color.js', function () {

    it('should be string', function () {
        assert.isString(colorSeed());
    });

    it('should be in', () => {
        assert.isTrue(colorSeed.COLORS.includes(colorSeed()));
    });

});
