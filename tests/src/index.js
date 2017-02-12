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

        assert.property(indexMod.util, 'arr');
        assert.property(indexMod.util, 'deep');
        assert.property(indexMod.util, 'random');

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

});

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
