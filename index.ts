declare const process: any;

/**
 * Explicit any (for places that truly take any type - i.e. not a placeholder)
 */
type Any = any;

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
const RAW_IS_LOCAL = process.env.IS_LOCAL;
const RAW_SKIP_BASIC_AUTH = process.env.SKIP_BASIC_AUTH;
/**************************************************************************************************/

/****************************************** TYPE EXPORTS ******************************************/
/**
 * Accepted node environments (NODE_ENV values), including short forms:
 *     development | dev | production | prod
 *
 * Used by e.g. Express & React to determine whether to activate optimizations
 */
export type NodeEnv = 'development' | 'dev' | 'production' | 'prod';

/**
 * Accepted node environments (NODE_ENV values), excluding short forms:
 *     development | production
 *
 * Used by e.g. Express & React to determine whether to activate optimizations
 */
export type NodeEnvFull = 'development' | 'production';

/**
 * Accepted commonly-used release environment names (short- & long-form):
 *     development | dev | qa | uat | production | prod
 *
 * Usually relates to which deployment server the code is currently running on
 */
export type ReleaseEnv = 'development' | 'dev' | 'qa' | 'uat' | 'production' | 'prod';

/**
 * Short forms of names of commonly-used release environments:
 *     dev | prod | qa | uat
 *
 * Usually relates to which deployment server the code is currently running on
 *
 * Short forms often act as an actual added subdomain e.g. qa.example.com
 */
export type ReleaseEnvShort = 'dev' | 'prod' | 'qa' | 'uat';

/**
 * Current level of log verbosity:
 *     trace | silly | debug | verbose | info | warn | error | wtf
 *
 * Lower levels = less logging, higher = more
 *
 * Usually 'warn' or 'error' is used in production, 'info' in normal cases in
 * development, and even lower options when intensively debugging
 *
 * 'trace' also sometimes has specific meanings in other modules
 */
export type LogLevel = 'trace' | 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error' | 'wtf';

/******************************************** HELPERS *********************************************/
const hasVal = (val: Any) => typeof val !== `undefined` && val !== null && val !== ``;

const strToBool = (rawVal: string): boolean => {
    const val = rawVal.toLowerCase();
    return val === `false` || val === `f` ? false : val === `true` || val === `t`;
};

const toBool = (rawVal: string | boolean | null, def: boolean) => {
    // If value not set, return false, or default if given
    if (!hasVal(rawVal)) return hasVal(def) ? def : false;

    // If val is a string, convert from boolean string (e.g. "true") to boolean
    if (typeof rawVal === `string`) return strToBool(rawVal);

    // If val is boolean, return it as-is
    return rawVal;
};

/********************************* GET & PROCESS ENVIRONMENT VALS *********************************/
let NODE_ENV: NodeEnv;
let RELEASE_ENV: ReleaseEnv;
let LOG_LEVEL: LogLevel;
let TEST_MODE: boolean;
let IE_COMPAT: boolean;
let AVOID_WEB: boolean;
let IS_LOCAL: boolean;
let SKIP_BASIC_AUTH: boolean;

// prettier-ignore
{
NODE_ENV        = hasVal(RAW_NODE_ENV)        ? RAW_NODE_ENV.toLowerCase()         : `development`;
RELEASE_ENV     = hasVal(RAW_RELEASE_ENV)     ? RAW_RELEASE_ENV.toLowerCase()      : NODE_ENV;
LOG_LEVEL       = hasVal(RAW_LOG_LEVEL)       ? RAW_LOG_LEVEL.toLowerCase()        : `info`;
TEST_MODE       = hasVal(RAW_TEST_MODE)       ? toBool(RAW_TEST_MODE, false)       : false;
IE_COMPAT       = hasVal(RAW_IE_COMPAT)       ? toBool(RAW_IE_COMPAT, false)       : false;
AVOID_WEB       = hasVal(RAW_AVOID_WEB)       ? toBool(RAW_AVOID_WEB, false)       : false;
IS_LOCAL        = hasVal(RAW_IS_LOCAL)        ? toBool(RAW_mocha, false)           : false;
SKIP_BASIC_AUTH = hasVal(RAW_SKIP_BASIC_AUTH) ? toBool(RAW_SKIP_BASIC_AUTH, false) : false;
}

const WAS_RUN_THRU_MOCHA = hasVal(RAW_LOADED_MOCHA_OPTS) || (RAW_mocha && toBool(RAW_mocha, false));

/**
 * Node environment (NODE_ENV):
 *     development | production
 * Converts short-form to long-form, contains default value if NODE_ENV not set
 */
export const nodeEnv = NODE_ENV.replace(/^dev$/, 'development').replace(
    /^prod$/,
    'production'
) as NodeEnvFull;

/**
 * Directly output log level (LOG_LEVEL env var):
 *     trace | silly | debug | verbose | info | warn | error | wtf
 * Resolves default value
 */
export const logLevel = LOG_LEVEL;

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
export const env = {
    NODE_ENV: nodeEnv,
    LOG_LEVEL: logLevel,
    IE_COMPAT,
    TEST_MODE,
    AVOID_WEB,
    RELEASE_ENV,
    IS_LOCAL,
    SKIP_BASIC_AUTH,
    WAS_RUN_THRU_MOCHA,
};

/******************************************** NODE_ENV ********************************************/
/**
 * true if current process was run with NODE_ENV=development or NODE_ENV=dev
 */
export const isDevelopment = nodeEnv === `development`;
export {isDevelopment as isDev};

/**
 * true if current process was run with NODE_ENV=production or NODE_ENV=prod
 */
export const isProduction = nodeEnv === `production`;
export {isProduction as isProd};

/**
 * true if NODE_ENV=production, TEST_SECURITY=true, or SECURITY_TEST=true
 */
export const prodOrSecurityTest =
    isProduction ||
    (hasVal(RAW_TEST_SECURITY) && toBool(RAW_TEST_SECURITY, false)) ||
    (hasVal(RAW_SECURITY_TEST) && toBool(RAW_SECURITY_TEST, false));

export {prodOrSecurityTest as isProdOrSecurityTest};

/******************************************* LOG_LEVEL ********************************************/
/**
 * true if current process was run with LOG_LEVEL=trace
 */
export const isTrace = LOG_LEVEL === `trace`;

/**
 * true if current process was run with LOG_LEVEL=silly
 */
export const isSilly = isTrace || LOG_LEVEL === `silly`;

/**
 * true if current process was run with LOG_LEVEL=verbose
 */
export const isVerbose = isSilly || LOG_LEVEL === `verbose`;

/**
 * true if current process was run with LOG_LEVEL=debug
 */
export const isDebug = isVerbose || LOG_LEVEL === `debug`;

/**
 * true if current process was run with LOG_LEVEL=info
 */
export const isInfo = isDebug || LOG_LEVEL === `info`;

/**
 * true if current process was run with LOG_LEVEL=warn
 */
export const isWarn = isInfo || LOG_LEVEL === `warn`;

/**
 * true if current process was run with LOG_LEVEL=error
 */
export const isError = isWarn || LOG_LEVEL === `error`;

/**
 * true if current process was run with LOG_LEVEL=wtf
 */
export const isWTF = isError || LOG_LEVEL === `wtf`;
export {isWTF as isWtf};

/********************************** IE COMPATIBILITY (IE_COMPAT) **********************************/
export const isIECompat = IE_COMPAT;
export {isIECompat as isIeCompat};

/******************************************* AVOID_WEB ********************************************/
/**
 * Check for env var requesting total avoidance of web
 * e.g. for avoiding use of CDNs, and using local bundles instead
 */
export const isAvoidWeb = AVOID_WEB;
export {isAvoidWeb as avoidWeb};

/******************************************** IS_LOCAL ********************************************/
/**
 * true if IS_LOCAL=true, indicating process is running in localhost environment
 *
 * Must be set manually (it doesn't automatically detect local environment)
 */
export const isLocal = IS_LOCAL;

/**************************************** SKIP_BASIC_AUTH *****************************************/
/**
 * true if process run with SKIP_BASIC_AUTH=true, indicating that basic auth
 * should be shut off
 *
 * Meant to be used when basic auth is conditionally used by a server, often
 * based on deployment environment
 */
export const isSkipBasicAuth = SKIP_BASIC_AUTH;
export {isSkipBasicAuth as skipBasicAuth};
export {isSkipBasicAuth as doSkipBasicAuth};

/************************** TEST ENVIRONMENT (LOADED_MOCHA_OPTS, Mocha) ***************************/
/**
 * true if TEST_MODE was set explicitly to true or false (e.g. TEST_MODE=true)
 */
export const isTestMode = TEST_MODE && toBool(`TEST_MODE`, false);

/**
 * true if current script was run via Mocha
 */
export const isMocha = WAS_RUN_THRU_MOCHA;
export {isMocha as isMochaEnv};
export {isMocha as runByMocha};

/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
/**
 * Output value of RELEASE_ENV=something
 * Should be 'dev', 'qa', 'uat', 'prod', 'development', or 'production'
 */
export const releaseEnv = RELEASE_ENV;
export {releaseEnv as releaseEnvironment};

/**
 * true if RELEASE_ENV=uat
 */
export const isReleaseEnvUAT = RELEASE_ENV === `uat`;
export {isReleaseEnvUAT as isUAT};

/**
 * true if RELEASE_ENV=qa
 */
export const isReleaseEnvQA = RELEASE_ENV === `qa`;
export {isReleaseEnvQA as isQA};

/**
 * true if RELEASE_ENV=dev
 */
export const isReleaseEnvDev = RELEASE_ENV === `dev` || RELEASE_ENV === `development`;
export {isReleaseEnvDev as isReleaseEnvDevelopment};

/**
 * true if RELEASE_ENV=prod
 */
export const isReleaseEnvProd = RELEASE_ENV === `prod` || RELEASE_ENV === `production`;
export {isReleaseEnvProd as isReleaseEnvProduction};

/**
 * 3-4 letter version of release environment name (RELEASE_ENV):
 *     dev | qa | uat | prod
 *
 * Default: 'dev'
 */
export const releaseEnvShort: ReleaseEnvShort = (function() {
    return isReleaseEnvProd ? `prod` : isReleaseEnvUAT ? `uat` : isReleaseEnvQA ? `qa` : `dev`;
})();

export {releaseEnvShort as releaseEnvAbbrev};

/**
 * true if in development mode, but not on either QA, UAT, or prod release
 * environment
 *
 * i.e. true if NODE_ENV=dev and RELEASE_ENV isn't qa, uat, or prod
 *
 * Reason: sometimes we want to do things in development and treat QA and/or
 * UAT as a development environment, but explicitly not do an action in a
 * release environment (mainly QA or UAT)
 */
export const isDevNonReleaseEnv =
    isDevelopment && !isReleaseEnvQA && !isReleaseEnvUAT && !isReleaseEnvProd;

export {isDevNonReleaseEnv as isDevNotQaUat}
export {isDevNonReleaseEnv as isDevNotQaUatProd}
