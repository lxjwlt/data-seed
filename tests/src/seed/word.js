'use strict';

const assert = require('chai').assert;
const wordSeed = require('../../../src/seed/word');

describe('seed/word.js', () => {

    it('should be english word', () => {
        assert.isString(wordSeed());
        assert.match(wordSeed(), /^[a-z]+$/);
    });

    describe('#en', () => {

        it('should be chinese word', () => {
            assert.isString(wordSeed.cn());
            assert.match(wordSeed.cn(), /^[\u4e00-\u9fa5]$/)
        });

    });

});
