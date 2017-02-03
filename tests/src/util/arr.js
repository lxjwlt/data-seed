'use strict';

const assert = require('chai').assert;
const arr = require('../../../src/util/arr');

describe('util/arr.js', () => {
    const VALUE = 10;
    const NUM = 2;
    let list = arr(NUM, () => VALUE);
    let list2 = arr(NUM, VALUE);

    it(`should be ${NUM} elements`, () => {

        assert.strictEqual(list.length, NUM);
        assert.strictEqual(list2.length, NUM);

    });

    it(`value should be ${VALUE}`, () => {
        for (let value of list) {
            assert.strictEqual(value, VALUE);
        }

        for (let value of list2) {
            assert.strictEqual(value, VALUE);
        }
    });

});
