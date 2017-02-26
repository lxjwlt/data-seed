'use strict';

const assert = require('chai').assert;
const avatar = require('../../../src/seed/avatar');

describe('seed/avatar.js', () => {

    it(`should be string`, () => {
        assert.isString(avatar());
    });

    it('should be right format', () => {
        assert.match(avatar(),
            /^https:\/\/robohash\.org\/[a-z0-9]+\.png\?size=\d+x\d+&set=set\d$/);
    });

});
