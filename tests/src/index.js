'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('chai').assert;
const indexMod = require('../../src/index');
const xssSeed = require('../../src/seed/xss');
const ip6 = require('../../src/seed/ip6');
const hooks = require('../../src/util/hooks');

describe('index.js', () => {

    it('utils strictEqual', () => {

        strictEqualMod(indexMod.util, '../../src/util');

    });

    it('utils completeness', () => {

        completeness(indexMod.util, '../../src/util', [
            'hooks'
        ]);

        assert.property(indexMod, 'register');

    });

    it('seeds strictEqual', () => {

        strictEqualMod(indexMod.seed, '../../src/seed');

    });

    it('seeds completeness', () => {

        completeness(indexMod.seed, '../../src/seed');

    });

    it('register custom seed', () => {

        indexMod.register('sum', (a, b) => {
            return a + b;
        });

        assert.property(indexMod.seed, 'sum');
        assert.strictEqual(indexMod.seed.sum(1, 2), 3);

    });

    it('add hook', () => {

        indexMod.hook(() => {
            return xssSeed();
        });

        assert.strictEqual(ip6.cidr(), xssSeed());

        hooks.clear();
    });

    it('chain hook', () => {

        indexMod
            .hook(() => 1)
            .hook(() => 2);

        assert.strictEqual(ip6.cidr(), 2);

        hooks.clear();
    });

    it('all should be hook', () => {
        indexMod.hook(() => {
            return 'test-all-hook';
        });

        traverseSeed(indexMod.seed, (seed) => {
            if (typeof seed === 'function') {
                assert.strictEqual(seed(), 'test-all-hook');
            }
        });

        hooks.clear();
    });

});

function traverseSeed (seed, callback) {
    for (let subSeedName of Object.keys(seed)) {
        let subSeed = seed[subSeedName];

        callback(subSeed, subSeedName);

        if (typeof subSeed === 'function' ||
            subSeed && typeof subSeed === 'object' && !Array.isArray(subSeed)) {
            traverseSeed(subSeed, callback);
        }
    }
}

function strictEqualMod (obj, dir) {
    assert.isObject(obj);

    for (let prop of Object.keys(obj)) {
        let item = obj[prop];
        let fileName = prop.replace(/[A-Z]/g, (letter) => '-' +letter.toLowerCase());

        assert.strictEqual(item, require(path.resolve(__dirname, dir, fileName)));
    }
}

function completeness (obj, dir, exclude = []) {
    for (let dirPath of fs.readdirSync(path.resolve(__dirname, dir))) {
        let pathConfig = path.parse(dirPath);
        let fileName = pathConfig.name;
        let seedName = fileName.replace(/-([a-z])/g, (v, $1) => $1.toUpperCase());

        if (exclude.includes(seedName)) {
            continue;
        }

        assert.property(obj, seedName);
    }
}
