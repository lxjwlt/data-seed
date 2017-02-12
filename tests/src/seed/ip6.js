'use strict';

const assert = require('chai').assert;
const validator = require('validator');
const ip6Seed = require('../../../src/seed/ip6');

describe('seed/ip4.js', () => {

    it('should be string', () => {
        assert.isString(ip6Seed());
    });

    it('should be right format', () => {
        assert.isTrue(validator.isIP(ip6Seed(), 6));
    });

    describe('@cidr', () => {

        it('should be string', () => {
            assert.isString(ip6Seed.cidr());
        });

        it('should be right format', () => {
            let cidr = ip6Seed.cidr().split('/');
            let ip = cidr[0];
            let segment = cidr[1];

            assert.isTrue(validator.isIP(ip, 6));
            assert.isTrue(validator.isInt(segment, {
                min: 1,
                max: 128
            }));
        });

    });

    describe('@mask', () => {

        it('should be string', () => {
            assert.isString(ip6Seed.mask());
        });

        it('should be ip mask', () => {
            let mask = ip6Seed.mask();

            assert.isTrue(validator.isIP(mask, 6));

            let maskBinary = mask.split(':')
                .map((segment) => parseInt(segment, 16).toString(2))
                .join('');

            assert.match(maskBinary, /^1*0*$/);
        });

        it('specific arguments', () => {
            let mask = ip6Seed.mask(1, 1);

            assert.strictEqual(mask, '8000:0:0:0:0:0:0:0');
        });

    });

    describe('@mask.binary', () => {

        it('should be string', () => {
            assert.isString(ip6Seed.mask.binary());
        });

        it('should be binary mask', () => {
            let binaryMask = ip6Seed.mask.binary();

            assert.match(binaryMask, /^1*0*$/);
            assert.match(binaryMask, /^\d{128}$/);
        });

        it('specific arguments', () => {
            let binaryMask = ip6Seed.mask.binary(4, 4);

            assert.strictEqual(binaryMask, '1111' + '0'.repeat(124));
        });

    });

});
