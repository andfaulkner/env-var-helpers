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
/**************************************************************************************************/

/****************************************** TYPE EXPORTS ******************************************/
/**
 * Accepted node environments: 'development' | 'dev' | 'production' | 'prod'
 * Used by e.g. Express to determine whether to activate optimizations
 */
export type NodeEnv = 'development' | 'dev' | 'production' | 'prod';

/**
 * Accepted commonly-used release environments:
 *     development | dev | qa | uat | production | prod
 * Usually relates to which deployment server the code is currently being run on
 */
export type ReleaseEnv = 'development' | 'dev' | 'qa' | 'uat' | 'production' | 'prod';

/**
 * Short forms of names of commonly-used release environments
 *     dev | prod | qa | uat
 * Usually relates to which deployment server the code is currently being run on
 * Short forms often act as an actual added subdomain e.g. qa.example.com
 */
export type ReleaseEnvShort = 'dev' | 'prod' | 'qa' | 'uat';

/**
 * Current level of logging:
 *     trace | silly | debug | verbose | info | warn | error | wtf
 * Lower levels = less logging, higher = more
 *
 * Usually 'warn' or 'error' is used in production, 'info' in normal cases in
 * dev, and the even lower options when intensively debugging
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

/**
 * Namespace for direct access to environment variables:
 *     NODE_ENV, LOG_LEVEL, IE_COMPAT, TEST_MODE, AVOID_WEB, WAS_RUN_THRU_MOCHA,
 *     RELEASE_ENV, IS_LOCAL
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
};

/******************************************** NODE_ENV ********************************************/
/**
 * True if current process was run with NODE_ENV=development or NODE_ENV=dev
 */
export const isDevelopment = NODE_ENV === `development` || NODE_ENV === `dev`;
export {isDevelopment as isDev};

/**
 * True if current process was run with NODE_ENV=production or NODE_ENV=prod
 */
export const isProduction = NODE_ENV === `production` || NODE_ENV === `prod`;
export {isProduction as isProd};

/**
 * True if NODE_ENV is production, or TEST_SECURITY or SECURITY_TEST are true
 */
export const prodOrSecurityTest =
    isProd ||
    (hasVal(RAW_TEST_SECURITY) && toBool(RAW_TEST_SECURITY, false)) ||
    (hasVal(RAW_SECURITY_TEST) && toBool(RAW_SECURITY_TEST, false));

export {prodOrSecurityTest as isProdOrSecurityTest};

/******************************************* LOG_LEVEL ********************************************/
/**
 * True if current process was run with LOG_LEVEL=trace
 */
export const isTrace = LOG_LEVEL === `trace`;

/**
 * True if current process was run with LOG_LEVEL=silly
 */
export const isSilly = isTrace || LOG_LEVEL === `silly`;

/**
 * True if current process was run with LOG_LEVEL=verbose
 */
export const isVerbose = isSilly || LOG_LEVEL === `verbose`;

/**
 * True if current process was run with LOG_LEVEL=debug
 */
export const isDebug = isVerbose || LOG_LEVEL === `debug`;

/**
 * True if current process was run with LOG_LEVEL=info
 */
export const isInfo = isDebug || LOG_LEVEL === `info`;

/**
 * True if current process was run with LOG_LEVEL=warn
 */
export const isWarn = isInfo || LOG_LEVEL === `warn`;

/**
 * True if current process was run with LOG_LEVEL=error
 */
export const isError = isWarn || LOG_LEVEL === `error`;

/**
 * True if current process was run with LOG_LEVEL=wtf
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
 * Check for env var implying local/localhost environment
 */
export const isLocal = IS_LOCAL;

/************************** TEST ENVIRONMENT (LOADED_MOCHA_OPTS, Mocha) ***************************/
/**
 * For cases where TEST_MODE was run explicitly
 */
export const isTestMode = TEST_MODE && toBool(`TEST_MODE`, false);

/**
 * Check if current script was run via Mocha
 */
export const isMocha = WAS_RUN_THRU_MOCHA;
export {isMocha as isMochaEnv};
export {isMocha as runByMocha};

/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
/**
 * Directly output the value set with RELEASE_ENV=something
 * Should be dev, qa, uat, prod, development, or production
 */
export const releaseEnv = RELEASE_ENV;
export {releaseEnv as releaseEnvironment};

/**
 * Return true if RELEASE_ENV=uat
 */
export const isReleaseEnvUAT = RELEASE_ENV === `uat`;
export {isReleaseEnvUAT as isUAT};

/**
 * Return true if RELEASE_ENV=qa
 */
export const isReleaseEnvQA = RELEASE_ENV === `qa`;
export {isReleaseEnvQA as isQA};

/**
 * Return true if RELEASE_ENV=dev
 */
export const isReleaseEnvDev = RELEASE_ENV === `dev` || RELEASE_ENV === `development`;
export {isReleaseEnvDev as isReleaseEnvDevelopment};

/**
 * Return true if RELEASE_ENV=prod
 */
export const isReleaseEnvProd = RELEASE_ENV === `prod` || RELEASE_ENV === `production`;
export {isReleaseEnvProd as isReleaseEnvProduction};

/**
 * 3-4 letter version of release environment name (Default: `dev`)
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
