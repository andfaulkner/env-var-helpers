"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/******************************************** HELPERS *********************************************/
const processExists = typeof process !== 'undefined' && process != null;
const processEnvExists = processExists && process.env;
const isTrueEV = (envVarPath) => (process.env[envVarPath] || false) &&
    (process.env[envVarPath] === true ||
        process.env[envVarPath].toString().toLowerCase() === 'true');
const formatVar = (envVar, def) => processEnvExists && process.env[envVar]
    ? typeof def === 'string'
        ? process.env[envVar].toString().toLowerCase()
        : isTrueEV(envVar)
    : def;
const nodeEnv = formatVar('NODE_ENV', 'development');
/******************************* COMMON ENVIRONMENT VALS COLLECTION *******************************/
exports.env = {
    NODE_ENV: nodeEnv,
    LOG_LEVEL: formatVar('LOG_LEVEL', 'info'),
    IE_COMPAT: formatVar('IE_COMPAT', false),
    TEST_MODE: formatVar('TEST_MODE', false),
    AVOID_WEB: formatVar('AVOID_WEB', false),
    // LOADED_MOCHA_OPTS set automatically by mocha on launch
    WAS_RUN_THRU_MOCHA: formatVar('LOADED_MOCHA_OPTS', false) || formatVar('mocha', false),
    RELEASE_ENV: formatVar('RELEASE_ENV', nodeEnv),
};
/******************************************** NODE_ENV ********************************************/
exports.isDev = exports.env.NODE_ENV === 'development' || exports.env.NODE_ENV === 'dev';
exports.isDevelopment = exports.isDev;
exports.isProd = exports.env.NODE_ENV === 'production' || exports.env.NODE_ENV === 'prod';
exports.isProduction = exports.isProd;
// True if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true
exports.prodOrSecurityTest = exports.isProd || isTrueEV('TEST_SECURITY') || isTrueEV('SECURITY_TEST');
exports.isProdOrSecurityTest = exports.prodOrSecurityTest;
/******************************************* LOG LEVEL ********************************************/
exports.isTrace = exports.env.LOG_LEVEL === 'trace';
exports.isSilly = exports.isTrace || exports.env.LOG_LEVEL === 'silly';
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
exports.isTestMode = exports.env.TEST_MODE && isTrueEV('TEST_MODE');
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
exports.releaseEnvironment = exports.releaseEnv;
exports.isReleaseEnvUat = exports.env.RELEASE_ENV === 'uat';
exports.isReleaseEnvUAT = exports.isReleaseEnvUat;
exports.isUat = exports.isReleaseEnvUat;
exports.isUAT = exports.isReleaseEnvUat;
exports.isReleaseEnvQa = exports.env.RELEASE_ENV === 'qa';
exports.isReleaseEnvQA = exports.isReleaseEnvQa;
exports.isQa = exports.isReleaseEnvQa;
exports.isQA = exports.isReleaseEnvQa;
exports.isReleaseEnvDev = exports.env.RELEASE_ENV === 'dev' || exports.env.RELEASE_ENV === 'development';
exports.isReleaseEnvDevelopment = exports.isReleaseEnvDev;
exports.isReleaseEnvProd = exports.env.RELEASE_ENV === 'prod' || exports.env.RELEASE_ENV === 'production';
exports.isReleaseEnvProduction = exports.isReleaseEnvProd;
/**
 * 3-4 letter version of release environment name. Default: 'dev'
 */
exports.releaseEnvShort = (function () {
    return exports.releaseEnv === 'uat'
        ? 'uat'
        : exports.releaseEnv === 'prod' || exports.releaseEnv === 'production'
            ? 'prod'
            : exports.releaseEnv === 'qa'
                ? 'qa'
                : 'dev';
})();
exports.releaseEnvAbbrev = exports.releaseEnvShort;
exports.releaseEnvAbbreviation = exports.releaseEnvShort;
exports.releaseEnvironmentShort = exports.releaseEnvShort;
exports.releaseEnvironmentAbbrev = exports.releaseEnvShort;
exports.releaseEnvironmentAbbreviation = exports.releaseEnvShort;
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