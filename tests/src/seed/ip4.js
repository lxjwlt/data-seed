'use strict';

const assert = require('chai').assert;
const validator = require('validator');
const ip4Seed = require('../../../src/seed/ip4');

describe('seed/ip4.js', () => {

    it('should be string', () => {
        assert.isString(ip4Seed());
    });

    it('should be diff', () => {
        assert.notStrictEqual(ip4Seed(), ip4Seed());
    });

    it('should be right format', () => {
        assert.isTrue(validator.isIP(ip4Seed(), 4));
    });

});
