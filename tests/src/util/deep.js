
'use strict';

const assert = require('chai').assert;
const deep = require('../../../src/util/deep.js');

describe('deep.js', function () {

    it('no deep', function () {

          let data = [
              {
                  name: 1,
                  obj: {}
              }, [], 1, '1', true
          ];

          assert.deepEqual(deep(() => data), data);
    });

    it('deep object', function () {

          let data = deep((DEEP, DONE, level) => {
              return level < 2 ? {
                  name: 'a',
                  nodes: DEEP
              } : DONE;
          });

          assert.deepEqual(data, {
              name: 'a',
              nodes: {
                  name: 'a'
              }
          });
    });

    it('object in array', function () {

          let data = deep((DEEP, DONE, level, isFirst) => {
              let obj = {
                  name: 'a',
                  nodes: DEEP
              };

              if (isFirst) {
                  return [obj];
              } else {
                  return level < 3 ? obj : DONE;
              }
          });

          assert.deepEqual(data, [{
              name: 'a',
              nodes: {
                  name: 'a',
                  nodes: {
                      name: 'a'
                  }
              }
          }]);
    });
});
