/**************************************************************************************************/
/****************************************** TYPE EXPORTS ******************************************/
export declare type NodeEnv = 'development' | 'dev' | 'production' | 'prod';
export declare type ReleaseEnv = 'development' | 'dev' | 'qa' | 'uat' | 'production' | 'prod';
export declare type ReleaseEnvShort = 'dev' | 'prod' | 'qa' | 'uat';
export declare type LogLevel = 'trace' | 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error' | 'wtf';
export declare const env: {
    NODE_ENV: NodeEnv;
    LOG_LEVEL: LogLevel;
    IE_COMPAT: boolean;
    TEST_MODE: boolean;
    AVOID_WEB: boolean;
    WAS_RUN_THRU_MOCHA: boolean;
    RELEASE_ENV: ReleaseEnv;
    IS_LOCAL: boolean;
};
/******************************************** NODE_ENV ********************************************/
export declare const isDev: boolean;
export { isDev as isDevelopment };
export declare const isProd: boolean;
export { isProd as isProduction };
export declare const prodOrSecurityTest: boolean;
export { prodOrSecurityTest as isProdOrSecurityTest };
/******************************************* LOG_LEVEL ********************************************/
export declare const isTrace: boolean;
export declare const isSilly: boolean;
export declare const isVerbose: boolean;
export declare const isDebug: boolean;
export declare const isInfo: boolean;
export declare const isWarn: boolean;
export declare const isError: boolean;
export declare const isWTF: boolean;
export { isWTF as isWtf };
/********************************** IE COMPATIBILITY (IE_COMPAT) **********************************/
export declare const isIECompat: boolean;
export { isIECompat as isIeCompat };
/******************************************* AVOID_WEB ********************************************/
export declare const isAvoidWeb: boolean;
export { isAvoidWeb as avoidWeb };
/******************************************** IS_LOCAL ********************************************/
export declare const isLocal: boolean;
/************************** TEST ENVIRONMENT (LOADED_MOCHA_OPTS, Mocha) ***************************/
export declare const isTestMode: boolean;
export declare const isMocha: boolean;
export { isMocha as isMochaEnv };
export { isMocha as runByMocha };
/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
export declare const releaseEnv: ReleaseEnv;
export { releaseEnv as releaseEnvironment };
export declare const isReleaseEnvUAT: boolean;
export { isReleaseEnvUAT as isUAT };
export declare const isReleaseEnvQA: boolean;
export { isReleaseEnvQA as isQA };
export declare const isReleaseEnvDev: boolean;
export { isReleaseEnvDev as isReleaseEnvDevelopment };
export declare const isReleaseEnvProd: boolean;
export { isReleaseEnvProd as isReleaseEnvProduction };
/**
 * 3-4 letter version of release environment name (Default: `dev`)
 */
export declare const releaseEnvShort: ReleaseEnvShort;
export { releaseEnvShort as releaseEnvAbbrev };
