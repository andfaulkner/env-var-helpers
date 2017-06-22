"use strict";
/******************************* COMMON ENVIRONMENT VALS COLLECTION *******************************/
const processExists = typeof process !== 'undefined' && process != null;
const RELEASE_ENV = (processExists && process.env && process.env.RELEASE_ENV)
    ? process.env.RELEASE_ENV.toString().toLowerCase()
    : (process.env.NODE_ENV ? process.env.NODE_ENV.toString().toLowerCase() : 'dev');
// RELEASE_ENV: (processExists && process.env && process.env.RELEASE_ENV
//                ? process.env.RELEASE_ENV.toString().toLowerCase()
//                : 'dev'),
exports.env = {
    NODE_ENV: (processExists && process.env && process.env.NODE_ENV
        ? process.env.NODE_ENV.toString().toLowerCase()
        : 'development'),
    LOG_LEVEL: (processExists && process.env && process.env.LOG_LEVEL
        ? process.env.LOG_LEVEL.toString().toLowerCase()
        : 'info'),
    IE_COMPAT: (processExists && process.env && process.env.IE_COMPAT
        ? (process.env.IE_COMPAT === true || process.env.IE_COMPAT === 'true')
        : false),
    TEST_MODE: (processExists && process.env && process.env.TEST_MODE
        ? (process.env.TEST_MODE === true || process.env.TEST_MODE === 'true')
        : false),
    AVOID_WEB: (processExists && process.env && process.env.AVOID_WEB
        ? (process.env.AVOID_WEB === true || process.env.AVOID_WEB === 'true')
        : false),
    WAS_RUN_THRU_MOCHA: (processExists && process.env && process.env.LOADED_MOCHA_OPTS
        ? (process.env.LOADED_MOCHA_OPTS === 'true'
            || process.env.LOADED_MOCHA_OPTS === true)
        : false),
    RELEASE_ENV: (processExists && process.env && process.env.RELEASE_ENV)
        ? process.env.RELEASE_ENV.toString().toLowerCase()
        : ((process.env.NODE_ENV && process.env.NODE_ENV.toString().toLowerCase())
            || 'development'),
};
/******************************************** NODE_ENV ********************************************/
exports.isDevelopment = (exports.env.NODE_ENV === 'development' || exports.env.NODE_ENV === 'dev');
exports.isDev = exports.isDevelopment;
exports.isProduction = (exports.env.NODE_ENV === 'production' || exports.env.NODE_ENV === 'prod');
exports.isProd = exports.isProduction;
// True if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true
exports.prodOrSecurityTest = exports.isProd || process.env.TEST_SECURITY === true || process.env.TEST_SECURITY === 'true'
    || process.env.SECURITY_TEST === true || process.env.SECURITY_TEST === 'true';
exports.isProdOrSecurityTest = exports.prodOrSecurityTest;
/******************************************* LOG LEVEL ********************************************/
exports.logGtEqlSilly = (exports.env.LOG_LEVEL === 'silly');
exports.logGtEqlVerbose = (exports.logGtEqlSilly || exports.env.LOG_LEVEL === 'verbose');
exports.logGtEqlDebug = (exports.logGtEqlVerbose || exports.env.LOG_LEVEL === 'debug');
exports.logGtEqlInfo = (exports.logGtEqlDebug || exports.env.LOG_LEVEL === 'info');
exports.logGtEqlWarn = (exports.logGtEqlInfo || exports.env.LOG_LEVEL === 'warn');
exports.logGtEqlError = (exports.logGtEqlWarn || exports.env.LOG_LEVEL === 'error');
exports.logGtEqlWTF = (exports.logGtEqlError || exports.env.LOG_LEVEL === 'wtf');
exports.logGtEqlWtf = exports.logGtEqlWTF;
/******************************************** ALIASES *********************************************/
exports.isSilly = exports.logGtEqlSilly;
exports.isVerbose = exports.logGtEqlVerbose;
exports.isDebug = exports.logGtEqlDebug;
exports.isInfo = exports.logGtEqlInfo;
exports.isWarn = exports.logGtEqlWarn;
exports.isError = exports.logGtEqlError;
exports.isWTF = exports.logGtEqlWTF;
exports.isWtf = exports.logGtEqlWtf;
exports.isLogSilly = exports.logGtEqlSilly;
exports.isLogVerbose = exports.logGtEqlVerbose;
exports.isLogDebug = exports.logGtEqlDebug;
exports.isLogInfo = exports.logGtEqlInfo;
exports.isLogWarn = exports.logGtEqlWarn;
exports.isLogError = exports.logGtEqlError;
exports.isLogWTF = exports.logGtEqlWTF;
exports.isLogWtf = exports.logGtEqlWtf;
/**************************************** IE COMPATIBILITY ****************************************/
exports.isIeCompatMode = exports.env.IE_COMPAT;
exports.isIECompatMode = exports.isIeCompatMode;
exports.isIECompat = exports.isIeCompatMode;
exports.isIeCompat = exports.isIeCompatMode;
// Check for env var requesting total avoidance of web; e.g. no CDNs (local bundles use instead)
exports.isAvoidWeb = exports.env.AVOID_WEB;
exports.avoidWeb = exports.env.AVOID_WEB;
exports.doAvoidWeb = exports.env.AVOID_WEB;
/**************************************** TEST ENVIRONMENT ****************************************/
// For cases where TEST_MODE was run explicitly
exports.isTestMode = exports.env.TEST_MODE && (exports.env.TEST_MODE === true || exports.env.TEST_MODE === 'true');
// Check if current script was run via Mocha
exports.isMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.isMochaEnv = exports.env.WAS_RUN_THRU_MOCHA;
exports.runByMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.runViaMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.runThruMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.wasRunByMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.wasRunViaMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.wasRunThruMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.loadedMochaOpts = exports.env.WAS_RUN_THRU_MOCHA;
/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
exports.releaseEnv = exports.env.RELEASE_ENV;
exports.releaseEnvironment = exports.env.RELEASE_ENV;
exports.isReleaseEnvUat = (exports.env.RELEASE_ENV === 'uat');
exports.isReleaseEnvUAT = exports.isReleaseEnvUat;
exports.isUat = exports.isReleaseEnvUat;
exports.isUAT = exports.isReleaseEnvUat;
// 3-4 letter version of release environment name.
exports.releaseEnvShort = (function () {
    switch (exports.releaseEnv) {
        case "uat": return 'uat';
        case "prod":
        case "production": return 'prod';
        default:
        case "dev":
        case "development": return 'dev';
    }
}());
exports.releaseEnvAbbrev = exports.releaseEnvShort;
exports.releaseEnvAbbreviation = exports.releaseEnvShort;
exports.releaseEnvironmentShort = exports.releaseEnvShort;
exports.releaseEnvironmentAbbrev = exports.releaseEnvShort;
exports.releaseEnvironmentAbbreviation = exports.releaseEnvShort;
/**************************** LOG LEVEL + TEST ENVIRONMENT SHORTHANDS *****************************/
// More are defined for verbose + mocha because it's a much more common pattern.
exports.isVerboseMocha = exports.env.WAS_RUN_THRU_MOCHA && exports.isVerbose;
exports.isVerboseTest = exports.env.WAS_RUN_THRU_MOCHA && exports.isVerbose;
exports.isVTest = exports.env.WAS_RUN_THRU_MOCHA && exports.isVerbose;
exports.isVMocha = exports.env.WAS_RUN_THRU_MOCHA && exports.isVerbose;
exports.isMochaVerbose = exports.env.WAS_RUN_THRU_MOCHA && exports.isVerbose;
exports.isTestVerbose = exports.env.WAS_RUN_THRU_MOCHA && exports.isVerbose;
exports.isMochaV = exports.env.WAS_RUN_THRU_MOCHA && exports.isVerbose;
exports.isTestV = exports.env.WAS_RUN_THRU_MOCHA && exports.isVerbose;
exports.isDebugMocha = exports.env.WAS_RUN_THRU_MOCHA && exports.isDebug;
exports.isDebugTest = exports.env.WAS_RUN_THRU_MOCHA && exports.isDebug;
exports.isMochaDebug = exports.env.WAS_RUN_THRU_MOCHA && exports.isDebug;
exports.isTestDebug = exports.env.WAS_RUN_THRU_MOCHA && exports.isDebug;
exports.isSillyMocha = exports.env.WAS_RUN_THRU_MOCHA && exports.isSilly;
exports.isSillyTest = exports.env.WAS_RUN_THRU_MOCHA && exports.isSilly;
exports.isMochaSilly = exports.env.WAS_RUN_THRU_MOCHA && exports.isSilly;
exports.isTestSilly = exports.env.WAS_RUN_THRU_MOCHA && exports.isSilly;
// No need for isWarnMocha, isErrorMocha, or isWtfMocha: suppressing warning & error
// error logs in unit tests is virtually never needed, and terrible practice besides.
//# sourceMappingURL=index.js.map