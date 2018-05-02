"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/******************************* COMMON ENVIRONMENT VALS COLLECTION *******************************/
const processExists = typeof process !== 'undefined' && process != null;
exports.env = {
    NODE_ENV: processExists && process.env && process.env.NODE_ENV
        ? process.env.NODE_ENV.toString().toLowerCase()
        : 'development',
    LOG_LEVEL: processExists && process.env && process.env.LOG_LEVEL
        ? process.env.LOG_LEVEL.toString().toLowerCase()
        : 'info',
    IE_COMPAT: processExists && process.env && process.env.IE_COMPAT
        ? process.env.IE_COMPAT === true || process.env.IE_COMPAT === 'true'
        : false,
    TEST_MODE: processExists && process.env && process.env.TEST_MODE
        ? process.env.TEST_MODE === true || process.env.TEST_MODE === 'true'
        : false,
    AVOID_WEB: processExists && process.env && process.env.AVOID_WEB
        ? process.env.AVOID_WEB === true || process.env.AVOID_WEB === 'true'
        : false,
    WAS_RUN_THRU_MOCHA: processExists && process.env && process.env.LOADED_MOCHA_OPTS
        ? process.env.LOADED_MOCHA_OPTS === 'true' || process.env.LOADED_MOCHA_OPTS === true
        : false,
    RELEASE_ENV: processExists && process.env && process.env.RELEASE_ENV
        ? process.env.RELEASE_ENV.toString().toLowerCase()
        : ((process.env.NODE_ENV && process.env.NODE_ENV.toString().toLowerCase()) ||
            'development'),
};
/******************************************** NODE_ENV ********************************************/
exports.isDevelopment = exports.env.NODE_ENV === 'development' || exports.env.NODE_ENV === 'dev';
exports.isDev = exports.isDevelopment;
exports.isProduction = exports.env.NODE_ENV === 'production' || exports.env.NODE_ENV === 'prod';
exports.isProd = exports.isProduction;
// True if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true
exports.prodOrSecurityTest = exports.isProduction ||
    process.env.TEST_SECURITY === true ||
    process.env.TEST_SECURITY === 'true' ||
    process.env.SECURITY_TEST === true ||
    process.env.SECURITY_TEST === 'true';
exports.isProdOrSecurityTest = exports.prodOrSecurityTest;
/******************************************* LOG LEVEL ********************************************/
exports.isSilly = exports.env.LOG_LEVEL === 'silly';
exports.logGtEqlSilly = exports.isSilly;
exports.isLogSilly = exports.isSilly;
exports.isVerbose = exports.isSilly || exports.env.LOG_LEVEL === 'verbose';
exports.logGtEqlVerbose = exports.isVerbose;
exports.isLogVerbose = exports.isVerbose;
exports.isDebug = exports.isVerbose || exports.env.LOG_LEVEL === 'debug';
exports.logGtEqlDebug = exports.isDebug;
exports.isLogDebug = exports.isDebug;
exports.isInfo = exports.isDebug || exports.env.LOG_LEVEL === 'info';
exports.logGtEqlInfo = exports.isInfo;
exports.isLogInfo = exports.isInfo;
exports.isWarn = exports.isInfo || exports.env.LOG_LEVEL === 'warn';
exports.logGtEqlWarn = exports.isWarn;
exports.isLogWarn = exports.isWarn;
exports.isError = exports.isWarn || exports.env.LOG_LEVEL === 'error';
exports.logGtEqlError = exports.isError;
exports.isLogError = exports.isError;
exports.isWTF = exports.isError || exports.env.LOG_LEVEL === 'wtf';
exports.logGtEqlWTF = exports.isWTF;
exports.logGtEqlWtf = exports.isWTF;
exports.isWtf = exports.isWTF;
exports.isLogWTF = exports.isWTF;
exports.isLogWtf = exports.isWTF;
/**************************************** IE COMPATIBILITY ****************************************/
exports.isIeCompatMode = exports.env.IE_COMPAT;
exports.isIECompatMode = exports.isIeCompatMode;
exports.isIECompat = exports.isIeCompatMode;
exports.isIeCompat = exports.isIeCompatMode;
// Check for env var requesting total avoidance of web; e.g. no CDNs (local bundles use instead)
exports.isAvoidWeb = exports.env.AVOID_WEB;
exports.avoidWeb = exports.isAvoidWeb;
exports.doAvoidWeb = exports.isAvoidWeb;
/**************************************** TEST ENVIRONMENT ****************************************/
// For cases where TEST_MODE was run explicitly
exports.isTestMode = exports.env.TEST_MODE && (exports.env.TEST_MODE === true || exports.env.TEST_MODE === 'true');
// Check if current script was run via Mocha
exports.isMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.isMochaEnv = exports.isMocha;
exports.runByMocha = exports.isMocha;
exports.runViaMocha = exports.isMocha;
exports.runThruMocha = exports.isMocha;
exports.wasRunByMocha = exports.isMocha;
exports.wasRunViaMocha = exports.isMocha;
exports.wasRunThruMocha = exports.isMocha;
exports.loadedMochaOpts = exports.isMocha;
/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
exports.releaseEnv = exports.env.RELEASE_ENV;
exports.releaseEnvironment = exports.env.RELEASE_ENV;
exports.isReleaseEnvUat = exports.env.RELEASE_ENV === 'uat';
exports.isReleaseEnvUAT = exports.isReleaseEnvUat;
exports.isUat = exports.isReleaseEnvUat;
exports.isUAT = exports.isReleaseEnvUat;
// 3-4 letter version of release environment name.
exports.releaseEnvShort = (function () {
    return exports.releaseEnv === 'uat'
        ? 'uat'
        : exports.releaseEnv === 'prod' || exports.releaseEnv === 'production'
            ? 'prod'
            : 'dev';
})();
exports.releaseEnvAbbrev = exports.releaseEnvShort;
exports.releaseEnvAbbreviation = exports.releaseEnvAbbrev;
exports.releaseEnvironmentShort = exports.releaseEnvAbbrev;
exports.releaseEnvironmentAbbrev = exports.releaseEnvAbbrev;
exports.releaseEnvironmentAbbreviation = exports.releaseEnvAbbrev;
/**************************** LOG LEVEL + TEST ENVIRONMENT SHORTHANDS *****************************/
// More are defined for verbose + mocha because it's a much more common pattern.
exports.isVerboseMocha = exports.env.WAS_RUN_THRU_MOCHA && exports.isVerbose;
exports.isVerboseTest = exports.isVerboseMocha;
exports.isVTest = exports.isVerboseMocha;
exports.isVMocha = exports.isVerboseMocha;
exports.isMochaVerbose = exports.isVerboseMocha;
exports.isTestVerbose = exports.isVerboseMocha;
exports.isMochaV = exports.isVerboseMocha;
exports.isTestV = exports.isVerboseMocha;
exports.isDebugMocha = exports.env.WAS_RUN_THRU_MOCHA && exports.isDebug;
exports.isDebugTest = exports.isDebugMocha;
exports.isMochaDebug = exports.isDebugMocha;
exports.isTestDebug = exports.isDebugMocha;
exports.isSillyMocha = exports.env.WAS_RUN_THRU_MOCHA && exports.isSilly;
exports.isSillyTest = exports.isSillyMocha;
exports.isMochaSilly = exports.isSillyMocha;
exports.isTestSilly = exports.isSillyMocha;
// No need for isWarnMocha, isErrorMocha, or isWtfMocha: suppressing warning & error
// error logs in unit tests is virtually never needed, and terrible practice besides.
//# sourceMappingURL=index.js.map