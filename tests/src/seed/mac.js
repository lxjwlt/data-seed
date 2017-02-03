'use strict';

const assert = require('chai').assert;
const validator = require('validator');
const macSeed = require('../../../src/seed/mac');

describe('seed/mac.js', () => {

    it('should be string', () => {
        assert.isString(macSeed());
    });

    it('should be diff', () => {
        assert.notStrictEqual(macSeed(), macSeed());
    });

    it('should be right format', () => {
        assert.isTrue(validator.isMACAddress(macSeed()));
    });

});
