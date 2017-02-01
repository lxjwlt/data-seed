'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('chai').assert;
const indexMod = require('../../src/index');

describe('index.js', () => {

    it('utils strictEqual', () => {

        strictEqualMod(indexMod.util, '../../src/util');

    });

    it('utils completeness', () => {

        assert.property(indexMod.util, 'deep');
        assert.property(indexMod.util, 'random');

    });

    it('seeds strictEqual', () => {

        strictEqualMod(indexMod.seed, '../../src/seed');

    });

    it('seeds completeness', () => {

        for (let dirPath of fs.readdirSync(path.resolve(__dirname, '../../src/seed'))) {
            let pathConfig = path.parse(dirPath);
            let fileName = pathConfig.name;
            let seedName = fileName.replace(/-([a-z])/g, (v, $1) => $1.toUpperCase());

            assert.property(indexMod.seed, seedName);
        }

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
