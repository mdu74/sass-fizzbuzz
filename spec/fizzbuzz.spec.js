"use strict";

var path = require('path');
var Sassaby = require('sassaby');

describe('fizzbuzz', function() {
    var file = path.resolve(__dirname, '../fizzbuzz.scss');
    var sassaby = new Sassaby(file);
    var isfizzbuzz = sassaby.includedMixin('isfizzbuzz'); //sut
    
    describe('IsFizzBuzz_Given number 1', function() {
        it('Should set content to number', function() {
            //---------------Set up test pack-------------------
            var input = 1;
            //---------------Execute Test ----------------------
            var result = isfizzbuzz.calledWithArgs(input);
            //---------------Test Result -----------------------
            result.equals('content : 1');
        });
    });
    
    describe('IsFizzBuzz_Given number 2', function() {
        it('Should set content to number', function() {
            //---------------Set up test pack-------------------
            var input = 2;
            //---------------Execute Test ----------------------
            var result = isfizzbuzz.calledWithArgs(input);
            //---------------Test Result -----------------------
            result.equals('content : 2');
        });
    });
    
    describe('IsFizzBuzz_Given number divisible by 3', function() {
        it('Should set content to fizz', function() {
            var divisibleByThreeArray = [3, 6, 9];
            divisibleByThreeArray.forEach(function(numberDivisibleByThree) {
                //---------------Set up test pack-------------------
                var input = numberDivisibleByThree;
                //---------------Execute Test ----------------------
                var result = isfizzbuzz.calledWithArgs(input);
                //---------------Test Result -----------------------
                result.equals('content : \"fizz\"');
            });
        });
    });
    
    describe('IsFizzBuzz_Given number 4', function() {
        it('Should set content to number', function() {
            //---------------Set up test pack-------------------
            var input = 4;
            //---------------Execute Test ----------------------
            var result = isfizzbuzz.calledWithArgs(input);
            //---------------Test Result -----------------------
            result.equals('content : 4');
        });
    });
    
    describe('IsFizzBuzz_Given number 5', function() {
        it('Should set content to buzz', function() {
            var divisibleByFiveArray = [5, 10, 20];
            divisibleByFiveArray.forEach(function(numberDivisibleByFive) {
                //---------------Set up test pack-------------------
                var input = numberDivisibleByFive;
                //---------------Execute Test ----------------------
                var result = isfizzbuzz.calledWithArgs(input);
                //---------------Test Result -----------------------
                result.equals('content : \"buzz\"');
            });
        });
    });
    
    describe('IsFizzBuzz_Given number divisible by both 3 and 5', function() {
        it('Should set content to fizzbuzz', function() {
            var divisibleByBothThreeAndFiveArray = [15, 30, 75];
            divisibleByBothThreeAndFiveArray.forEach(function(numberDivisibleByBothThreeFive) {
                //---------------Set up test pack-------------------
                var input = numberDivisibleByBothThreeFive;
                //---------------Execute Test ----------------------
                var result = isfizzbuzz.calledWithArgs(input);
                //---------------Test Result -----------------------
                result.equals('content : \"fizzbuzz\"');
            });
        });
    });
});