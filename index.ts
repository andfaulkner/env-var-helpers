declare const process: any;

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
const toBool = function toBool(val, def): boolean {
    return val === `true` || val === true ? true : val === `false` || val === false ? false : def;
};
const hasVal = function hasVal(val): boolean {
    return typeof val !== `undefined` && val !== null && val !== ``;
};

/********************************* GET & PROCESS ENVIRONMENT VALS *********************************/
const NODE_ENV: NodeEnv = hasVal(RAW_NODE_ENV) ? RAW_NODE_ENV.toLowerCase() : `development`;
const RELEASE_ENV: ReleaseEnv = hasVal(RAW_RELEASE_ENV) ? RAW_RELEASE_ENV.toLowerCase() : NODE_ENV;
const LOG_LEVEL: LogLevel = hasVal(RAW_LOG_LEVEL) ? RAW_LOG_LEVEL.toLowerCase() : `info`;
const TEST_MODE = hasVal(RAW_TEST_MODE) ? toBool(RAW_TEST_MODE, false) : false;
const IE_COMPAT = hasVal(RAW_IE_COMPAT) ? toBool(RAW_IE_COMPAT, false) : false;
const AVOID_WEB = hasVal(RAW_AVOID_WEB) ? toBool(RAW_AVOID_WEB, false) : false;
const WAS_RUN_THRU_MOCHA = hasVal(RAW_LOADED_MOCHA_OPTS) || (RAW_mocha && toBool(RAW_mocha, false));
const IS_LOCAL = hasVal(RAW_IS_LOCAL) ? toBool(RAW_mocha, false) : false;
const SKIP_BASIC_AUTH = hasVal(RAW_SKIP_BASIC_AUTH) ? toBool(RAW_SKIP_BASIC_AUTH, false) : false;

/**
 * Node environment - either 'development' or 'production'
 */
export const nodeEnv = (NODE_ENV.replace(/^dev$/, 'development').replace(
    /^prod$/,
    'production'
) as NodeEnvFull);

/**
 * Namespace for direct access to environment variables:
 *     NODE_ENV
 *     LOG_LEVEL
 *     IE_COMPAT
 *     TEST_MODE
 *     AVOID_WEB
 *     WAS_RUN_THRU_MOCHA
 *     RELEASE_ENV
 *     IS_LOCAL
 *     SKIP_BASIC_AUTH
 */
export const env = {
    NODE_ENV,
    LOG_LEVEL,
    IE_COMPAT,
    TEST_MODE,
    AVOID_WEB,
    WAS_RUN_THRU_MOCHA,
    RELEASE_ENV,
    IS_LOCAL,
    SKIP_BASIC_AUTH,
};

/******************************************** NODE_ENV ********************************************/
/**
 * true if current process was run with NODE_ENV=development or NODE_ENV=dev
 */
export const isDevelopment = NODE_ENV === `development` || NODE_ENV === `dev`;
export {isDevelopment as isDev};

/**
 * true if current process was run with NODE_ENV=production or NODE_ENV=prod
 */
export const isProduction = NODE_ENV === `production` || NODE_ENV === `prod`;
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
 * 3-4 letter version of release environment name
 * Should be 'dev' | 'qa' | 'uat' | 'prod'
 *
 * Default: `dev`
 */
export const releaseEnvShort: ReleaseEnvShort = (function() {
    return releaseEnv === `uat`
        ? `uat`
        : releaseEnv === `prod` || releaseEnv === `production`
            ? `prod`
            : releaseEnv === `qa`
                ? `qa`
                : `dev`;
})();

export {releaseEnvShort as releaseEnvAbbrev};
