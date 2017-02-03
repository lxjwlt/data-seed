const assert = require('chai').assert;
const xssSeed = require('../../../src/seed/xss.js');

describe('seed/xss.js', function () {

    it('format', function () {
          assert.equal(xssSeed.noStrict(), '<a href="javascript:void(0)">click me!</a>');
    });

    it('strict format', function () {
          assert.equal(xssSeed(), '<script>alert("xss");</script>');
    });

});
