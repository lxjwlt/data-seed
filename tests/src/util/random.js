
'use strict';

const assert = require('chai').assert;
const random = require('../../../src/util/random.js');

describe('random.js', function () {

    describe('#', () => {
        it('default arguments', () => {
            let num = random();
            assert.isNumber(num);
            assert.notStrictEqual(String(num).match(/\./), null);
        });

        it('random format', () => {
            let str = `name: ${random.letter().repeat(3)} id: ${String(random.int()).repeat(4)}`;

            assert.match(str, /^name:\s[a-z]{3}\sid:\s[0-9]{4}$/);
        });
    });

    describe('#int', () => {
        it('default arguments', () => {
            let num = random.int();
            assert.isNumber(num);
        });

        it('should be int number', () => {
            let num = random.int(3, 10);
            assert.isNumber(num);
            assert.strictEqual(String(num).match(/\./), null);
        });

        it('single number', () => {
            let num = random.int(10, 10);
            assert.strictEqual(num, 10);
        });

        it('single negative number', () => {
            let num = random.int(-10, -10);
            assert.strictEqual(num, -10);
        });
    });

    describe('#float', () => {
        it('default arguments', () => {
            let num = random.float();
            assert.isNumber(num);
        });

        it('should be float number', () => {
            let num = random.float(3, 10);
            assert.isNumber(num);
            assert.notStrictEqual(String(num).match(/\./), null);
        });
    });

    describe('#letter', () => {
        it('default arguments', () => {
            let letter = random.letter();
            let code = letter.charCodeAt(0);

            assert.isString(letter);
            assert.isTrue(code >= 97 && code <= 122);
        });

        it('uppercase', () => {
            let letter = random.letter('A', 'B');

            assert.isTrue(letter === 'A' || letter === 'B');
        });

        it('uppercase and lowercase', () => {
            let letter = random.letter('a', 'B');

            assert.isTrue(letter === 'a' || letter === 'b');
        });

        it('should be one letter', () => {
            let letter = random.letter('b', 'b');

            assert.strictEqual(letter, 'b');
        });
    });

    describe('#array', () => {

        it('multi items', () => {
            let num = random.array([1, 2]);

            assert.isTrue(num === 1 || num === 2);
        });

        it('one item', () => {
            let letter = random.array(['a']);

            assert.strictEqual(letter, 'a');
        });

    });

    describe('#one', () => {

        it('multi items', () => {
            let num = random.one(1, 2, 3);

            assert.include([1, 2, 3], num);
        });

        it('one item', () => {
            let letter = random.one('a');

            assert.strictEqual(letter, 'a');
        });

    });

    describe('#chance', () => {

        it('multi items', () => {
            let numList = [];

            for (let i = 0; i < 1000; i++) {
                numList.push(random.chance({
                    '0.1': 1,
                    '0.7': 3,
                    '0.2': 2
                }));
            }

            assert.include(numList, 1);
            assert.include(numList, 2);
            assert.include(numList, 3);
        });

        it('percent', () => {
            let num = random.chance({
                '200%': 1
            });

            assert.strictEqual(num, 1);
        });

        it('value is function', () => {
            let num = random.chance({
                '1': () => {
                    return 2;
                }
            });

            assert.strictEqual(num, 2);
        });

    });
});
