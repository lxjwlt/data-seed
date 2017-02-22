'use strict';

const assert = require('chai').assert;
const validator = require('validator');
const imgSeed = require('../../../src/seed/img');

describe('seed/img.js', () => {

    it('should be string', () => {
        assert.isString(imgSeed());
    });

    it('should be img url', () => {
        let url = imgSeed();
        assert.match(url, /^(?:[a-z]+\/)*[a-z]+\.(?:png|jpg|svg|gif)$/);
    });

    describe('#base64', () => {

        it('should be base64', () => {
            let url = imgSeed.base64();
            let base64 = url.replace('data:image/png;base64,', '');

            assert.match(url, /^data:image\/png;base64/);
            assert.isTrue(validator.isBase64(base64));
        });

    });

    describe('#dummy', () => {

        it('should be url', () => {
            let url = imgSeed.dummy();

            assert.isTrue(validator.isURL(url));
            assert.match(url, /^http:\/\/dummyimage\.com\/\d+x\d+\.png\/[0-9a-f]+\/[0-9a-f]+$/);
        });

        it('specific arguments', () => {
            let url = imgSeed.dummy(200, 100, '#000', '#ccc');
            assert.strictEqual(url,
                'http://dummyimage.com/200x100.png/000/ccc');
        });

    });
});
