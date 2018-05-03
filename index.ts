declare const process: any;

/****************************************** TYPE EXPORTS ******************************************/
export type NodeEnv = 'development' | 'dev' | 'production' | 'prod';
export type ReleaseEnv = 'development' | 'dev' | 'qa' | 'uat' | 'production' | 'prod';
export type ReleaseEnvShort = 'dev' | 'prod' | 'qa' | 'uat';
export type LogLevel = 'trace' | 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error' | 'wtf';

/******************************************** HELPERS *********************************************/
const toBool = function toBool(val, def) {
    return val === 'true' || val === true ? true : val === 'false' || val === false ? false : def;
}
const hasVal = function hasVal(val) {
    return typeof val !== 'undefined' && val !== null && val !== '';
}

// Raw environment variables, extracted from process.env
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

/********************************* GET & PROCESS ENVIRONMENT VALS *********************************/
const NODE_ENV: NodeEnv = hasVal(RAW_NODE_ENV) ? RAW_NODE_ENV.toLowerCase() : 'development';
const RELEASE_ENV: ReleaseEnv = hasVal(RAW_RELEASE_ENV) ? RAW_RELEASE_ENV.toLowerCase() : NODE_ENV;
const LOG_LEVEL = hasVal(RAW_LOG_LEVEL) ? RAW_LOG_LEVEL.toLowerCase() : 'info';
const TEST_MODE = hasVal(RAW_TEST_MODE) ? toBool(RAW_TEST_MODE, false) : false;
const IE_COMPAT = hasVal(RAW_IE_COMPAT) ? toBool(RAW_IE_COMPAT, false) : false;
const AVOID_WEB = hasVal(RAW_AVOID_WEB) ? toBool(RAW_AVOID_WEB, false) : false;

const WAS_RUN_THRU_MOCHA = hasVal(RAW_LOADED_MOCHA_OPTS) || (RAW_mocha && toBool(RAW_mocha, false));

export const env = {
    NODE_ENV,
    LOG_LEVEL,
    IE_COMPAT,
    TEST_MODE,
    AVOID_WEB,
    WAS_RUN_THRU_MOCHA,
    RELEASE_ENV,
};

/******************************************** NODE_ENV ********************************************/
export const isDev = NODE_ENV === 'development' || NODE_ENV === 'dev';
export {isDev as isDevelopment};

export const isProd = NODE_ENV === 'production' || NODE_ENV === 'prod';
export {isProd as isProduction};

// True if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true
export const prodOrSecurityTest =
    isProd ||
    (hasVal(RAW_TEST_SECURITY) && toBool(RAW_TEST_SECURITY, false)) ||
    (hasVal(RAW_SECURITY_TEST) && toBool(RAW_SECURITY_TEST, false));

export {prodOrSecurityTest as isProdOrSecurityTest};

/******************************************* LOG LEVEL ********************************************/
export const isTrace = LOG_LEVEL === 'trace';
export const isSilly = isTrace || LOG_LEVEL === 'silly';
export const isVerbose = isSilly || LOG_LEVEL === 'verbose';
export const isDebug = isVerbose || LOG_LEVEL === 'debug';
export const isInfo = isDebug || LOG_LEVEL === 'info';
export const isWarn = isInfo || LOG_LEVEL === 'warn';
export const isError = isWarn || LOG_LEVEL === 'error';
export const isWTF = isError || LOG_LEVEL === 'wtf';

/******************************************** ALIASES *********************************************/
export {isWTF as isWtf};

/**************************************** IE COMPATIBILITY ****************************************/
export const isIECompat = IE_COMPAT;
export {isIECompat as isIeCompat};

// Check for env var requesting total avoidance of web; e.g. no CDNs (local bundles use instead)
export const isAvoidWeb = AVOID_WEB;
export {isAvoidWeb as avoidWeb};

/**************************************** TEST ENVIRONMENT ****************************************/
// For cases where TEST_MODE was run explicitly
export const isTestMode = TEST_MODE && toBool('TEST_MODE', false);

// Check if current script was run via Mocha
export const isMocha = WAS_RUN_THRU_MOCHA;
export {isMocha as isMochaEnv};
export {isMocha as runByMocha};

/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
export const releaseEnv = RELEASE_ENV;
export {releaseEnv as releaseEnvironment};

export const isReleaseEnvUAT = RELEASE_ENV === 'uat';
export {isReleaseEnvUAT as isUAT};

export const isReleaseEnvQA = RELEASE_ENV === 'qa';
export {isReleaseEnvQA as isQA};

export const isReleaseEnvDev = RELEASE_ENV === 'dev' || RELEASE_ENV === 'development';
export {isReleaseEnvDev as isReleaseEnvDevelopment};

export const isReleaseEnvProd = RELEASE_ENV === 'prod' || RELEASE_ENV === 'production';
export {isReleaseEnvProd as isReleaseEnvProduction};

/**
 * 3-4 letter version of release environment name. Default: 'dev'
 */
export const releaseEnvShort: ReleaseEnvShort = (function() {
    return releaseEnv === 'uat'
        ? 'uat'
        : releaseEnv === 'prod' || releaseEnv === 'production'
            ? 'prod'
            : releaseEnv === 'qa'
                ? 'qa'
                : 'dev';
})();

export {releaseEnvShort as releaseEnvAbbrev};
