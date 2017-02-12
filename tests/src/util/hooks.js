'use strict';

const assert = require('chai').assert;
const hooks = require('../../../src/util/hooks');
const xssSeed = require('../../../src/seed/xss');
const ip4Seed = require('../../../src/seed/ip4');

describe('util/hooks.js', () => {

    it(`should be xss`, () => {

        hooks.set(() => xssSeed());

        assert.strictEqual(ip4Seed(), xssSeed());

        hooks.clear();

    });

    it(`should has argument`, () => {

        hooks.set((xss) => {
            assert.strictEqual(xss, xssSeed());
        });

        assert.strictEqual(xssSeed(), undefined);

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
