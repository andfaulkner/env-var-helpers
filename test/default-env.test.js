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
const { prodOrSecurityTest, isProdOrSecurityTest } = envVarHelpers;

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

// NODE_ENV (environment) exports
const { isDev, isDevelopment, isProd, isProduction } = envVarHelpers;

// LOADED_MOCHA_OPTS exports (true if current process launched by Mocha)
const { wasRunViaMocha, isMochaEnv, runViaMocha, runThruMocha, wasRunThruMocha,
        runByMocha, wasRunByMocha, loadedMochaOpts, isMocha } = envVarHelpers;

// RELEASE_ENV (release environment) exports
const { releaseEnv, releaseEnvironment } = envVarHelpers;

// UAT release environment helpers
const { isReleaseEnvUat, isReleaseEnvUAT, isUat, isUAT } = envVarHelpers;

// Directly log the environment variables in verbose or silly mode.
const { LOG_LEVEL } = process.env;
if (LOG_LEVEL && (LOG_LEVEL === 'verbose' || LOG_LEVEL === 'silly')) {
    console.log(`\n\n******* Environment variables checked/used by library props *******`);
    console.log(`process.env.LOG_LEVEL:`, process.env.LOG_LEVEL);
    console.log(`process.env.NODE_ENV:`, process.env.NODE_ENV);
    console.log(`process.env.IE_COMPAT:`, process.env.IE_COMPAT);
    console.log(`process.env.TEST_MODE:`, process.env.TEST_MODE);
    console.log(`process.env.AVOID_WEB:`, process.env.AVOID_WEB);
    console.log(`process.env.LOADED_MOCHA_OPTS:`, process.env.LOADED_MOCHA_OPTS);
    console.log(`process.env.SECURITY_TEST:`, process.env.SECURITY_TEST);
    console.log(`process.env.TEST_SECURITY:`, process.env.TEST_SECURITY);
    console.log(`*******************************************************************\n\n`);
}

/********************************************* TESTS **********************************************/
describe('isDevelopment (and aliases) :: ', function() {
    valsExistAndAreTrue([
        { name: 'isDev', value: isDev },
        { name: 'isDevelopment', value: isDevelopment }
    ], null, { isDevelopment });
});

describe('isProduction (and aliases) :: ', function() {
    valsExistAndAreFalse([
        { name: 'isProd', value: isProd },
        { name: 'isProd', value: isProduction }
    ], null, { isProduction });
});

describe('logGtEqlSilly (and aliases) :: ', function() {
    valsExistAndAreFalse([{ name: 'logGtEqlSilly', value: logGtEqlSilly }]);
});

describe('logGtEqlVerbose (and aliases) :: ', function() {
    valsExistAndAreFalse([{ name: 'logGtEqlVerbose', value: logGtEqlVerbose }]);
});

describe('logGtEqlDebug (and aliases) :: ', function() {
    valsExistAndAreFalse([{ name: 'logGtEqlDebug', value: logGtEqlDebug }]);
});

describe('logGtEqlInfo (and aliases) :: ', function() {
    valsExistAndAreTrue([{ name: 'logGtEqlInfo', value: logGtEqlInfo }]);
});

describe('logGtEqlWarn (and aliases) :: ', function() {
    valsExistAndAreTrue([{ name: 'logGtEqlWarn', value: logGtEqlWarn }]);
});

describe('logGtEqlError (and aliases) :: ', function() {
    valsExistAndAreTrue([{ name: 'logGtEqlError', value: logGtEqlError }]);
});

describe('logGtEqlWTF :: ', function() {
    valsExistAndAreTrue([
        { name: 'logGtEqlWtf', value: logGtEqlWtf },
        { name: 'logGtEqlWTF', value: logGtEqlWTF }
    ], null, { logGtEqlWtf });
});

describe('isIECompatMode (and alias isIeCompatMode) :: ', function() {
    valsExistAndAreFalse([
        { name: 'isIECompatMode', value: isIECompatMode },
        { name: 'isIECompatMode', value: isIECompatMode }
    ], null, { isIECompatMode });
});

describe('isSilly (and alias isLogSilly) :: ', function() {
    valsExistAndAreFalse([
        { name: 'isSilly', value: isSilly },
        { name: 'isLogSilly', value: isLogSilly }
    ], '(since LOG_LEVEL value defaults to info)', { logGtEqlSilly });
});

describe('isVerbose (and alias isLogVerbose) :: ', function() {
    valsExistAndAreFalse([
        { name: 'isVerbose', value: isVerbose },
        { name: 'isLogVerbose', value: isLogVerbose }
    ], '(since LOG_LEVEL value defaults to info)', { logGtEqlVerbose });
});

describe('isDebug (and alias isLogDebug) :: ', function() {
    valsExistAndAreFalse([
        { name: 'isDebug', value: isDebug },
        { name: 'isLogDebug', value: isLogDebug },
    ], '(since LOG_LEVEL value defaults to info)', { logGtEqlDebug });
});

describe('isInfo (and alias isLogInfo) :: ', function() {
    valsExistAndAreTrue([
        { name: 'isInfo', value: isInfo },
        { name: 'isLogInfo', value: isLogInfo },
    ], '(since LOG_LEVEL value defaults to info)', { logGtEqlInfo });
});

describe('isWarn (and alias isLogWarn) :: ', function() {
    valsExistAndAreTrue([
        { name: 'isWarn', value: isWarn },
        { name: 'isLogWarn', value: isLogWarn },
    ], '(since LOG_LEVEL value defaults to info)', { logGtEqlWarn });
});

describe('isError (and alias isLogError) :: ', function() {
    valsExistAndAreTrue([
        { name: 'isError', value: isError },
        { name: 'isLogError', value: isLogError },
    ], '(since LOG_LEVEL value defaults to info)', { logGtEqlError });
});

describe('isWTF (and aliases isWtf, isLogWTF, and isLogWtf) :: ', function() {
    valsExistAndAreTrue([
        { name: 'isWTF', value: isWTF },
        { name: 'isWtf', value: isWtf },
        { name: 'isLogWTF', value: isLogWTF },
        { name: 'isLogWtf', value: isLogWtf },
        { name: 'logGtEqlWtf', value: logGtEqlWtf },
    ], '(since LOG_LEVEL value defaults to info', { logGtEqlWtf });
});

describe('prodOrSecurityTest (and aliases) :: ', function() {
    valsExistAndAreFalse([
        { name: 'prodOrSecurityTest', value: prodOrSecurityTest },
        { name: 'isProdOrSecurityTest', value: isProdOrSecurityTest }
    ]);
});

describe('wasRunViaMocha (and aliases) :: ', function() {
    valsExistAndAreTrue([
        { name: 'wasRunThruMocha', value: wasRunThruMocha },
        { name: 'runThruMocha', value: runThruMocha },
        { name: 'runViaMocha', value: runViaMocha },
        { name: 'isMochaEnv', value: isMochaEnv },
        { name: 'wasRunViaMocha', value: wasRunViaMocha },
        { name: 'isMocha', value: isMocha },
    ], null, { wasRunViaMocha });
});

describe('releaseEnv tests :: ', function() {
    it(`releaseEnv defaults to development`, function() {
        expect(releaseEnv).to.eql('development');
    });
    it(`releaseEnv has alias releaseEnvironment, with the same value ('development')`, function() {
        expect(releaseEnvironment).to.eql('development');
        expect(releaseEnvironment).to.eql(releaseEnv);
    });
});

describe('isReleaseEnvUat tests :: ', function() {
    valsExistAndAreFalse([
        { name: 'isReleaseEnvUat', value: isReleaseEnvUat },
        { name: 'isReleaseEnvUAT', value: isReleaseEnvUAT },
        { name: 'isUat',           value: isUat           },
        { name: 'isUAT',           value: isUAT           },
    ], null, { isReleaseEnvUat });
});

describe('isAvoidWeb tests :: ', function() {
    valsExistAndAreFalse([
        { name: 'isAvoidWeb', value: isAvoidWeb },
        { name: 'avoidWeb', value: avoidWeb },
        { name: 'doAvoidWeb', value: doAvoidWeb },
    ], null, { isAvoidWeb });
});

// TODO refactor - use an abstraction. Below tests were created with a quick & dirty macro.
describe('WAS_RUN_THRU_MOCHA value tests :: ', function() {
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
    ], `(since current process was launched by Mocha)`);
});


/******************************************** HELPERS *********************************************/
function propExists(prop) {
    it('exists and gets exported', function() {
        expect(prop).to.exist
    });
}

function propHasExpectedVal(val, prop, msg) {
    it(`is set to ${val} ${msg ? ' ' + msg : ''}`, function() {
        expect(prop).to.eql(val);
    });
}

/**
 * Tests if a provided property value matches a given alias.
 * @param {RealAny} aliasValue - value of property doing the aliasing.
 * @param {string} name - name of aliased property.
 * @param {RealAny} propValue - value of aliased property.
 */
function propIsAliasOf(aliasValue, propName, propValue) {
    console.log(`propIsAliasOf :: aliasValue: ${aliasValue};\n propName: ${propName}\n propValue: ${propValue}`);
    it(`is alias of ${propName}`, function() {
        expect(aliasValue).to.eql(propValue)
    });
}

/**
 * Dynamically creates tests for whether each property given in valObjArr exists & is set to true.
 * @param {string} msg - [OPTIONAL] an additional message to display in the truthiness test
 * @param {Object} aliasOf - [OPTIONAL] generate test of whether prop aliases of another given prop.
 *                           Format of aliasOf object: { nameOfAliasedProp: valueOfAliasedProp }
 *                           If no value provided, it excludes the test.
 */
function valsExistAndAreExpectedVal(valObjArr, msg, aliasOf, expectedVal = true) {
    console.log(`valsExistAndAreExpectedVal :: expectedVal: ${expectedVal}\n`);
    valObjArr.forEach(valObj => {
        console.log(`valsExistAndAreExpectedVal :: name of tested prop: ${valObj['name']}`);
        console.log(`valsExistAndAreExpectedVal :: value of tested prop: ${valObj['value']}`);

        describe(valObj['name'], function() {
            propExists(valObj['value']);
            console.log(`valsExistAndAreExpectedVal :: expectedVal: ${expectedVal}`);
            propHasExpectedVal(expectedVal, valObj['value'], msg || false);
            if (aliasOf) {
                const propName = Object.keys(aliasOf)[0];
                console.log(`valsExistAndAreExpectedVal :: name of aliased prop: ${propName}`);
                console.log(`valsExistAndAreExpectedVal :: value of aliased prop: ${aliasOf[propName]}`);
                if (propName !== valObj['name']) {
                    propIsAliasOf(valObj['value'], propName, aliasOf[propName]);
                }
            }
        });
    });
}

function valsExistAndAreTrue(valObjArr, msg, aliasOf, expectedVal = true) {
    valsExistAndAreExpectedVal(valObjArr, msg, aliasOf, true)
}

function valsExistAndAreFalse(valObjArr, msg, aliasOf, expectedVal = false) {
    valsExistAndAreExpectedVal(valObjArr, msg, aliasOf, false)
}
