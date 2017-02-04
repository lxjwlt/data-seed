'use strict';

const assert = require('chai').assert;
const validator = require('validator');
const isbnSeed = require('../../../src/seed/isbn');

describe('seed/isbn.js', () => {

    it('should be isbn 10 or 13', () => {
        assert.isTrue(validator.isISBN(isbnSeed()));
    });

    it('should be isbn 10', () => {
        assert.isTrue(validator.isISBN(isbnSeed(10), 10));
    });

    it('should be isbn 13', () => {
        assert.isTrue(validator.isISBN(isbnSeed(13), 13));
    });

});
