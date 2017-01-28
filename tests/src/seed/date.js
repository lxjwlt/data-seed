'use strict';

const assert = require('chai').assert;
const dateSeed = require('../../../src/seed/date.js');
const moment = require('moment');

describe('seed/date.js', function () {

    describe('#', function () {

        it('default arguments', function () {
            let timestamp = dateSeed();
            let endPoint = Date.now();
            let startPoint = moment('1970/1/1').toDate().getTime();

            assert.isNumber(timestamp);
            assert.isTrue(timestamp >= startPoint && timestamp < endPoint);
        });

        it('specify range', function () {
            let endPoint = Date.now() + 1;
            let startPoint = Date.now();
            let timestamp = dateSeed(startPoint, endPoint);

            assert.isNumber(timestamp);
            assert.isTrue(timestamp === startPoint || timestamp === endPoint);
        });

        it('specify time list', function () {
            let list = ['2010/1/1', '2020/1/12', '1982/12/2'];
            let timestamp = dateSeed(list);

            assert.isNumber(timestamp);
            assert.isTrue(list.includes(moment(timestamp).format('YYYY/M/D')));
        });

    });

    describe('#format', function () {

        it('specify range', function () {
            let endPoint = '2012/1/1';
            let startPoint = '2012/1/1';
            let timestamp = dateSeed.format('YY-MM-D', startPoint, endPoint);

            assert.isString(timestamp);
            assert.strictEqual(timestamp, '12-01-1');
        });

        it('specify time list', function () {
            let list = ['2014/4/22'];
            let timestamp = dateSeed.format('YY-MM-D', list);

            assert.isString(timestamp);
            assert.strictEqual(timestamp, '14-04-22');
        });

    });

});
