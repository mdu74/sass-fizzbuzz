"use strict";

var path = require('path');
var Sassaby = require('sassaby');

describe('fizzbuzz', function() {
    var file = path.resolve(__dirname, '../fizzbuzz.scss');
    var sassaby = new Sassaby(file);
    var isfizzbuzz = sassaby.includedMixin('isfizzbuzz'); //sut
        
    describe('IsFizzBuzz_Given number not divisible by 3 or 5', function() {
        it('Should set content to number', function() {
            var notDivisibleByThreeOrFiveArray = [1, 2, 4, 7, 8];
            notDivisibleByThreeOrFiveArray.forEach(function(numberNotDivisibleByThreeOrFive) {
                //---------------Set up test pack-------------------
                var input = numberNotDivisibleByThreeOrFive;
                var expected = 'content :' + numberNotDivisibleByThreeOrFive;
                //---------------Execute Test ----------------------
                var result = isfizzbuzz.calledWithArgs(input);
                //---------------Test Result -----------------------
                result.equals(expected);
            });
        });
    });
    
    describe('IsFizzBuzz_Given number divisible by 3', function() {
        it('Should set content to fizz', function() {
            var divisibleByThreeArray = [3, 6, 9];
            divisibleByThreeArray.forEach(function(numberDivisibleByThree) {
                //---------------Set up test pack-------------------
                var input = numberDivisibleByThree;
                var expected = 'content : \"fizz\"';
                //---------------Execute Test ----------------------
                var result = isfizzbuzz.calledWithArgs(input);
                //---------------Test Result -----------------------
                result.equals(expected);
            });
        });
    });
    
    describe('IsFizzBuzz_Given number divisible by 5', function() {
        it('Should set content to buzz', function() {
            var divisibleByFiveArray = [5, 10, 20];
            divisibleByFiveArray.forEach(function(numberDivisibleByFive) {
                //---------------Set up test pack-------------------
                var input = numberDivisibleByFive;
                var expected = 'content : \"buzz\"';
                //---------------Execute Test ----------------------
                var result = isfizzbuzz.calledWithArgs(input);
                //---------------Test Result -----------------------
                result.equals(expected);
            });
        });
    });
    
    describe('IsFizzBuzz_Given number divisible by both 3 and 5', function() {
        it('Should set content to fizzbuzz', function() {
            var divisibleByBothThreeAndFiveArray = [15, 30, 75];
            divisibleByBothThreeAndFiveArray.forEach(function(numberDivisibleByBothThreeFive) {
                //---------------Set up test pack-------------------
                var input = numberDivisibleByBothThreeFive;
                var expected = 'content : \"fizzbuzz\"';
                //---------------Execute Test ----------------------
                var result = isfizzbuzz.calledWithArgs(input);
                //---------------Test Result -----------------------
                result.equals(expected);
            });
        });
    });
});