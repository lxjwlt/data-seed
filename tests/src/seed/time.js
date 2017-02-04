'use strict';

const assert = require('chai').assert;
const timeSeed = require('../../../src/seed/time');

describe('seed/time.js', () => {

    it('should be string', () => {
        assert.isString(timeSeed());
    });

    it('should be 24 hour', () => {
        let list = timeSeed().split(':');
        let hour = Number(list[0]);
        let minute = Number(list[1]);

        assert.isTrue(hour >= 0 && hour <= 23);
        assert.isTrue(minute >= 0 && minute <= 59);
    });

    it('should be 12 hour', () => {
        let list = timeSeed(12).split(/(?:\s|:)/);
        let hour = Number(list[0]);
        let minute = Number(list[1]);
        let tail = list[2];

        assert.isTrue(hour >= 0 && hour <= 12);
        assert.isTrue(minute >= 0 && minute <= 59);
        assert.include(['AM', 'PM'], tail);
    });

});
