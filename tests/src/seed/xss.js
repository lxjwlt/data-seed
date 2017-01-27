const assert = require('chai').assert;
const xssSeed = new (require('../../../src/seed/xss.js'))();

describe('seed/xss.js', function () {

    it('format', function () {
          assert.equal(xssSeed.format(), '<a href="javascript:void(0)">click me!</a>');
    });

    it('strict format', function () {
          assert.equal(xssSeed.strict(), '<script>alert("xss");</script>');
    });

});
