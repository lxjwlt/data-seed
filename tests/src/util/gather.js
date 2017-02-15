'use strict';

const assert = require('chai').assert;
const gather = require('../../../src/util/gather');

describe('util/gather.js', () => {

    it('next item in array', () => {
        let arr = [1, 2, 3];
        let list = gather(arr);

        let item1 = list.next();
        let item2 = list.next();
        let item3 = list.next();

        assert.include(arr, item1);
        assert.include(arr, item2);
        assert.include(arr, item3);

        assert.notStrictEqual(item1, item2);
        assert.notStrictEqual(item2, item3);
        assert.notStrictEqual(item1, item3);

    });

    it('next item in object', () => {
        let obj = {
            item1: 1,
            item2: 2,
            item3: 3
        };
        let list = gather(obj);

        let item1 = list.next();
        let item2 = list.next();
        let item3 = list.next();

        assert.deepEqual(Object.assign({}, obj, item1), obj);
        assert.deepEqual(Object.assign({}, obj, item2), obj);
        assert.deepEqual(Object.assign({}, obj, item3), obj);

        assert.notDeepEqual(item1, item2);
        assert.notDeepEqual(item2, item3);
        assert.notDeepEqual(item1, item3);

    });

    it('iterator arr', () => {
        let arr = [1, 2, 3];
        let list = gather(arr);
        let result = [];

        for (let value of list) {
            assert.include(arr, value);
            result.push(value);
        }

        assert.notStrictEqual(result[0], result[1]);
        assert.notStrictEqual(result[1], result[2]);
        assert.notStrictEqual(result[0], result[2]);

    });

    it('next item in object', () => {
        let obj = {
            item1: 1,
            item2: 2,
            item3: 3
        };
        let list = gather(obj);
        let result = [];

        for (let item of list) {
            assert.deepEqual(Object.assign({}, obj, item), obj);
            result.push(item);
        }

        assert.notDeepEqual(result[0], result[1]);
        assert.notDeepEqual(result[1], result[2]);
        assert.notDeepEqual(result[0], result[2]);

    });

    it('empty array', () => {
        let list = gather([]);

        assert.strictEqual(list.next(), undefined);
        assert.strictEqual(list.next(), undefined);

    });

    it('empty obj', () => {
        let list = gather({});

        assert.strictEqual(list.next(), undefined);
        assert.strictEqual(list.next(), undefined);

    });

    it('no iterator in empty array', () => {

        for (let value of gather([])) {
            assert.strictEqual(1, 2);
        }

    });

    it('no iterator in empty obj', () => {

        for (let value of gather({})) {
            assert.strictEqual(1, 2);
        }

    });

});
