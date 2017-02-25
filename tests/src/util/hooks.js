'use strict';

const assert = require('chai').assert;
const validator = require('validator');
const hooks = require('../../../src/util/hooks');
const xssSeed = require('../../../src/seed/xss');
const ip4Seed = require('../../../src/seed/ip4');
const macSeed = require('../../../src/seed/mac');

describe('util/hooks.js', () => {

    it(`should be xss`, () => {
        const xss = xssSeed();

        hooks.set(() => xss);

        assert.strictEqual(ip4Seed(), xss);
        assert.strictEqual(macSeed(), xss);

        hooks.clear();
    });

    it(`should has argument`, () => {
        const xss = xssSeed();

        hooks.set((value) => {
            assert.strictEqual(value, xss);
            return 1;
        });

        hooks.set((value) => {
            assert.strictEqual(value, 1);
        });

        assert.strictEqual(xssSeed(), undefined);

        hooks.clear();

    });

    it('hook for specific seed', () => {
        hooks.set(macSeed, () => {
            return 'test-mac-hook';
        });

        assert.strictEqual(macSeed(), 'test-mac-hook');
        assert.isTrue(validator.isIP(ip4Seed(), 4));

        hooks.clear();
    });

    it('specific seed and global override', () => {
        hooks.set(() => {
            return 'global';
        });

        hooks.set(macSeed, (value) => {
            return 'test-mac-hook-' + value;
        });

        assert.strictEqual(macSeed(), 'test-mac-hook-global');
        assert.strictEqual(ip4Seed(), 'global');

        hooks.clear();
    });

    it(`wrap`, () => {

        let sum = hooks.wrap((a, b) => {
            return a + b;
        });

        assert.strictEqual(sum(1, 2), 3);

        hooks.set(() => {
            return 0;
        });

        assert.strictEqual(sum(1, 2), 0);

        hooks.clear();
    });

});
