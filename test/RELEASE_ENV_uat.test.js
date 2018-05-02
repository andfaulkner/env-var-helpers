// Ensure environment knows testing is occurring
process.env.mocha = true;

// Explicitly set RELEASE_ENV to uat if not set (just in case)
process.env.RELEASE_ENV = process.env.RELEASE_ENV || 'uat';

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
describe(`RELEASE_ENV=uat`, function() {
    describe(`isQA`, function() {
        it(`is false when RELEASE_ENV=uat`, function() {
            expect(isQA).to.be.false;
        });
    });
    describe(`isUAT`, function() {
        it(`is true when RELEASE_ENV=uat`, function() {
            expect(isUAT).to.be.true;
        });
    });
    describe(`isReleaseEnvDev`, function() {
        it(`is false when RELEASE_ENV=uat`, function() {
            expect(isReleaseEnvDev).to.be.false;
        });
    });
    describe(`isReleaseEnvProd`, function() {
        it(`is false when RELEASE_ENV=uat`, function() {
            expect(isReleaseEnvProd).to.be.false;
        });
    });
    describe(`releaseEnvShort`, function() {
        it(`is 'uat' when RELEASE_ENV=uat`, function() {
            expect(releaseEnvShort).to.eql(`uat`);
        });
    });
    describe(`releaseEnv`, function() {
        it(`is 'uat' when RELEASE_ENV=uat`, function() {
            expect(releaseEnv).to.eql(`uat`);
        });
    });
});
