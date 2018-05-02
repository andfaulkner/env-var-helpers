// Ensure environment knows testing is occurring
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
const {isSilly, isVerbose, isDebug, isInfo, isWarn, isError, isWtf, isWTF} = envVarHelpers;

/********************************************* TESTS **********************************************/
describe('LOG_LEVEL=verbose', function() {
    describe('isSilly', function() {
        it('exists', function() {
            expect(isSilly).to.exist;
        });
        it(`is false at default LOG_LEVEL (if LOG_LEVEL not explicitly set)`, function() {
            expect(isSilly).to.be.false;
        });
    });
    describe('isVerbose', function() {
        it('exists', function() {
            expect(isVerbose).to.exist;
        });
        it(`is false at default LOG_LEVEL (if LOG_LEVEL not explicitly set)`, function() {
            expect(isVerbose).to.be.false;
        });
    });
    describe('isInfo', function() {
        it('exists', function() {
            expect(isInfo).to.exist;
        });
        it(`is true at default LOG_LEVEL (if LOG_LEVEL not explicitly set)`, function() {
            expect(isInfo).to.be.true;
        });
    });
    describe('isWarn', function() {
        it('exists', function() {
            expect(isInfo).to.exist;
        });
        it(`is true at default LOG_LEVEL (if LOG_LEVEL not explicitly set)`, function() {
            expect(isWarn).to.be.true;
        });
    });
    describe('isError', function() {
        it('exists', function() {
            expect(isError).to.exist;
        });
        it(`is true at default LOG_LEVEL (if LOG_LEVEL not explicitly set)`, function() {
            expect(isError).to.be.true;
        });
    });
    describe('isWTF', function() {
        it('exists', function() {
            expect(isWtf).to.exist;
        });
        it(`is true at default LOG_LEVEL (if LOG_LEVEL not explicitly set)`, function() {
            expect(isWTF).to.be.true;
        });
    });
});
