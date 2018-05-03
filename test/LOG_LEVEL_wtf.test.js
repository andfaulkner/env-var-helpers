// Ensure environment knows testing is occurring
process.env.mocha = true;

// Explicitly set LOG_LEVEL to wtf if not set (just in case)
process.env.LOG_LEVEL = process.env.LOG_LEVEL || 'wtf';

/************************************** THIRD-PARTY IMPORTS ***************************************/
const {expect} = require('chai');
const sinon = require('sinon');
const mocha = require('mocha');

const fs = require('fs');
const path = require('path');
const {stderr, stdout} = require('test-console');

/*********************************** IMPORT FILES TO BE TESTED ************************************/
const envVarHelpers = require('../lib/index');
const {isTrace, isSilly, isVerbose, isDebug, isInfo, isWarn, isError, isWtf, isWTF} = envVarHelpers;

/********************************************* TESTS **********************************************/
describe('LOG_LEVEL=wtf', function() {
    describe('isTrace', function() {
        it('is false when process.env.LOG_LEVEL=wtf', function() {
            expect(isTrace).to.be.false;
        });
    });
    describe('isSilly', function() {
        it('is false when process.env.LOG_LEVEL=wtf', function() {
            expect(isSilly).to.be.false;
        });
    });
    describe('isVerbose', function() {
        it('is false when process.env.LOG_LEVEL=wtf', function() {
            expect(isVerbose).to.be.false;
        });
    });
    describe('isDebug', function() {
        it('is false when process.env.LOG_LEVEL=wtf', function() {
            expect(isDebug).to.be.false;
        });
    });
    describe('isInfo', function() {
        it('is false when process.env.LOG_LEVEL=wtf', function() {
            expect(isInfo).to.be.false;
        });
    });
    describe('isWarn', function() {
        it('is false when process.env.LOG_LEVEL=wtf', function() {
            expect(isWarn).to.be.false;
        });
    });
    describe('isError', function() {
        it('is false when process.env.LOG_LEVEL=wtf', function() {
            expect(isError).to.be.false;
        });
    });
    describe('isWTF', function() {
        it('is true when process.env.LOG_LEVEL=wtf', function() {
            expect(isWtf).to.be.true;
        });
    });
});
