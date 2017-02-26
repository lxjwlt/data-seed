'use strict';

const assert = require('chai').assert;
const nameSeed = require('../../../src/seed/name');

describe('seed/name.js', () => {

    describe('english', () => {

        it('should be english name', () => {
            assert.isString(nameSeed.en());
            assert.match(nameSeed.en(), /^[a-zA-Z]+ [a-zA-Z]+$/)
        });

        describe('#firstName', () => {

            it('should be english firstName', () => {
                assert.isString(nameSeed.en.firstName());
                assert.match(nameSeed.en.firstName(), /^[a-zA-Z]+$/)
            });

        });

        describe('#lastName', () => {

            it('should be english lastName', () => {
                assert.isString(nameSeed.en.lastName());
                assert.match(nameSeed.en.lastName(), /^[a-zA-Z]+$/)
            });

        });

    });

    describe('chinese', () => {

        it('should be chinese name', () => {
            assert.isString(nameSeed.cn());
            assert.match(nameSeed.cn(), /^[\u4e00-\u9fa5]+$/)
        });

        describe('#firstName', () => {

            it('should be chinese firstName', () => {
                assert.isString(nameSeed.cn.firstName());
                assert.match(nameSeed.cn.firstName(), /^[\u4e00-\u9fa5]+$/)
            });

        });

        describe('#lastName', () => {

            it('should be chinese lastName', () => {
                assert.isString(nameSeed.cn.lastName());
                assert.match(nameSeed.cn.lastName(), /^[\u4e00-\u9fa5]+$/)
            });

        });

    });

});
