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
        isIECompatMode, isIeCompatMode,
        isSilly, isVerbose, isDebug, isInfo, isWarn, isError, isWtf, isWTF,
        isLogSilly, isLogVerbose, isLogDebug, isLogInfo, isLogWarn, isLogError, isLogWtf, isLogWTF,
        prodOrSecurityTest
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

describe('isSilly + other aliases', function() {
    it('exists', function() {
        expect(isSilly).to.exist;
        expect(isLogSilly).to.exist;
    });
    it('is false by default', function() {
        expect(isSilly).to.be.false;
        expect(isLogSilly).to.be.false;
    });
    it('is alias of logGtEqlSilly', function() {
        expect(isSilly).to.eql(logGtEqlSilly);
        expect(isLogSilly).to.eql(logGtEqlSilly);
    });
});

describe('isVerbose + other aliases', function() {
    it('exists', function() {
        expect(isVerbose).to.exist;
        expect(isLogVerbose).to.exist;
    });
    it('is false by default', function() {
        expect(isVerbose).to.be.false;
        expect(isLogVerbose).to.be.false;
    });
    it('is alias of logGtEqlVerbose', function() {
        expect(isVerbose).to.eql(logGtEqlVerbose);
        expect(isLogVerbose).to.eql(logGtEqlVerbose);
    });
});

describe('isDebug', function() {
    it('exists', function() {
        expect(isDebug).to.exist;
        expect(isLogDebug).to.exist;
    });
    it('is false by default', function() {
        expect(isDebug).to.be.false;
        expect(isLogDebug).to.be.false;
    });
    it('is alias of logGtEqlDebug', function() {
        expect(isDebug).to.eql(logGtEqlDebug);
        expect(isLogDebug).to.eql(logGtEqlDebug);
    });
});

describe('isInfo', function() {
    it('exists', function() {
        expect(isInfo).to.exist;
        expect(isLogInfo).to.exist;
    });
    it('is true by default', function() {
        expect(isInfo).to.be.true;
        expect(isLogInfo).to.be.true;
    });
    it('is alias of logGtEqlInfo', function() {
        expect(isInfo).to.eql(logGtEqlInfo);
        expect(isLogInfo).to.eql(logGtEqlInfo);
    });
});

describe('isWarn', function() {
    it('exists', function() {
        expect(isWarn).to.exist;
        expect(isLogWarn).to.exist;
    });
    it('is true by default', function() {
        expect(isWarn).to.be.true;
        expect(isLogWarn).to.be.true;
    });
    it('is alias of logGtEqlWarn', function() {
        expect(isWarn).to.eql(logGtEqlWarn);
        expect(isLogWarn).to.eql(logGtEqlWarn);
    });
});

describe('isError', function() {
    it('exists', function() {
        expect(isError).to.exist;
        expect(isLogError).to.exist;
    });
    it('is true by default', function() {
        expect(isError).to.be.true;
        expect(isLogError).to.be.true;
    });
    it('is alias of logGtEqlError', function() {
        expect(isError).to.eql(logGtEqlError);
        expect(isLogError).to.eql(logGtEqlError);
    });
});

describe('isWTF', function() {
    it('exists', function() {
        expect(isWTF).to.exist;
        expect(isWtf).to.exist;
        expect(isLogWTF).to.exist;
        expect(isLogWtf).to.exist;
    });
    it('is true by default', function() {
        expect(isWTF).to.be.true;
        expect(isWtf).to.be.true;
        expect(isLogWTF).to.be.true;
        expect(isLogWtf).to.be.true;
    });
    it('is alias of logGtEqlWTF', function() {
        expect(isWTF).to.eql(logGtEqlWTF);
        expect(isWtf).to.eql(logGtEqlWTF);
        expect(isLogWTF).to.eql(logGtEqlWTF);
        expect(isLogWtf).to.eql(logGtEqlWTF);
    });
});

describe('prodOrSecurityTest', function() {
    it('exists', function() {
        expect(prodOrSecurityTest).to.exist;
    });
    it('is false by default', function() {
        console.log("process.env.NODE_ENV:");
        console.log(process.env.NODE_ENV);
        console.log("process.env.SECURITY_TEST:");
        console.log(process.env.SECURITY_TEST);
        expect(prodOrSecurityTest).to.be.false;
    });
});
