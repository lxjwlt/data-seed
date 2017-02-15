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


});
