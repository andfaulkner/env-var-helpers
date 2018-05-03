// ensure environment knows testing is occurring
process.env.mocha = true;
console.log(`mocha:`, process.env.mocha);

/************************************** THIRD-PARTY IMPORTS ***************************************/
const {expect} = require('chai');
const mocha = require('mocha');

/*********************************** IMPORT FILES TO BE TESTED ************************************/
const envVarHelpers = require('../lib/index');

// TEST_SECURITY / SECURITY_TEST exports
const {prodOrSecurityTest, isProdOrSecurityTest} = envVarHelpers;

// IE_COMPAT exports
const {isIECompat, isIeCompat} = envVarHelpers;

// LOG_LEVEL property exports
const {isTrace, isSilly, isVerbose, isDebug, isInfo, isWarn, isError, isWtf, isWTF} = envVarHelpers;

// AVOID_WEB exports
const {isAvoidWeb, avoidWeb} = envVarHelpers;

// NODE_ENV (environment) exports
const {isDev, isDevelopment, isProd, isProduction} = envVarHelpers;

// LOADED_MOCHA_OPTS exports (true if current process launched by Mocha)
const {isMochaEnv, runByMocha, isMocha} = envVarHelpers;

// RELEASE_ENV (release environment) exports
const {releaseEnv, releaseEnvironment, releaseEnvShort, releaseEnvAbbrev} = envVarHelpers;

// UAT & QA release environment helpers
const {isReleaseEnvUAT, isUAT, isReleaseEnvQA, isQA} = envVarHelpers;

// Directly log the environment variables in verbose or silly mode.
const {LOG_LEVEL} = process.env;
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
/** NODE_ENV **/

describe('isDevelopment (and aliases) :: ', function() {
    valsExistAndAreTrue(
        [{name: 'isDev', value: isDev}, {name: 'isDevelopment', value: isDevelopment}],
        null,
        {isDevelopment}
    );
});

describe('isProduction (and aliases) :: ', function() {
    valsExistAndAreFalse(
        [{name: 'isProd', value: isProd}, {name: 'isProd', value: isProduction}],
        null,
        {isProduction}
    );
});

/** LOG_LEVEL **/

describe('isTrace :: ', function() {
    valsExistAndAreFalse(
        [{name: 'isTrace', value: isTrace}],
        '(since LOG_LEVEL value defaults to info)',
        {isTrace}
    );
});

describe('isSilly :: ', function() {
    valsExistAndAreFalse(
        [{name: 'isSilly', value: isSilly}],
        '(since LOG_LEVEL value defaults to info)',
        {isSilly}
    );
});

describe('isVerbose :: ', function() {
    valsExistAndAreFalse(
        [{name: 'isVerbose', value: isVerbose}],
        '(since LOG_LEVEL value defaults to info)',
        {isVerbose}
    );
});

describe('isDebug :: ', function() {
    valsExistAndAreFalse(
        [{name: 'isDebug', value: isDebug}],
        '(since LOG_LEVEL value defaults to info)',
        {isDebug}
    );
});

describe('isInfo :: ', function() {
    valsExistAndAreTrue(
        [{name: 'isInfo', value: isInfo}],
        '(since LOG_LEVEL value defaults to info)',
        {isInfo}
    );
});

describe('isWarn :: ', function() {
    valsExistAndAreTrue(
        [{name: 'isWarn', value: isWarn}],
        '(since LOG_LEVEL value defaults to info)',
        {isWarn}
    );
});

describe('isError :: ', function() {
    valsExistAndAreTrue(
        [{name: 'isError', value: isError}],
        '(since LOG_LEVEL value defaults to info)',
        {isError}
    );
});

describe('isWTF (and alias isWtf) :: ', function() {
    valsExistAndAreTrue(
        [{name: 'isWTF', value: isWTF}, {name: 'isWtf', value: isWtf}],
        '(since LOG_LEVEL value defaults to info)',
        {isWTF}
    );
});

/** IE_COMPAT **/

describe('isIECompat (and alias isIeCompat) :: ', function() {
    valsExistAndAreFalse(
        [{name: 'isIECompat', value: isIECompat}, {name: 'isIeCompat', value: isIeCompat}],
        null,
        {isIECompat}
    );
});

/** SECURITY_TEST **/

describe('prodOrSecurityTest (and aliases) :: ', function() {
    valsExistAndAreFalse([
        {name: 'prodOrSecurityTest', value: prodOrSecurityTest},
        {name: 'isProdOrSecurityTest', value: isProdOrSecurityTest}
    ]);
});

/** Was run by Mocha? **/

describe('isMocha & aliases (runByMocha, isMochaEnv) :: ', function() {
    valsExistAndAreTrue(
        [
            {name: 'isMochaEnv', value: isMochaEnv},
            {name: 'runByMocha', value: runByMocha},
            {name: 'isMocha', value: isMocha}
        ],
        `(since current process was launched by Mocha)`,
        {isMocha}
    );
});

/** RELEASE_ENV **/

describe('releaseEnv tests :: ', function() {
    it(`releaseEnv defaults to development`, function() {
        expect(releaseEnv).to.eql('development');
    });
    it(`releaseEnv has alias releaseEnvironment, with the same value ('development')`, function() {
        expect(releaseEnvironment).to.eql('development');
        expect(releaseEnvironment).to.eql(releaseEnv);
    });
    describe('isUAT (isReleaseEnvUAT) tests :: ', function() {
        valsExistAndAreFalse(
            [{name: 'isReleaseEnvUAT', value: isReleaseEnvUAT}, {name: 'isUAT', value: isUAT}],
            null,
            {isReleaseEnvUAT}
        );
    });
    describe('isQA (isReleaseEnvQA) tests :: ', function() {
        valsExistAndAreFalse(
            [{name: 'isReleaseEnvQA', value: isReleaseEnvQA}, {name: 'isQA', value: isQA}],
            null,
            {isReleaseEnvQA}
        );
    });
    describe('releaseEnvShort tests :: ', function() {
        it(`releaseEnvShort defaults to 'dev'`, function() {
            expect(releaseEnvShort).to.eql('dev');
        });
        it(`releaseEnvShort has alias releaseEnvAbbrev`, function() {
            expect(releaseEnvAbbrev).to.eql('dev');
            expect(releaseEnvAbbrev).to.eql(releaseEnvShort);
        });
    });
});

/** AVOID_WEB **/

describe('isAvoidWeb tests :: ', function() {
    valsExistAndAreFalse(
        [{name: 'isAvoidWeb', value: isAvoidWeb}, {name: 'avoidWeb', value: avoidWeb}],
        null,
        {isAvoidWeb}
    );
});

/******************************************** HELPERS *********************************************/
function propExists(prop) {
    it('exists and gets exported', function() {
        expect(prop).to.exist;
    });
}

function propHasExpectedVal(val, prop, msg) {
    it(`is set to ${val} ${msg ? ' ' + msg : ''}`, function() {
        expect(prop).to.eql(val);
    });
}

/**
 * Tests if a provided property value matches a given alias
 * @param {RealAny} aliasValue - value of property doing the aliasing
 * @param {string} name - name of aliased property
 * @param {RealAny} propValue - value of aliased property
 */
function propIsAliasOf(aliasValue, propName, propValue) {
    it(`is alias of ${propName}`, function() {
        expect(aliasValue).to.eql(propValue);
    });
}

/**
 * Dynamically creates tests for whether each property given in valObjArr exists & is set to true
 * @param {string} msg - [OPTIONAL] an additional message to display in the truthiness test
 * @param {Object} aliasOf - [OPTIONAL] generate test of whether prop aliases of another given prop
 *                           Format of aliasOf object: {nameOfAliasedProp: valueOfAliasedProp}
 *                           If no value provided, it excludes the test
 */
function valsExistAndAreExpectedVal(valObjArr, msg, aliasOf, expectedVal = true) {
    valObjArr.forEach(valObj => {
        describe(valObj['name'], function() {
            propExists(valObj['value']);
            propHasExpectedVal(expectedVal, valObj['value'], msg || false);
            if (aliasOf) {
                const propName = Object.keys(aliasOf)[0];
                if (propName !== valObj['name']) {
                    propIsAliasOf(valObj['value'], propName, aliasOf[propName]);
                }
            }
        });
    });
}

function valsExistAndAreTrue(valObjArr, msg, aliasOf, expectedVal = true) {
    valsExistAndAreExpectedVal(valObjArr, msg, aliasOf, true);
}

function valsExistAndAreFalse(valObjArr, msg, aliasOf, expectedVal = false) {
    valsExistAndAreExpectedVal(valObjArr, msg, aliasOf, false);
}
