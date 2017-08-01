"use strict";

var path = require('path');
var Sassaby = require('sassaby');

describe('fizzbuzz', function() {
    var file = path.resolve(__dirname, '../fizzbuzz.scss');
    var sassaby = new Sassaby(file);
    var isfizzbuzz = sassaby.includedMixin('isfizzbuzz'); //sut
    
    describe('IsFizzBuzz_Given number 1', function() {
        it('Should set content to number', function() {      
            isfizzbuzz.calledWithArgs(1).equals('content : 1');
        });
    });
    
    describe('IsFizzBuzz_Given number 2', function() {
        it('Should set content to number', function() {
            isfizzbuzz.calledWithArgs(2).equals('content : 2');
        });
    });
    
    describe('IsFizzBuzz_Given number 3', function() {
        it('Should set content to fizz', function() {
            isfizzbuzz.calledWithArgs(3).equals('content : \"fizz\"');
        });
    });
    
    describe('IsFizzBuzz_Given number 4', function() {
        it('Should set content to number', function() {
            isfizzbuzz.calledWithArgs(4).equals('content : 4');
        });
    });
    
    describe('IsFizzBuzz_Given number 5', function() {
        it('Should set content to buzz', function() {
            isfizzbuzz.calledWithArgs(5).equals('content : \"buzz\"');
        });
    });
    
    describe('IsFizzBuzz_Given number divisible by 3', function() {
        it('Should set content to fizz', function() {
            isfizzbuzz.calledWithArgs(6).equals('content : \"fizz\"');
        });
    });
    
    describe('IsFizzBuzz_Given number divisible by 5', function() {
        it('Should set content to buzz', function() {
            isfizzbuzz.calledWithArgs(10).equals('content : \"buzz\"');
        });
    });
    
    describe('IsFizzBuzz_Given number divisible by both 3 and 5', function() {
        it('Should set content to fizzbuzz', function() {
            isfizzbuzz.calledWithArgs(15).equals('content : \"fizzbuzz\"');
        });
    });
});