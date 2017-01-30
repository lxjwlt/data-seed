const assert = require('chai').assert;
const uuidSeed = require('../../../src/seed/uuid.js');

describe('seed/xss.js', function () {

    it('should be string', function () {
        assert.isString(uuidSeed());
    });

});
