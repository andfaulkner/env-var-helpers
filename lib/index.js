"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**************************************************************************************************/
// WARNING: DO NOT TOUCH THIS BLOCK! It's required in this exact form to work with Webpack
// Without each var explicitly defined with in "process.env.VARIABLE_NAME" format,
// Webpack can't inject the properties' values for use in a browser environment
var RAW_NODE_ENV = process.env.NODE_ENV;
var RAW_LOG_LEVEL = process.env.LOG_LEVEL;
var RAW_RELEASE_ENV = process.env.RELEASE_ENV;
var RAW_TEST_MODE = process.env.TEST_MODE;
var RAW_IE_COMPAT = process.env.IE_COMPAT;
var RAW_AVOID_WEB = process.env.AVOID_WEB;
var RAW_LOADED_MOCHA_OPTS = process.env.LOADED_MOCHA_OPTS;
var RAW_mocha = process.env.mocha;
var RAW_TEST_SECURITY = process.env.TEST_SECURITY;
var RAW_SECURITY_TEST = process.env.SECURITY_TEST;
var RAW_IS_LOCAL = process.env.IS_LOCAL;
var RAW_SKIP_BASIC_AUTH = process.env.SKIP_BASIC_AUTH;
/******************************************** HELPERS *********************************************/
var hasVal = function (val) { return typeof val !== "undefined" && val !== null && val !== ""; };
var strToBool = function (rawVal) {
    var val = rawVal.toLowerCase();
    return val === "false" || val === "f" ? false : val === "true" || val === "t";
};
var toBool = function (rawVal, def) {
    // If value not set, return false, or default if given
    if (!hasVal(rawVal))
        return hasVal(def) ? def : false;
    // If val is a string, convert from boolean string (e.g. "true") to boolean
    if (typeof rawVal === "string")
        return strToBool(rawVal);
    // If val is boolean, return it as-is
    return rawVal;
};
/********************************* GET & PROCESS ENVIRONMENT VALS *********************************/
var NODE_ENV;
var RELEASE_ENV;
var LOG_LEVEL;
var TEST_MODE;
var IE_COMPAT;
var AVOID_WEB;
var IS_LOCAL;
var SKIP_BASIC_AUTH;
// prettier-ignore
{
    NODE_ENV = hasVal(RAW_NODE_ENV) ? RAW_NODE_ENV.toLowerCase() : "development";
    RELEASE_ENV = hasVal(RAW_RELEASE_ENV) ? RAW_RELEASE_ENV.toLowerCase() : NODE_ENV;
    LOG_LEVEL = hasVal(RAW_LOG_LEVEL) ? RAW_LOG_LEVEL.toLowerCase() : "info";
    TEST_MODE = hasVal(RAW_TEST_MODE) ? toBool(RAW_TEST_MODE, false) : false;
    IE_COMPAT = hasVal(RAW_IE_COMPAT) ? toBool(RAW_IE_COMPAT, false) : false;
    AVOID_WEB = hasVal(RAW_AVOID_WEB) ? toBool(RAW_AVOID_WEB, false) : false;
    IS_LOCAL = hasVal(RAW_IS_LOCAL) ? toBool(RAW_mocha, false) : false;
    SKIP_BASIC_AUTH = hasVal(RAW_SKIP_BASIC_AUTH) ? toBool(RAW_SKIP_BASIC_AUTH, false) : false;
}
var WAS_RUN_THRU_MOCHA = hasVal(RAW_LOADED_MOCHA_OPTS) || (RAW_mocha && toBool(RAW_mocha, false));
/**
 * Node environment (NODE_ENV):
 *     development | production
 * Converts short-form to long-form, contains default value if NODE_ENV not set
 */
exports.nodeEnv = NODE_ENV.replace(/^dev$/, 'development').replace(/^prod$/, 'production');
/**
 * Directly output log level (LOG_LEVEL env var):
 *     trace | silly | debug | verbose | info | warn | error | wtf
 * Resolves default value
 */
exports.logLevel = LOG_LEVEL;
/**
 * Namespace for direct access to environment variables:
 *     NODE_ENV
 *     LOG_LEVEL
 *     IE_COMPAT
 *     TEST_MODE
 *     AVOID_WEB
 *     RELEASE_ENV
 *     IS_LOCAL
 *     SKIP_BASIC_AUTH
 *     WAS_RUN_THRU_MOCHA
 */
exports.env = {
    NODE_ENV: exports.nodeEnv,
    LOG_LEVEL: exports.logLevel,
    IE_COMPAT: IE_COMPAT,
    TEST_MODE: TEST_MODE,
    AVOID_WEB: AVOID_WEB,
    RELEASE_ENV: RELEASE_ENV,
    IS_LOCAL: IS_LOCAL,
    SKIP_BASIC_AUTH: SKIP_BASIC_AUTH,
    WAS_RUN_THRU_MOCHA: WAS_RUN_THRU_MOCHA,
};
/******************************************** NODE_ENV ********************************************/
/**
 * true if current process was run with NODE_ENV=development or NODE_ENV=dev
 */
exports.isDevelopment = exports.nodeEnv === "development";
exports.isDev = exports.isDevelopment;
/**
 * true if current process was run with NODE_ENV=production or NODE_ENV=prod
 */
exports.isProduction = exports.nodeEnv === "production";
exports.isProd = exports.isProduction;
/**
 * true if NODE_ENV=production, TEST_SECURITY=true, or SECURITY_TEST=true
 */
exports.prodOrSecurityTest = exports.isProduction ||
    (hasVal(RAW_TEST_SECURITY) && toBool(RAW_TEST_SECURITY, false)) ||
    (hasVal(RAW_SECURITY_TEST) && toBool(RAW_SECURITY_TEST, false));
exports.isProdOrSecurityTest = exports.prodOrSecurityTest;
/******************************************* LOG_LEVEL ********************************************/
/**
 * true if current process was run with LOG_LEVEL=trace
 */
exports.isTrace = LOG_LEVEL === "trace";
/**
 * true if current process was run with LOG_LEVEL=silly
 */
exports.isSilly = exports.isTrace || LOG_LEVEL === "silly";
/**
 * true if current process was run with LOG_LEVEL=verbose
 */
exports.isVerbose = exports.isSilly || LOG_LEVEL === "verbose";
/**
 * true if current process was run with LOG_LEVEL=debug
 */
exports.isDebug = exports.isVerbose || LOG_LEVEL === "debug";
/**
 * true if current process was run with LOG_LEVEL=info
 */
exports.isInfo = exports.isDebug || LOG_LEVEL === "info";
/**
 * true if current process was run with LOG_LEVEL=warn
 */
exports.isWarn = exports.isInfo || LOG_LEVEL === "warn";
/**
 * true if current process was run with LOG_LEVEL=error
 */
exports.isError = exports.isWarn || LOG_LEVEL === "error";
/**
 * true if current process was run with LOG_LEVEL=wtf
 */
exports.isWTF = exports.isError || LOG_LEVEL === "wtf";
exports.isWtf = exports.isWTF;
/********************************** IE COMPATIBILITY (IE_COMPAT) **********************************/
exports.isIECompat = IE_COMPAT;
exports.isIeCompat = exports.isIECompat;
/******************************************* AVOID_WEB ********************************************/
/**
 * Check for env var requesting total avoidance of web
 * e.g. for avoiding use of CDNs, and using local bundles instead
 */
exports.isAvoidWeb = AVOID_WEB;
exports.avoidWeb = exports.isAvoidWeb;
/******************************************** IS_LOCAL ********************************************/
/**
 * true if IS_LOCAL=true, indicating process is running in localhost environment
 *
 * Must be set manually (it doesn't automatically detect local environment)
 */
exports.isLocal = IS_LOCAL;
/**************************************** SKIP_BASIC_AUTH *****************************************/
/**
 * true if process run with SKIP_BASIC_AUTH=true, indicating that basic auth
 * should be shut off
 *
 * Meant to be used when basic auth is conditionally used by a server, often
 * based on deployment environment
 */
exports.isSkipBasicAuth = SKIP_BASIC_AUTH;
exports.skipBasicAuth = exports.isSkipBasicAuth;
exports.doSkipBasicAuth = exports.isSkipBasicAuth;
/************************** TEST ENVIRONMENT (LOADED_MOCHA_OPTS, Mocha) ***************************/
/**
 * true if TEST_MODE was set explicitly to true or false (e.g. TEST_MODE=true)
 */
exports.isTestMode = TEST_MODE && toBool("TEST_MODE", false);
/**
 * true if current script was run via Mocha
 */
exports.isMocha = WAS_RUN_THRU_MOCHA;
exports.isMochaEnv = exports.isMocha;
exports.runByMocha = exports.isMocha;
/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
/**
 * Output value of RELEASE_ENV=something
 * Should be 'dev', 'qa', 'uat', 'prod', 'development', or 'production'
 */
exports.releaseEnv = RELEASE_ENV;
exports.releaseEnvironment = exports.releaseEnv;
/**
 * true if RELEASE_ENV=uat
 */
exports.isReleaseEnvUAT = RELEASE_ENV === "uat";
exports.isUAT = exports.isReleaseEnvUAT;
/**
 * true if RELEASE_ENV=qa
 */
exports.isReleaseEnvQA = RELEASE_ENV === "qa";
exports.isQA = exports.isReleaseEnvQA;
/**
 * true if RELEASE_ENV=dev
 */
exports.isReleaseEnvDev = RELEASE_ENV === "dev" || RELEASE_ENV === "development";
exports.isReleaseEnvDevelopment = exports.isReleaseEnvDev;
/**
 * true if RELEASE_ENV=prod
 */
exports.isReleaseEnvProd = RELEASE_ENV === "prod" || RELEASE_ENV === "production";
exports.isReleaseEnvProduction = exports.isReleaseEnvProd;
/**
 * 3-4 letter version of release environment name (RELEASE_ENV):
 *     dev | qa | uat | prod
 *
 * Default: 'dev'
 */
exports.releaseEnvShort = (function () {
    return exports.releaseEnv === "uat"
        ? "uat"
        : exports.releaseEnv === "prod" || exports.releaseEnv === "production"
            ? "prod"
            : exports.releaseEnv === "qa"
                ? "qa"
                : "dev";
})();
exports.releaseEnvAbbrev = exports.releaseEnvShort;
//# sourceMappingURL=index.js.map