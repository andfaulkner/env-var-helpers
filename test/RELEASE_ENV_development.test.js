// Ensure environment knows testing is occurring
process.env.mocha = true;

// Explicitly set RELEASE_ENV to development if not set (just in case)
process.env.RELEASE_ENV = process.env.RELEASE_ENV || 'development';

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
describe(`RELEASE_ENV=development`, function() {
    describe(`isQA`, function() {
        it(`is false when RELEASE_ENV=development`, function() {
            expect(isQA).to.be.false;
        });
    });
    describe(`isUAT`, function() {
        it(`is false when RELEASE_ENV=development`, function() {
            expect(isUAT).to.be.false;
        });
    });
    describe(`isReleaseEnvDev`, function() {
        it(`is true when RELEASE_ENV=development`, function() {
            expect(isReleaseEnvDev).to.be.true;
        });
    });
    describe(`isReleaseEnvProd`, function() {
        it(`is false when RELEASE_ENV=development`, function() {
            expect(isReleaseEnvProd).to.be.false;
        });
    });
    describe(`releaseEnvShort`, function() {
        it(`is 'prod' when RELEASE_ENV=development`, function() {
            expect(releaseEnvShort).to.eql(`prod`);
        });
    });
    describe(`releaseEnv`, function() {
        it(`is 'development' when RELEASE_ENV=development`, function() {
            expect(releaseEnv).to.eql(`development`);
        });
    });
});
