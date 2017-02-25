'use strict';

const assert = require('chai').assert;
const validator = require('validator');
const md5Seed = require('../../../src/seed/md5');

describe('seed/md5.js', () => {

    it(`should be string`, () => {
        assert.isString(md5Seed());
    });

    it('should be right format', () => {
        assert.isTrue(validator.isMD5(md5Seed()));
    });

});
