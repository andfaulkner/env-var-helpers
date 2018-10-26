/**************************************************************************************************/
/****************************************** TYPE EXPORTS ******************************************/
/**
 * Accepted node environments (NODE_ENV values), including short forms:
 *     development | dev | production | prod
 *
 * Used by e.g. Express & React to determine whether to activate optimizations
 */
export declare type NodeEnv = 'development' | 'dev' | 'production' | 'prod';
/**
 * Accepted node environments (NODE_ENV values), excluding short forms:
 *     development | production
 *
 * Used by e.g. Express & React to determine whether to activate optimizations
 */
export declare type NodeEnvFull = 'development' | 'production';
/**
 * Accepted commonly-used release environment names (short- & long-form):
 *     development | dev | qa | uat | production | prod
 *
 * Usually relates to which deployment server the code is currently running on
 */
export declare type ReleaseEnv = 'development' | 'dev' | 'qa' | 'uat' | 'production' | 'prod';
/**
 * Short forms of names of commonly-used release environments:
 *     dev | prod | qa | uat
 *
 * Usually relates to which deployment server the code is currently running on
 *
 * Short forms often act as an actual added subdomain e.g. qa.example.com
 */
export declare type ReleaseEnvShort = 'dev' | 'prod' | 'qa' | 'uat';
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
export declare type LogLevel = 'trace' | 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error' | 'wtf';
/**
 * Node environment (NODE_ENV):
 *     development | production
 * Converts short-form to long-form, contains default value if NODE_ENV not set
 */
export declare const nodeEnv: NodeEnvFull;
/**
 * Directly output log level (LOG_LEVEL env var):
 *     trace | silly | debug | verbose | info | warn | error | wtf
 * Resolves default value
 */
export declare const logLevel: LogLevel;
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
export declare const env: {
    NODE_ENV: NodeEnvFull;
    LOG_LEVEL: LogLevel;
    IE_COMPAT: boolean;
    TEST_MODE: boolean;
    AVOID_WEB: boolean;
    RELEASE_ENV: ReleaseEnv;
    IS_LOCAL: boolean;
    SKIP_BASIC_AUTH: boolean;
    WAS_RUN_THRU_MOCHA: boolean;
};
/******************************************** NODE_ENV ********************************************/
/**
 * true if current process was run with NODE_ENV=development or NODE_ENV=dev
 */
export declare const isDevelopment: boolean;
export { isDevelopment as isDev };
/**
 * true if current process was run with NODE_ENV=production or NODE_ENV=prod
 */
export declare const isProduction: boolean;
export { isProduction as isProd };
/**
 * true if NODE_ENV=production, TEST_SECURITY=true, or SECURITY_TEST=true
 */
export declare const prodOrSecurityTest: boolean;
export { prodOrSecurityTest as isProdOrSecurityTest };
/******************************************* LOG_LEVEL ********************************************/
/**
 * true if current process was run with LOG_LEVEL=trace
 */
export declare const isTrace: boolean;
/**
 * true if current process was run with LOG_LEVEL=silly
 */
export declare const isSilly: boolean;
/**
 * true if current process was run with LOG_LEVEL=verbose
 */
export declare const isVerbose: boolean;
/**
 * true if current process was run with LOG_LEVEL=debug
 */
export declare const isDebug: boolean;
/**
 * true if current process was run with LOG_LEVEL=info
 */
export declare const isInfo: boolean;
/**
 * true if current process was run with LOG_LEVEL=warn
 */
export declare const isWarn: boolean;
/**
 * true if current process was run with LOG_LEVEL=error
 */
export declare const isError: boolean;
/**
 * true if current process was run with LOG_LEVEL=wtf
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
 * true if IS_LOCAL=true, indicating process is running in localhost environment
 *
 * Must be set manually (it doesn't automatically detect local environment)
 */
export declare const isLocal: boolean;
/**************************************** SKIP_BASIC_AUTH *****************************************/
/**
 * true if process run with SKIP_BASIC_AUTH=true, indicating that basic auth
 * should be shut off
 *
 * Meant to be used when basic auth is conditionally used by a server, often
 * based on deployment environment
 */
export declare const isSkipBasicAuth: boolean;
export { isSkipBasicAuth as skipBasicAuth };
export { isSkipBasicAuth as doSkipBasicAuth };
/************************** TEST ENVIRONMENT (LOADED_MOCHA_OPTS, Mocha) ***************************/
/**
 * true if TEST_MODE was set explicitly to true or false (e.g. TEST_MODE=true)
 */
export declare const isTestMode: boolean;
/**
 * true if current script was run via Mocha
 */
export declare const isMocha: boolean;
export { isMocha as isMochaEnv };
export { isMocha as runByMocha };
/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
/**
 * Output value of RELEASE_ENV=something
 * Should be 'dev', 'qa', 'uat', 'prod', 'development', or 'production'
 */
export declare const releaseEnv: ReleaseEnv;
export { releaseEnv as releaseEnvironment };
/**
 * true if RELEASE_ENV=uat
 */
export declare const isReleaseEnvUAT: boolean;
export { isReleaseEnvUAT as isUAT };
/**
 * true if RELEASE_ENV=qa
 */
export declare const isReleaseEnvQA: boolean;
export { isReleaseEnvQA as isQA };
/**
 * true if RELEASE_ENV=dev
 */
export declare const isReleaseEnvDev: boolean;
export { isReleaseEnvDev as isReleaseEnvDevelopment };
/**
 * true if RELEASE_ENV=prod
 */
export declare const isReleaseEnvProd: boolean;
export { isReleaseEnvProd as isReleaseEnvProduction };
/**
 * 3-4 letter version of release environment name (RELEASE_ENV):
 *     dev | qa | uat | prod
 *
 * Default: 'dev'
 */
export declare const releaseEnvShort: ReleaseEnvShort;
export { releaseEnvShort as releaseEnvAbbrev };
