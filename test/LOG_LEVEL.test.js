// Ensure environment knows testing is occurring
process.env.mocha = true;

// Explicitly set LOG_LEVEL to verbose (just in case)
process.env.LOG_LEVEL = 'verbose';

/************************************** THIRD-PARTY IMPORTS ***************************************/
const {expect} = require('chai');
const sinon = require('sinon');
const mocha = require('mocha');

const fs = require('fs');
const path = require('path');
const {stderr, stdout} = require('test-console');

/*********************************** IMPORT FILES TO BE TESTED ************************************/
const envVarHelpers = require('../lib/index');
const {isSilly, isVerbose, isDebug, isInfo, isWarn, isError, isWtf, isWTF} = envVarHelpers;

/********************************************* TESTS **********************************************/
describe('LOG_LEVEL=verbose', function() {
    describe('isSilly', function() {
        it('exists', function() {
            expect(isSilly).to.exist;
        });
    });
    describe('isVerbose', function() {
        it('exists', function() {
            expect(isVerbose).to.exist;
        });
    });
    describe('isInfo', function() {
        it('exists', function() {
            expect(isInfo).to.exist;
        });
    });
    describe('isWarn', function() {
        it('exists', function() {
            expect(isInfo).to.exist;
        });
    });
    describe('isError', function() {
        it('exists', function() {
            expect(isError).to.exist;
        });
    });
    describe('isWTF', function() {
        it('exists', function() {
            expect(isWtf).to.exist;
        });
    });
});
