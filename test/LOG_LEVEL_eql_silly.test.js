// ensure environment knows testing is occurring
process.env.mocha = true;

/************************************** THIRD-PARTY IMPORTS ***************************************/
const { expect } = require('chai');
const sinon = require('sinon');
const mocha = require('mocha');

const fs = require('fs');
const path = require('path');
const { stderr, stdout } = require('test-console');

/*********************************** IMPORT FILES TO BE TESTED ************************************/
const envVarHelpers = require('../lib/index');
const {
    logGtEqlSilly, logGtEqlVerbose, logGtEqlDebug, logGtEqlInfo, logGtEqlWarn, logGtEqlError,
    logGtEqlWtf, logGtEqlWTF
} = envVarHelpers;

/********************************************* TESTS **********************************************/
describe('LOG_LEVEL=silly', function() {
    describe('logGtEqlSilly', function() {
        it('exists', function() {
            expect(logGtEqlSilly).to.exist;
        });
        it('is true when process.env.LOG_LEVEL=silly', function() {
            expect(logGtEqlSilly).to.be.true;
        });
    });
    describe('logGtEqlVerbose', function() {
        it('exists', function() {
            expect(logGtEqlVerbose).to.exist;
        });
        it('is true when process.env.LOG_LEVEL=silly', function() {
            expect(logGtEqlVerbose).to.be.true;
        });
    });
});
