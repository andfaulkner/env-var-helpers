// ensure environment knows testing is occurring
process.env.mocha = true;
console.log(`mocha:`, process.env.mocha);

/************************************** THIRD-PARTY IMPORTS ***************************************/
const { expect } = require('chai');
const sinon = require('sinon');
const mocha = require('mocha');

const fs = require('fs');
const path = require('path');
const { stderr, stdout } = require('test-console');

/*********************************** IMPORT FILES TO BE TESTED ************************************/
const envVarHelpers = require('../lib/index');
const { isDev, isDevelopment, isProd, isProduction,
        logGtEqlSilly, logGtEqlVerbose, logGtEqlDebug, logGtEqlInfo, logGtEqlWarn, logGtEqlError,
        logGtEqlWtf, logGtEqlWTF,
        isVerbose, isSilly,
        isIECompatMode, isIeCompatMode
} = envVarHelpers;

console.log(`process.env.LOG_LEVEL:`, process.env.LOG_LEVEL);
console.log(`process.env.NODE_ENV:`, process.env.NODE_ENV);
console.log(`process.env.IE_COMPAT:`, process.env.IE_COMPAT);
console.log(`process.env.TEST_MODE:`, process.env.TEST_MODE);

/********************************************* TESTS **********************************************/
describe('isDev', function() {
    it('exists', function() {
        expect(isDev).to.exist;
    });
    it('is true by default', function() {
        expect(isDev).to.be.true;
    });
    it('is alias of isDevelopment', function() {
        expect(isDevelopment).to.be.true;
        expect(isDevelopment).to.eql(isDev);
    });
});

describe('isProd', function() {
    it('exists', function() {
        expect(isProd).to.exist;
    });
    it('is false by default', function() {
        expect(isProd).to.be.false;
    });
    it('is alias of isProduction', function() {
        expect(isProduction).to.be.false;
        expect(isProduction).to.eql(isProd);
    });});

describe('logGtEqlSilly', function() {
    it('exists', function() {
        expect(logGtEqlSilly).to.exist;
    });
    it('is false by default', function() {
        expect(logGtEqlSilly).to.be.false;
    });
});

describe('logGtEqlVerbose', function() {
    it('exists', function() {
        expect(logGtEqlVerbose).to.exist;
    });
    it('is false by default', function() {
        expect(logGtEqlVerbose).to.be.false;
    });
});

describe('logGtEqlDebug', function() {
    it('exists', function() {
        expect(logGtEqlDebug).to.exist;
    });
    it('is false by default', function() {
        expect(logGtEqlDebug).to.be.false;
    });
});

describe('logGtEqlInfo', function() {
    it('exists', function() {
        expect(logGtEqlInfo).to.exist;
    });
    it('is true by default', function() {
        expect(logGtEqlInfo).to.be.true;
    });
});

describe('logGtEqlWarn', function() {
    it('exists', function() {
        expect(logGtEqlWarn).to.exist;
    });
    it('is true by default', function() {
        expect(logGtEqlWarn).to.be.true;
    });
});

describe('logGtEqlError', function() {
    it('exists', function() {
        expect(logGtEqlError).to.exist;
    });
    it('is true by default', function() {
        expect(logGtEqlError).to.be.true;
    });
});

describe('logGtEqlWTF', function() {
    it('exists', function() {
        expect(logGtEqlWTF).to.exist;
    });
    it('is true by default', function() {
        expect(logGtEqlWTF).to.be.true;
    });
    it('is alias of logGtEqlWtf', function() {
        expect(logGtEqlWTF).to.eql(logGtEqlWtf);
    });
});

describe('isIECompatMode', function() {
    it('exists', function() {
        expect(isIECompatMode).to.exist;
    });
    it('is false by default', function() {
        expect(isIECompatMode).to.be.false;
    });
    it('is alias of isIeCompatMode', function() {
        expect(isIECompatMode).to.eql(isIeCompatMode);
    });
});

describe('isVerbose', function() {
    it('exists', function() {
        expect(isVerbose).to.exist;
    });
    it('is false by default', function() {
        expect(isVerbose).to.be.false;
    });
    it('is alias of logGtEqlVerbose', function() {
        expect(isVerbose).to.eql(logGtEqlVerbose);
    });
});

describe('isSilly', function() {
    it('exists', function() {
        expect(isSilly).to.exist;
    });
    it('is false by default', function() {
        expect(isSilly).to.be.false;
    });
    it('is alias of logGtEqlSilly', function() {
        expect(isSilly).to.eql(logGtEqlSilly);
    });
});