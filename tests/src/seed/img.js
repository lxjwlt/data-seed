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

    describe('@base64', () => {

        it('should be base64', () => {
            let url = imgSeed.base64();
            let base64 = url.replace('data:image/png;base64,', '');

            assert.match(url, /^data:image\/png;base64/);
            assert.isTrue(validator.isBase64(base64));
        });

    });
});
