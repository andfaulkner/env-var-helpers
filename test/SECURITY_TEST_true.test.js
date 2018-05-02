// ensure environment knows testing is occurring
process.env.mocha = true;
console.log(`process.env.mocha:`, process.env.mocha);

// Store original process.argv
const oldProcArgs = Object.assign({}, process.argv);

/************************************** THIRD-PARTY IMPORTS ***************************************/
const {expect} = require('chai');
const sinon = require('sinon');
const mocha = require('mocha');

const fs = require('fs');
const path = require('path');
const {stderr, stdout} = require('test-console');

/*********************************** IMPORT FILES TO BE TESTED ************************************/
const envVarHelpers = require('../lib/index');
const {isDev, isProd, prodOrSecurityTest} = envVarHelpers;

/********************************************* TESTS **********************************************/
describe('SECURITY_TEST=true', function() {
    describe('prodOrSecurityTest', function() {
        it('is true if SECURITY_TEST equals true (when NODE_ENV is undefined', function() {
            expect(prodOrSecurityTest).to.be.true;
        });
    });
});

// Restore original process.argv
process.argv = Object.assign({}, oldProcArgs);
