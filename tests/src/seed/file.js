'use strict';

const assert = require('chai').assert;
const fileSeed = require('../../../src/seed/file');

describe('seed/url.js', () => {

    it('should be string', () => {
        assert.isString(fileSeed());
    });

    it('should be right format', () => {
        assert.match(fileSeed(), /^[a-z\-_]+(?:\.[a-z\-_]+)$/);
    });

    it('#extension', () => {
        assert.isString(fileSeed.extension());
        assert.isOk(fileSeed.extension());
    });
});
