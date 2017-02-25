'use strict';

const assert = require('chai').assert;
const sha1Seed = require('../../../src/seed/sha1');

describe('seed/sha1.js', () => {

    it(`should be string`, () => {
        assert.isString(sha1Seed());
    });

    it('should be right format', () => {
        assert.match(sha1Seed(), /^([0-9a-f]){40}$/);
    });

});
