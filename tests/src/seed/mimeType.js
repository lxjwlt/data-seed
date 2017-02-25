'use strict';

const assert = require('chai').assert;
const mimeType = require('../../../src/seed/mimeType');

describe('seed/mimeType.js', () => {

    it(`should be string`, () => {
        assert.isString(mimeType());
    });

    it('should be right format', () => {
        assert.match(mimeType(), /^[a-z0-9.\-]+\/[a-z0-9.\-]+$/);
    });

});
