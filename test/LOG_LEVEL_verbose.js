// Ensure environment knows testing is occurring
process.env.mocha = true;

// Explicitly set LOG_LEVEL to verbose (just in case)
process.env.LOG_LEVEL = 'verbose';

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
    logGtEqlVerbose, logGtEqlVerbose, logGtEqlDebug, logGtEqlInfo, logGtEqlWarn, logGtEqlError,
    logGtEqlWtf, logGtEqlWTF
} = envVarHelpers;

/********************************************* TESTS **********************************************/
describe('LOG_LEVEL=verbose', function() {
    describe('logGtEqlSilly', function() {
        it('exists', function() {
            expect(logGtEqlSilly).to.exist;
        });
        it('is true when process.env.LOG_LEVEL=verbose', function() {
            expect(logGtEqlSilly).to.be.false;
        });
    });
    describe('logGtEqlVerbose', function() {
        it('exists', function() {
            expect(logGtEqlVerbose).to.exist;
        });
        it('is true when process.env.LOG_LEVEL=verbose', function() {
            expect(logGtEqlVerbose).to.be.true;
        });
    });
    describe('logGtEqlInfo', function() {
        it('exists', function() {
            expect(logGtEqlInfo).to.exist;
        });
        it('is false when process.env.LOG_LEVEL=info', function() {
            expect(logGtEqlInfo).to.be.false;
        });
    });
    describe('logGtEqlWarn', function() {
        it('exists', function() {
            expect(logGtEqlInfo).to.exist;
        });
        it('is false when process.env.LOG_LEVEL=warn', function() {
            expect(logGtEqlInfo).to.be.false;
        });
    });
    describe('logGtEqlError', function() {
        it('exists', function() {
            expect(logGtEqlError).to.exist;
        });
        it('is false when process.env.LOG_LEVEL=error', function() {
            expect(logGtEqlError).to.be.false;
        });
    });
    describe('logGtEqlWTF', function() {
        it('exists', function() {
            expect(logGtEqlWtf).to.exist;
        });
        it('is false when process.env.LOG_LEVEL=wtf', function() {
            expect(logGtEqlWtf).to.be.false;
        });
    });
});
