// Ensure environment knows testing is occurring
process.env.mocha = true;

// Explicitly set RELEASE_ENV to production if not set (just in case)
process.env.RELEASE_ENV = process.env.RELEASE_ENV || 'production';

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
describe(`RELEASE_ENV=production`, function() {
    describe(`isQA`, function() {
        it(`is false when RELEASE_ENV=production`, function() {
            expect(isQA).to.be.false;
        });
    });
    describe(`isUAT`, function() {
        it(`is false when RELEASE_ENV=production`, function() {
            expect(isUAT).to.be.false;
        });
    });
    describe(`isReleaseEnvDev`, function() {
        it(`is false when RELEASE_ENV=production`, function() {
            expect(isReleaseEnvDev).to.be.false;
        });
    });
    describe(`isReleaseEnvProd`, function() {
        it(`is true when RELEASE_ENV=production`, function() {
            expect(isReleaseEnvProd).to.be.true;
        });
    });
    describe(`releaseEnvShort`, function() {
        it(`is 'prod' when RELEASE_ENV=production`, function() {
            expect(releaseEnvShort).to.eql(`prod`);
        });
    });
    describe(`releaseEnv`, function() {
        it(`is 'production' when RELEASE_ENV=production`, function() {
            expect(releaseEnv).to.eql(`production`);
        });
    });
});
