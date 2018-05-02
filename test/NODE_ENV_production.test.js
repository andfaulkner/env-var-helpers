// ensure environment knows testing is occurring
process.env.mocha = true;
console.log(`process.env.mocha:`, process.env.mocha);

// Store original process.argv
const oldProcArgs = Object.assign({}, process.argv);

/************************************** THIRD-PARTY IMPORTS ***************************************/
const { expect } = require('chai');
const sinon = require('sinon');
const mocha = require('mocha');

const fs = require('fs');
const path = require('path');
const { stderr, stdout } = require('test-console');

/*********************************** IMPORT FILES TO BE TESTED ************************************/
const envVarHelpers = require('../lib/index');
const { isDev, isProd, prodOrSecurityTest } = envVarHelpers;

/********************************************* TESTS **********************************************/
describe('NODE_ENV=production', function() {
    describe('isDev', function() {
        it('is false when NODE_ENV equals production', function() {
            expect(isDev).to.be.false;
        });
    });

    describe('isProd', function() {
        it('is true when NODE_ENV equals production', function() {
            expect(isProd).to.be.true;
        });
    });

    describe('prodOrSecurityTest', function() {
        it('is true if NODE_ENV equals production', function() {
            expect(prodOrSecurityTest).to.be.true;
        });
    });
});

// Restore original process.argv
process.argv = Object.assign({}, oldProcArgs);
