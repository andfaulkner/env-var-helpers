"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**************************************************************************************************/
// WARNING: DO NOT TOUCH THIS BLOCK! It's required in this exact form to work with Webpack
// Without each var explicitly defined with in "process.env.VARIABLE_NAME" format,
// Webpack can't inject the properties' values for use in a browser environment
const RAW_NODE_ENV = process.env.NODE_ENV;
const RAW_LOG_LEVEL = process.env.LOG_LEVEL;
const RAW_RELEASE_ENV = process.env.RELEASE_ENV;
const RAW_TEST_MODE = process.env.TEST_MODE;
const RAW_IE_COMPAT = process.env.IE_COMPAT;
const RAW_AVOID_WEB = process.env.AVOID_WEB;
const RAW_LOADED_MOCHA_OPTS = process.env.LOADED_MOCHA_OPTS;
const RAW_mocha = process.env.mocha;
const RAW_TEST_SECURITY = process.env.TEST_SECURITY;
const RAW_SECURITY_TEST = process.env.SECURITY_TEST;
/******************************************** HELPERS *********************************************/
const toBool = function toBool(val, def) {
    return val === 'true' || val === true ? true : val === 'false' || val === false ? false : def;
};
const hasVal = function hasVal(val) {
    return typeof val !== 'undefined' && val !== null && val !== '';
};
/********************************* GET & PROCESS ENVIRONMENT VALS *********************************/
const NODE_ENV = hasVal(RAW_NODE_ENV) ? RAW_NODE_ENV.toLowerCase() : 'development';
const RELEASE_ENV = hasVal(RAW_RELEASE_ENV) ? RAW_RELEASE_ENV.toLowerCase() : NODE_ENV;
const LOG_LEVEL = hasVal(RAW_LOG_LEVEL) ? RAW_LOG_LEVEL.toLowerCase() : 'info';
const TEST_MODE = hasVal(RAW_TEST_MODE) ? toBool(RAW_TEST_MODE, false) : false;
const IE_COMPAT = hasVal(RAW_IE_COMPAT) ? toBool(RAW_IE_COMPAT, false) : false;
const AVOID_WEB = hasVal(RAW_AVOID_WEB) ? toBool(RAW_AVOID_WEB, false) : false;
const WAS_RUN_THRU_MOCHA = hasVal(RAW_LOADED_MOCHA_OPTS) || (RAW_mocha && toBool(RAW_mocha, false));
exports.env = {
    NODE_ENV: NODE_ENV,
    LOG_LEVEL: LOG_LEVEL,
    IE_COMPAT: IE_COMPAT,
    TEST_MODE: TEST_MODE,
    AVOID_WEB: AVOID_WEB,
    WAS_RUN_THRU_MOCHA: WAS_RUN_THRU_MOCHA,
    RELEASE_ENV: RELEASE_ENV,
};
/******************************************** NODE_ENV ********************************************/
exports.isDev = NODE_ENV === 'development' || NODE_ENV === 'dev';
exports.isDevelopment = exports.isDev;
exports.isProd = NODE_ENV === 'production' || NODE_ENV === 'prod';
exports.isProduction = exports.isProd;
// True if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true
exports.prodOrSecurityTest = exports.isProd ||
    (hasVal(RAW_TEST_SECURITY) && toBool(RAW_TEST_SECURITY, false)) ||
    (hasVal(RAW_SECURITY_TEST) && toBool(RAW_SECURITY_TEST, false));
exports.isProdOrSecurityTest = exports.prodOrSecurityTest;
/******************************************* LOG_LEVEL ********************************************/
exports.isTrace = LOG_LEVEL === 'trace';
exports.isSilly = exports.isTrace || LOG_LEVEL === 'silly';
exports.isVerbose = exports.isSilly || LOG_LEVEL === 'verbose';
exports.isDebug = exports.isVerbose || LOG_LEVEL === 'debug';
exports.isInfo = exports.isDebug || LOG_LEVEL === 'info';
exports.isWarn = exports.isInfo || LOG_LEVEL === 'warn';
exports.isError = exports.isWarn || LOG_LEVEL === 'error';
exports.isWTF = exports.isError || LOG_LEVEL === 'wtf';
exports.isWtf = exports.isWTF;
/********************************** IE COMPATIBILITY (IE_COMPAT) **********************************/
exports.isIECompat = IE_COMPAT;
exports.isIeCompat = exports.isIECompat;
/******************************************* AVOID_WEB ********************************************/
// Check for env var requesting total avoidance of web; e.g. no CDNs (local bundles use instead)
exports.isAvoidWeb = AVOID_WEB;
exports.avoidWeb = exports.isAvoidWeb;
/************************** TEST ENVIRONMENT (LOADED_MOCHA_OPTS, Mocha) ***************************/
// For cases where TEST_MODE was run explicitly
exports.isTestMode = TEST_MODE && toBool('TEST_MODE', false);
// Check if current script was run via Mocha
exports.isMocha = WAS_RUN_THRU_MOCHA;
exports.isMochaEnv = exports.isMocha;
exports.runByMocha = exports.isMocha;
/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
exports.releaseEnv = RELEASE_ENV;
exports.releaseEnvironment = exports.releaseEnv;
exports.isReleaseEnvUAT = RELEASE_ENV === 'uat';
exports.isUAT = exports.isReleaseEnvUAT;
exports.isReleaseEnvQA = RELEASE_ENV === 'qa';
exports.isQA = exports.isReleaseEnvQA;
exports.isReleaseEnvDev = RELEASE_ENV === 'dev' || RELEASE_ENV === 'development';
exports.isReleaseEnvDevelopment = exports.isReleaseEnvDev;
exports.isReleaseEnvProd = RELEASE_ENV === 'prod' || RELEASE_ENV === 'production';
exports.isReleaseEnvProduction = exports.isReleaseEnvProd;
/**
 * 3-4 letter version of release environment name (Default: 'dev')
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
//# sourceMappingURL=index.js.map