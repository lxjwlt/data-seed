'use strict';

const assert = require('chai').assert;
const dateSeed = require('../../../src/seed/date.js');
const moment = require('moment');

describe('seed/date.js', function () {

    describe('#', function () {

        it('default arguments', function () {
            let timestamp = dateSeed();
            let endPoint = Date.now();

            assert.isNumber(timestamp);
            assert.isTrue(timestamp >= 0 && timestamp < endPoint);
        });

        it('specify range', function () {
            let endPoint = Date.now() + 1;
            let startPoint = Date.now();
            let timestamp = dateSeed(startPoint, endPoint);

            assert.isNumber(timestamp);
            assert.isTrue(timestamp === startPoint || timestamp === endPoint);
        });

        it('specify time list', function () {
            let now = Date.now();
            let list = [now, now + 1, now + 2];
            let timestamp = dateSeed(list);

            assert.isNumber(timestamp);
            assert.isTrue(list.includes(timestamp));
        });

    });

    describe('@toSecond', () => {

        it('should be integer', () => {
            assert.isNumber(dateSeed.toSecond());
            assert.notMatch(String(dateSeed.toSecond()), /\./);
        });

        it('should be second unit', function () {
            let timestamp = dateSeed.toSecond(Date.now(), Date.now());
            let now = Date.now();

            assert.isTrue(String(now).length - String(timestamp).length === 3);
        });

    });

    describe('#format', function () {

        it('specify range', function () {
            let timestamp = dateSeed.format('YY-MM-D', Date.now(), Date.now());

            assert.isString(timestamp);
            assert.strictEqual(timestamp, moment().format('YY-MM-D'));
        });

        it('specify time list', function () {
            let timestamp = dateSeed.format('YY-MM-D', [Date.now()]);

            assert.isString(timestamp);
            assert.strictEqual(timestamp, moment().format('YY-MM-D'));
        });

    });

});
