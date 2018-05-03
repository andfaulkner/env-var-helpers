/****************************************** TYPE EXPORTS ******************************************/
export declare type NodeEnv = 'development' | 'dev' | 'production' | 'prod';
export declare type ReleaseEnv = 'development' | 'dev' | 'qa' | 'uat' | 'production' | 'prod';
export declare type ReleaseEnvShort = 'dev' | 'prod' | 'qa' | 'uat';
export declare type LogLevel = 'trace' | 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error' | 'wtf';
export declare const env: {
    NODE_ENV: NodeEnv;
    LOG_LEVEL: any;
    IE_COMPAT: any;
    TEST_MODE: any;
    AVOID_WEB: any;
    WAS_RUN_THRU_MOCHA: any;
    RELEASE_ENV: ReleaseEnv;
};
/******************************************** NODE_ENV ********************************************/
export declare const isDev: boolean;
export { isDev as isDevelopment };
export declare const isProd: boolean;
export { isProd as isProduction };
export declare const prodOrSecurityTest: any;
export { prodOrSecurityTest as isProdOrSecurityTest };
/******************************************* LOG LEVEL ********************************************/
export declare const isTrace: boolean;
export declare const isSilly: boolean;
export declare const isVerbose: boolean;
export declare const isDebug: boolean;
export declare const isInfo: boolean;
export declare const isWarn: boolean;
export declare const isError: boolean;
export declare const isWTF: boolean;
/******************************************** ALIASES *********************************************/
export { isSilly as logGtEqlSilly };
export { isVerbose as logGtEqlVerbose };
export { isDebug as logGtEqlDebug };
export { isInfo as logGtEqlInfo };
export { isWarn as logGtEqlWarn };
export { isError as logGtEqlError };
export { isWTF as logGtEqlWTF };
export { isWTF as logGtEqlWtf };
export { isWTF as isWtf };
export { isSilly as isLogSilly };
export { isVerbose as isLogVerbose };
export { isDebug as isLogDebug };
export { isInfo as isLogInfo };
export { isWarn as isLogWarn };
export { isError as isLogError };
export { isWTF as isLogWTF };
export { isWTF as isLogWtf };
/**************************************** IE COMPATIBILITY ****************************************/
export declare const isIeCompatMode: any;
export { isIeCompatMode as isIECompatMode };
export { isIeCompatMode as isIECompat };
export { isIeCompatMode as isIeCompat };
export declare const isAvoidWeb: any;
export { isAvoidWeb as avoidWeb };
export { isAvoidWeb as doAvoidWeb };
/**************************************** TEST ENVIRONMENT ****************************************/
export declare const isTestMode: any;
export declare const isMocha: any;
export { isMocha as isMochaEnv };
export { isMocha as runByMocha };
export { isMocha as runViaMocha };
export { isMocha as runThruMocha };
export { isMocha as wasRunByMocha };
export { isMocha as wasRunViaMocha };
export { isMocha as wasRunThruMocha };
export { isMocha as loadedMochaOpts };
/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
export declare const releaseEnv: ReleaseEnv;
export { releaseEnv as releaseEnvironment };
export declare const isReleaseEnvUat: boolean;
export { isReleaseEnvUat as isReleaseEnvUAT };
export { isReleaseEnvUat as isUAT };
export declare const isReleaseEnvQa: boolean;
export { isReleaseEnvQa as isReleaseEnvQA };
export { isReleaseEnvQa as isQA };
export declare const isReleaseEnvDev: boolean;
export { isReleaseEnvDev as isReleaseEnvDevelopment };
export declare const isReleaseEnvProd: boolean;
export { isReleaseEnvProd as isReleaseEnvProduction };
/**
 * 3-4 letter version of release environment name. Default: 'dev'
 */
export declare const releaseEnvShort: ReleaseEnvShort;
export { releaseEnvShort as releaseEnvAbbrev };
