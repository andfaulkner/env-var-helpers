// Ensure environment knows testing is occurring
process.env.mocha = true;

// Explicitly set LOG_LEVEL to trace if not set (just in case)
process.env.LOG_LEVEL = process.env.LOG_LEVEL || 'trace';

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
describe('LOG_LEVEL=trace', function() {
    describe('isTrace', function() {
        it('is true when process.env.LOG_LEVEL=trace', function() {
            expect(isTrace).to.be.true;
        });
    });
    describe('isSilly', function() {
        it('is true when process.env.LOG_LEVEL=trace', function() {
            expect(isSilly).to.be.true;
        });
    });
    describe('isVerbose', function() {
        it('is true when process.env.LOG_LEVEL=trace', function() {
            expect(isVerbose).to.be.true;
        });
    });
    describe('isInfo', function() {
        it('is true when process.env.LOG_LEVEL=trace', function() {
            expect(isInfo).to.be.true;
        });
    });
    describe('isWarn', function() {
        it('is true when process.env.LOG_LEVEL=trace', function() {
            expect(isWarn).to.be.true;
        });
    });
    describe('isError', function() {
        it('is true when process.env.LOG_LEVEL=trace', function() {
            expect(isError).to.be.true;
        });
    });
    describe('isWTF', function() {
        it('is true when process.env.LOG_LEVEL=trace', function() {
            expect(isWtf).to.be.true;
        });
    });
});
