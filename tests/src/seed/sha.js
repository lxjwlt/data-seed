'use strict';

const assert = require('chai').assert;
const shaSeed = require('../../../src/seed/sha');

describe('seed/sha1.js', () => {

    it(`should be string`, () => {
        assert.isString(shaSeed());
    });

    it('should be right format', () => {
        assert.match(shaSeed(), /^([0-9a-f]){40}$/);
    });

    it('SHA256', () => {
        assert.match(shaSeed(256), /^([0-9a-f]){64}$/)
    });

});
