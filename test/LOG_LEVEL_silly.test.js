// ensure environment knows testing is occurring
process.env.mocha = true;

/************************************** THIRD-PARTY IMPORTS ***************************************/
const {expect} = require('chai');
const sinon = require('sinon');
const mocha = require('mocha');

const fs = require('fs');
const path = require('path');
const {stderr, stdout} = require('test-console');

/*********************************** IMPORT FILES TO BE TESTED ************************************/
const envVarHelpers = require('../lib/index');
const {isSilly, isVerbose, isDebug, isInfo, isWarn, isError, isWTF, isWtf} = envVarHelpers;

/********************************************* TESTS **********************************************/
describe('LOG_LEVEL=silly', function() {
    describe('isSilly', function() {
        it('exists', function() {
            expect(isSilly).to.exist;
        });
        it('is true when process.env.LOG_LEVEL=silly', function() {
            expect(isSilly).to.be.true;
        });
    });
    describe('isVerbose', function() {
        it('exists', function() {
            expect(isVerbose).to.exist;
        });
        it('is true when process.env.LOG_LEVEL=silly', function() {
            expect(isVerbose).to.be.true;
        });
    });
});
