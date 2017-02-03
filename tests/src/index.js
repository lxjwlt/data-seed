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

        completeness(indexMod.util, '../../src/util');

    });

    it('seeds strictEqual', () => {

        strictEqualMod(indexMod.seed, '../../src/seed');

    });

    it('seeds completeness', () => {

        completeness(indexMod.seed, '../../src/seed');

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

function completeness (obj, dir) {
    for (let dirPath of fs.readdirSync(path.resolve(__dirname, dir))) {
        let pathConfig = path.parse(dirPath);
        let fileName = pathConfig.name;
        let seedName = fileName.replace(/-([a-z])/g, (v, $1) => $1.toUpperCase());

        assert.property(obj, seedName);
    }
}
