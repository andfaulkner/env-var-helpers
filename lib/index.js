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
var toBool = function toBool(val, def) {
    return val === "true" || val === true ? true : val === "false" || val === false ? false : def;
};
var hasVal = function hasVal(val) {
    return typeof val !== "undefined" && val !== null && val !== "";
};
/********************************* GET & PROCESS ENVIRONMENT VALS *********************************/
var NODE_ENV = hasVal(RAW_NODE_ENV) ? RAW_NODE_ENV.toLowerCase() : "development";
var RELEASE_ENV = hasVal(RAW_RELEASE_ENV) ? RAW_RELEASE_ENV.toLowerCase() : NODE_ENV;
var LOG_LEVEL = hasVal(RAW_LOG_LEVEL) ? RAW_LOG_LEVEL.toLowerCase() : "info";
var TEST_MODE = hasVal(RAW_TEST_MODE) ? toBool(RAW_TEST_MODE, false) : false;
var IE_COMPAT = hasVal(RAW_IE_COMPAT) ? toBool(RAW_IE_COMPAT, false) : false;
var AVOID_WEB = hasVal(RAW_AVOID_WEB) ? toBool(RAW_AVOID_WEB, false) : false;
var WAS_RUN_THRU_MOCHA = hasVal(RAW_LOADED_MOCHA_OPTS) || (RAW_mocha && toBool(RAW_mocha, false));
var IS_LOCAL = hasVal(RAW_IS_LOCAL) ? toBool(RAW_mocha, false) : false;
var SKIP_BASIC_AUTH = hasVal(RAW_SKIP_BASIC_AUTH) ? toBool(RAW_SKIP_BASIC_AUTH, false) : false;
/**
 * Node environment - either 'development' or 'production'
 */
exports.nodeEnv = NODE_ENV.replace(/^dev$/, 'development').replace(/^prod$/, 'production');
/**
 * Namespace for direct access to environment variables:
 *     NODE_ENV, LOG_LEVEL, IE_COMPAT, TEST_MODE, AVOID_WEB, WAS_RUN_THRU_MOCHA,
 *     RELEASE_ENV, IS_LOCAL
 */
exports.env = {
    NODE_ENV: exports.nodeEnv,
    LOG_LEVEL: LOG_LEVEL,
    IE_COMPAT: IE_COMPAT,
    TEST_MODE: TEST_MODE,
    AVOID_WEB: AVOID_WEB,
    WAS_RUN_THRU_MOCHA: WAS_RUN_THRU_MOCHA,
    RELEASE_ENV: RELEASE_ENV,
    IS_LOCAL: IS_LOCAL,
    SKIP_BASIC_AUTH: SKIP_BASIC_AUTH,
};
/******************************************** NODE_ENV ********************************************/
/**
 * True if current process was run with NODE_ENV=development or NODE_ENV=dev
 */
exports.isDevelopment = NODE_ENV === "development" || NODE_ENV === "dev";
exports.isDev = exports.isDevelopment;
/**
 * True if current process was run with NODE_ENV=production or NODE_ENV=prod
 */
exports.isProduction = NODE_ENV === "production" || NODE_ENV === "prod";
exports.isProd = exports.isProduction;
/**
 * True if NODE_ENV is production, or TEST_SECURITY or SECURITY_TEST are true
 */
exports.prodOrSecurityTest = exports.isProduction ||
    (hasVal(RAW_TEST_SECURITY) && toBool(RAW_TEST_SECURITY, false)) ||
    (hasVal(RAW_SECURITY_TEST) && toBool(RAW_SECURITY_TEST, false));
exports.isProdOrSecurityTest = exports.prodOrSecurityTest;
/******************************************* LOG_LEVEL ********************************************/
/**
 * True if current process was run with LOG_LEVEL=trace
 */
exports.isTrace = LOG_LEVEL === "trace";
/**
 * True if current process was run with LOG_LEVEL=silly
 */
exports.isSilly = exports.isTrace || LOG_LEVEL === "silly";
/**
 * True if current process was run with LOG_LEVEL=verbose
 */
exports.isVerbose = exports.isSilly || LOG_LEVEL === "verbose";
/**
 * True if current process was run with LOG_LEVEL=debug
 */
exports.isDebug = exports.isVerbose || LOG_LEVEL === "debug";
/**
 * True if current process was run with LOG_LEVEL=info
 */
exports.isInfo = exports.isDebug || LOG_LEVEL === "info";
/**
 * True if current process was run with LOG_LEVEL=warn
 */
exports.isWarn = exports.isInfo || LOG_LEVEL === "warn";
/**
 * True if current process was run with LOG_LEVEL=error
 */
exports.isError = exports.isWarn || LOG_LEVEL === "error";
/**
 * True if current process was run with LOG_LEVEL=wtf
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
 * Check for env var implying local/localhost environment
 */
exports.isLocal = IS_LOCAL;
/**************************************** SKIP_BASIC_AUTH *****************************************/
/**
 * If true, SKIP_BASIC_AUTH=true, indicating that basic auth should be shut off
 *
 * Meant to be used when basic auth is conditionally used by a server, often
 * based on specific routes or deployment environment, or both
 */
exports.isSkipBasicAuth = SKIP_BASIC_AUTH;
exports.skipBasicAuth = exports.isSkipBasicAuth;
exports.doSkipBasicAuth = exports.isSkipBasicAuth;
/************************** TEST ENVIRONMENT (LOADED_MOCHA_OPTS, Mocha) ***************************/
/**
 * For cases where TEST_MODE was run explicitly
 */
exports.isTestMode = TEST_MODE && toBool("TEST_MODE", false);
/**
 * Check if current script was run via Mocha
 */
exports.isMocha = WAS_RUN_THRU_MOCHA;
exports.isMochaEnv = exports.isMocha;
exports.runByMocha = exports.isMocha;
/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
/**
 * Directly output the value set with RELEASE_ENV=something
 * Should be dev, qa, uat, prod, development, or production
 */
exports.releaseEnv = RELEASE_ENV;
exports.releaseEnvironment = exports.releaseEnv;
/**
 * Return true if RELEASE_ENV=uat
 */
exports.isReleaseEnvUAT = RELEASE_ENV === "uat";
exports.isUAT = exports.isReleaseEnvUAT;
/**
 * Return true if RELEASE_ENV=qa
 */
exports.isReleaseEnvQA = RELEASE_ENV === "qa";
exports.isQA = exports.isReleaseEnvQA;
/**
 * Return true if RELEASE_ENV=dev
 */
exports.isReleaseEnvDev = RELEASE_ENV === "dev" || RELEASE_ENV === "development";
exports.isReleaseEnvDevelopment = exports.isReleaseEnvDev;
/**
 * Return true if RELEASE_ENV=prod
 */
exports.isReleaseEnvProd = RELEASE_ENV === "prod" || RELEASE_ENV === "production";
exports.isReleaseEnvProduction = exports.isReleaseEnvProd;
/**
 * 3-4 letter version of release environment name (Default: `dev`)
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