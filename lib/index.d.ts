/**************************************************************************************************/
/****************************************** TYPE EXPORTS ******************************************/
/**
 * Accepted node environments: 'development' | 'dev' | 'production' | 'prod'
 * Used by e.g. Express to determine whether to activate optimizations
 */
export declare type NodeEnv = 'development' | 'dev' | 'production' | 'prod';
/**
 * Accepted commonly-used release environments:
 *     development | dev | qa | uat | production | prod
 * Usually relates to which deployment server the code is currently being run on
 */
export declare type ReleaseEnv = 'development' | 'dev' | 'qa' | 'uat' | 'production' | 'prod';
/**
 * Short forms of names of commonly-used release environments
 *     dev | prod | qa | uat
 * Usually relates to which deployment server the code is currently being run on
 * Short forms often act as an actual added subdomain e.g. qa.example.com
 */
export declare type ReleaseEnvShort = 'dev' | 'prod' | 'qa' | 'uat';
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
export declare type LogLevel = 'trace' | 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error' | 'wtf';
/**
 * Namespace for direct access to environment variables:
 *     NODE_ENV, LOG_LEVEL, IE_COMPAT, TEST_MODE, AVOID_WEB, WAS_RUN_THRU_MOCHA,
 *     RELEASE_ENV, IS_LOCAL
 */
export declare const env: {
    NODE_ENV: NodeEnv;
    LOG_LEVEL: LogLevel;
    IE_COMPAT: boolean;
    TEST_MODE: boolean;
    AVOID_WEB: boolean;
    WAS_RUN_THRU_MOCHA: boolean;
    RELEASE_ENV: ReleaseEnv;
    IS_LOCAL: boolean;
    SKIP_BASIC_AUTH: boolean;
};
/******************************************** NODE_ENV ********************************************/
/**
 * True if current process was run with NODE_ENV=development or NODE_ENV=dev
 */
export declare const isDevelopment: boolean;
export { isDevelopment as isDev };
/**
 * True if current process was run with NODE_ENV=production or NODE_ENV=prod
 */
export declare const isProduction: boolean;
export { isProduction as isProd };
/**
 * True if NODE_ENV is production, or TEST_SECURITY or SECURITY_TEST are true
 */
export declare const prodOrSecurityTest: boolean;
export { prodOrSecurityTest as isProdOrSecurityTest };
/******************************************* LOG_LEVEL ********************************************/
/**
 * True if current process was run with LOG_LEVEL=trace
 */
export declare const isTrace: boolean;
/**
 * True if current process was run with LOG_LEVEL=silly
 */
export declare const isSilly: boolean;
/**
 * True if current process was run with LOG_LEVEL=verbose
 */
export declare const isVerbose: boolean;
/**
 * True if current process was run with LOG_LEVEL=debug
 */
export declare const isDebug: boolean;
/**
 * True if current process was run with LOG_LEVEL=info
 */
export declare const isInfo: boolean;
/**
 * True if current process was run with LOG_LEVEL=warn
 */
export declare const isWarn: boolean;
/**
 * True if current process was run with LOG_LEVEL=error
 */
export declare const isError: boolean;
/**
 * True if current process was run with LOG_LEVEL=wtf
 */
export declare const isWTF: boolean;
export { isWTF as isWtf };
/********************************** IE COMPATIBILITY (IE_COMPAT) **********************************/
export declare const isIECompat: boolean;
export { isIECompat as isIeCompat };
/******************************************* AVOID_WEB ********************************************/
/**
 * Check for env var requesting total avoidance of web
 * e.g. for avoiding use of CDNs, and using local bundles instead
 */
export declare const isAvoidWeb: boolean;
export { isAvoidWeb as avoidWeb };
/******************************************** IS_LOCAL ********************************************/
/**
 * Check for env var implying local/localhost environment
 */
export declare const isLocal: boolean;
/**************************************** SKIP_BASIC_AUTH *****************************************/
/**
 * If true, SKIP_BASIC_AUTH=true, indicating that basic auth should be shut off
 * Meant to be used when basic auth is conditionally used by a server, often
 * based on specific routes or deployment environment, or both
 */
export declare const isSkipBasicAuth: boolean;
export { isSkipBasicAuth as skipBasicAuth };
export { isSkipBasicAuth as doSkipBasicAuth };
/************************** TEST ENVIRONMENT (LOADED_MOCHA_OPTS, Mocha) ***************************/
/**
 * For cases where TEST_MODE was run explicitly
 */
export declare const isTestMode: boolean;
/**
 * Check if current script was run via Mocha
 */
export declare const isMocha: boolean;
export { isMocha as isMochaEnv };
export { isMocha as runByMocha };
/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
/**
 * Directly output the value set with RELEASE_ENV=something
 * Should be dev, qa, uat, prod, development, or production
 */
export declare const releaseEnv: ReleaseEnv;
export { releaseEnv as releaseEnvironment };
/**
 * Return true if RELEASE_ENV=uat
 */
export declare const isReleaseEnvUAT: boolean;
export { isReleaseEnvUAT as isUAT };
/**
 * Return true if RELEASE_ENV=qa
 */
export declare const isReleaseEnvQA: boolean;
export { isReleaseEnvQA as isQA };
/**
 * Return true if RELEASE_ENV=dev
 */
export declare const isReleaseEnvDev: boolean;
export { isReleaseEnvDev as isReleaseEnvDevelopment };
/**
 * Return true if RELEASE_ENV=prod
 */
export declare const isReleaseEnvProd: boolean;
export { isReleaseEnvProd as isReleaseEnvProduction };
/**
 * 3-4 letter version of release environment name (Default: `dev`)
 */
export declare const releaseEnvShort: ReleaseEnvShort;
export { releaseEnvShort as releaseEnvAbbrev };
