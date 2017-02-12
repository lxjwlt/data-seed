'use strict';

const assert = require('chai').assert;
const validator = require('validator');
const ip4Seed = require('../../../src/seed/ip4');

describe('seed/ip4.js', () => {

    it('should be string', () => {
        assert.isString(ip4Seed());
    });

    it('should be diff', () => {
        assert.notStrictEqual(ip4Seed(), ip4Seed());
    });

    it('should be right format', () => {
        assert.isTrue(validator.isIP(ip4Seed(), 4));
    });

    describe('@cidr', () => {

        it('should be string', () => {
            assert.isString(ip4Seed.cidr());
        });

        it('should be diff', () => {
            assert.notStrictEqual(ip4Seed.cidr(), ip4Seed.cidr());
        });

        it('should be right format', () => {
            let cidr = ip4Seed.cidr().split('/');
            let ip = cidr[0];
            let segment = cidr[1];

            assert.isTrue(validator.isIP(ip, 4));
            assert.isTrue(validator.isInt(segment, {
                min: 1,
                max: 32
            }));
        });

    });

    describe('@mask', () => {

        it('should be string', () => {
            assert.isString(ip4Seed.mask());
        });

        it('should be ip mask', () => {
            let mask = ip4Seed.mask();

            assert.isTrue(validator.isIP(mask, 4));

            let maskBinary = mask.split('.')
                .map((segment) => Number(segment).toString(2))
                .join('');

            assert.match(maskBinary, /^1*0*$/);
        });

        it('specific arguments', () => {
            let mask = ip4Seed.mask(1, 1);

            assert.strictEqual(mask, '128.0.0.0');
        });

    });

    describe('@mask.binary', () => {

        it('should be string', () => {
            assert.isString(ip4Seed.mask.binary());
        });

        it('should be binary mask', () => {
            let binaryMask = ip4Seed.mask.binary();

            assert.match(binaryMask, /^1*0*$/);
            assert.match(binaryMask, /^\d{32}$/);
        });

        it('specific arguments', () => {
            let binaryMask = ip4Seed.mask.binary(4, 4);

            assert.strictEqual(binaryMask, '1111' + '0'.repeat(28));
        });

    });

});
