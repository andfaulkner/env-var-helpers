// Ensure environment knows testing is occurring
process.env.mocha = true;

// Explicitly set RELEASE_ENV to qa if not set (just in case)
process.env.RELEASE_ENV = process.env.RELEASE_ENV || 'qa';

/************************************** THIRD-PARTY IMPORTS ***************************************/
const {expect} = require('chai');
const sinon = require('sinon');
const mocha = require('mocha');

const fs = require('fs');
const path = require('path');
const {stderr, stdout} = require('test-console');

/*********************************** IMPORT FILES TO BE TESTED ************************************/
const envVarHelpers = require('../lib/index');
const {isQA, isUAT, isReleaseEnvDev, isReleaseEnvProd, releaseEnvShort, releaseEnv} = envVarHelpers;

/********************************************* TESTS **********************************************/
describe(`RELEASE_ENV=qa`, function() {
    describe(`isQA`, function() {
        it(`is true when RELEASE_ENV=qa`, function() {
            expect(isQA).to.be.true;
        });
    });
    describe(`isUAT`, function() {
        it(`is false when RELEASE_ENV=qa`, function() {
            expect(isUAT).to.be.false;
        });
    });
    describe(`isReleaseEnvDev`, function() {
        it(`is false when RELEASE_ENV=qa`, function() {
            expect(isReleaseEnvDev).to.be.false;
        });
    });
    describe(`isReleaseEnvProd`, function() {
        it(`is false when RELEASE_ENV=qa`, function() {
            expect(isReleaseEnvProd).to.be.false;
        });
    });
    describe(`releaseEnvShort`, function() {
        it(`is 'qa' when RELEASE_ENV=qa`, function() {
            expect(releaseEnvShort).to.eql(`qa`);
        });
    });
    describe(`releaseEnv`, function() {
        it(`is 'qa' when RELEASE_ENV=qa`, function() {
            expect(releaseEnv).to.eql(`qa`);
        });
    });
});
