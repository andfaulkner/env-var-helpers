// ensure environment knows testing is occurring
process.env.mocha = true;

// Explicitly set LOG_LEVEL to silly if not set (just in case)
process.env.LOG_LEVEL = process.env.LOG_LEVEL || 'silly';

/************************************** THIRD-PARTY IMPORTS ***************************************/
const {expect} = require('chai');
const sinon = require('sinon');
const mocha = require('mocha');

const fs = require('fs');
const path = require('path');
const {stderr, stdout} = require('test-console');

/*********************************** IMPORT FILES TO BE TESTED ************************************/
const envVarHelpers = require('../lib/index');
const {isTrace, isSilly, isVerbose, isDebug, isInfo, isWarn, isError, isWTF, isWtf} = envVarHelpers;

/********************************************* TESTS **********************************************/
describe('LOG_LEVEL=silly', function() {
    describe('isTrace', function() {
        it('is true when process.env.LOG_LEVEL=silly', function() {
            expect(isTrace).to.be.false;
        });
    });
    describe('isSilly', function() {
        it('is true when process.env.LOG_LEVEL=silly', function() {
            expect(isSilly).to.be.true;
        });
    });
    describe('isVerbose', function() {
        it('is true when process.env.LOG_LEVEL=silly', function() {
            expect(isVerbose).to.be.true;
        });
    });
    describe('isDebug', function() {
        it('is true when process.env.LOG_LEVEL=silly', function() {
            expect(isDebug).to.be.true;
        });
    });
    describe('isInfo', function() {
        it('is true when process.env.LOG_LEVEL=silly', function() {
            expect(isInfo).to.be.true;
        });
    });
    describe('isError', function() {
        it('is true when process.env.LOG_LEVEL=silly', function() {
            expect(isError).to.be.true;
        });
    });
    describe('isWtf', function() {
        it('is true when process.env.LOG_LEVEL=silly', function() {
            expect(isWtf).to.be.true;
        });
    });
});
