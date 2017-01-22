
'use strict';

const assert = require('chai').assert;
const random = require('../../../src/util/random.js');

describe('random.js', function () {

    describe('#int', () => {
        it('default arguments', () => {
            let num = random.int();
            assert.isNumber(num);
        });

        it('should be int number', () => {
            let num = random.int(3, 10);
            assert.isNumber(num);
            assert.strictEqual(String(num).match(/\./), null);
        });

        it('single number', () => {
            let num = random.int(10, 10);
            assert.strictEqual(num, 10);
        });
    });

    describe('#float', () => {
        it('default arguments', () => {
            let num = random.float();
            assert.isNumber(num);
        });

        it('should be float number', () => {
            let num = random.float(3, 10);
            assert.isNumber(num);
            assert.notStrictEqual(String(num).match(/\./), null);
        });
    });

    describe('#letter', () => {

    });
});
