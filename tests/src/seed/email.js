'use strict';

const assert = require('chai').assert;
const emailSeed = require('../../../src/seed/email');

describe('seed/email.js', () => {

    it('should be string', () => {
        assert.isString(emailSeed());
    });

    it('should be diff', () => {
        assert.notStrictEqual(emailSeed(), emailSeed());
    });

    it('should be right format', () => {
        assert.notStrictEqual(emailSeed().match(/^[a-z]+@[a-z]+(?:\.[a-z]+)*$/), null);
    });

});
