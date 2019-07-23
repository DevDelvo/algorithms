const  assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const repeatedNTimes = require("../repeatedNtimes");

describe('Basic Mocha String Test', function () {
    it('should return number of characters in a string', function () {
        assert.equal("Hello".length, 5);
    });
    it('should return first character of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});

describe('repeatedNTimes leetcode test', function() {
    it('should return element returned N times', function() {
        const test1 = repeatedNTimes([1,2,3,3]);
        test1.should.equal(3);
    })
})
