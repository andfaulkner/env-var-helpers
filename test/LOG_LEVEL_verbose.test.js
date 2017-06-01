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

    describe('shorthand exports to test both log level & if current process ' +
             'launched by mocha', function()
    {
        it('has isVerboseMocha function', function() {
            expect(isVerboseMocha).to.exist;
        });
        it('sets isVerboseMocha to true', function() {
            expect(isVerboseMocha).to.be.true;
        });
        it('has isVerboseTest function', function() {
            expect(isVerboseTest).to.exist;
        });
        it('sets isVerboseTest to true', function() {
            expect(isVerboseTest).to.be.true;
        });
        it('has isVTest function', function() {
            expect(isVTest).to.exist;
        });
        it('sets isVTest to true', function() {
            expect(isVTest).to.be.true;
        });
        it('has isVMocha function', function() {
            expect(isVMocha).to.exist;
        });
        it('sets isVMocha to true', function() {
            expect(isVMocha).to.be.true;
        });
        it('has isMochaVerbose function', function() {
            expect(isMochaVerbose).to.exist;
        });
        it('sets isMochaVerbose to true', function() {
            expect(isMochaVerbose).to.be.true;
        });
        it('has isTestVerbose function', function() {
            expect(isTestVerbose).to.exist;
        });
        it('sets isTestVerbose to true', function() {
            expect(isTestVerbose).to.be.true;
        });
        it('has isMochaV function', function() {
            expect(isMochaV).to.exist;
        });
        it('sets isMochaV to true', function() {
            expect(isMochaV).to.be.true;
        });
        it('has isTestV function', function() {
            expect(isTestV).to.exist;
        });
        it('sets isTestV to true', function() {
            expect(isTestV).to.be.true;
        });

        it('has isDebugMocha function', function() {
            expect(isDebugMocha).to.exist;
        });
        it('sets isDebugMocha to true', function() {
            expect(isDebugMocha).to.be.true;
        });
        it('has isDebugTest function', function() {
            expect(isDebugTest).to.exist;
        });
        it('sets isDebugTest to true', function() {
            expect(isDebugTest).to.be.true;
        });
        it('has isMochaDebug function', function() {
            expect(isMochaDebug).to.exist;
        });
        it('sets isMochaDebug to true', function() {
            expect(isMochaDebug).to.be.true;
        });
        it('has isTestDebug function', function() {
            expect(isTestDebug).to.exist;
        });
        it('sets isTestDebug to true', function() {
            expect(isTestDebug).to.be.true;
        });

        // isSillyMocha & friends should always be false with LOG_LEVEL=verbose
        it('has isSillyMocha function', function() {
            expect(isSillyMocha).to.exist;
        });
        it('sets isSillyMocha to false', function() {
            expect(isSillyMocha).to.be.false;
        });
        it('has isSillyTest function', function() {
            expect(isSillyTest).to.exist;
        });
        it('sets isSillyTest to false', function() {
            expect(isSillyTest).to.be.false;
        });
        it('has isMochaSilly function', function() {
            expect(isMochaSilly).to.exist;
        });
        it('sets isMochaSilly to false', function() {
            expect(isMochaSilly).to.be.false;
        });
        it('has isTestSilly function', function() {
            expect(isTestSilly).to.exist;
        });
        it('sets isTestSilly to false', function() {
            expect(isTestSilly).to.be.false;
        });
    });
});
