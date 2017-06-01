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

// TEST_SECURITY / SECURITY_TEST exports
const { prodOrSecurityTest } = envVarHelpers;

// IE_COMPAT exports
const { isIECompatMode, isIeCompatMode, } = envVarHelpers;

// LOG_LEVEL (long-form) property exports
const { logGtEqlSilly, logGtEqlVerbose, logGtEqlDebug, logGtEqlInfo, logGtEqlWarn,
        logGtEqlError, logGtEqlWtf, logGtEqlWTF, } = envVarHelpers;

// LOG_LEVEL (short-form) property exports
const { isSilly, isVerbose, isDebug, isInfo, isWarn, isError, isWtf, isWTF,
        isLogSilly, isLogVerbose, isLogDebug, isLogInfo, isLogWarn, isLogError, isLogWtf,
        isLogWTF } = envVarHelpers;

// AVOID_WEB exports
const { isAvoidWeb, avoidWeb, doAvoidWeb } = envVarHelpers;

// Environment exports
const { isDev, isDevelopment, isProd, isProduction } = envVarHelpers;

// Mocha exports
const { wasRunViaMocha, isMochaEnv, runViaMocha, runThruMocha, wasRunThruMocha,
        runByMocha, wasRunByMocha, loadedMochaOpts, isMocha } = envVarHelpers;

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

describe('wasRunViaMocha tests', function() {
    it('exists', function () {
        expect(wasRunViaMocha).to.exist;
    });
    it('has aliases isMochaEnv, runViaMocha, runThruMocha, wasRunThruMocha, isMocha', function () {
        expect(wasRunThruMocha).to.exist;
        expect(runThruMocha).to.exist;
        expect(runViaMocha).to.exist;
        expect(isMochaEnv).to.exist;
        expect(wasRunViaMocha).to.exist;
        expect(isMocha).to.exist;
    });
    it('is true (and all of its aliases are true) when run in a mocha script', function () {
        expect(wasRunViaMocha).to.be.true;
        expect(wasRunThruMocha).to.be.true;
        expect(runThruMocha).to.be.true;
        expect(runViaMocha).to.be.true;
        expect(isMochaEnv).to.be.true;
        expect(wasRunViaMocha).to.be.true;
        expect(isMocha).to.be.true;
    });
});

describe('isAvoidWeb tests', function() {
    it('exists', function () {
        expect(isAvoidWeb).to.exist;
    });
    it('is false by default (as are its aliases avoidWeb & doAvoidWeb)', function () {
        expect(isAvoidWeb).to.be.false;
        expect(avoidWeb).to.be.false;
        expect(doAvoidWeb).to.be.false;
    });
    it('has aliases avoidWeb, doAvoidWeb', function () {
        expect(avoidWeb).to.exist;
        expect(doAvoidWeb).to.exist;
    });
    it('has aliases avoidWeb, doAvoidWeb', function () {
        expect(avoidWeb).to.exist;
        expect(doAvoidWeb).to.exist;
    });
    it('is false by default (as are its aliases avoidWeb & doAvoidWeb)', function () {
        expect(isAvoidWeb).to.be.false;
        expect(avoidWeb).to.be.false;
        expect(doAvoidWeb).to.be.false;
    });

    // TODO refactor - use an abstraction. Below tests were created with a quick & dirty macro.
    describe('WAS_RUN_THRU_MOCHA value tests', function() {
        valsExistAndAreTrue([
            { name: 'isMocha',         value: isMocha         },
            { name: 'isMochaEnv',      value: isMochaEnv      },
            { name: 'runByMocha',      value: runByMocha      },
            { name: 'runViaMocha',     value: runViaMocha     },
            { name: 'runThruMocha',    value: runThruMocha    },
            { name: 'wasRunByMocha',   value: wasRunByMocha   },
            { name: 'wasRunViaMocha',  value: wasRunViaMocha  },
            { name: 'wasRunThruMocha', value: wasRunThruMocha },
            { name: 'loadedMochaOpts', value: loadedMochaOpts },
        ]);
    });
});

function propExists(prop) {
    it('exists and gets exported', function() {
        expect(prop).to.exist
    });
}

function propIsTrue(prop) {
    it('is set to true (current process was launched by Mocha)', function() {
        expect(prop).to.exist
    });
}

function valsExistAndAreTrue(valObjArr) {
    valObjArr.forEach(valObj => {
        describe(valObj['name'], function() {
            propExists(valObj['value']);
            propIsTrue(valObj['value']);
        });
    });
}