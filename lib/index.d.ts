export declare const env: {
    NODE_ENV: any;
    LOG_LEVEL: any;
    IE_COMPAT: boolean;
    TEST_MODE: boolean;
    AVOID_WEB: boolean;
    WAS_RUN_THRU_MOCHA: boolean;
    RELEASE_ENV: any;
};
/******************************************** NODE_ENV ********************************************/
export declare const isDevelopment: boolean;
export declare const isDev: boolean;
export declare const isProduction: boolean;
export declare const isProd: boolean;
export declare const prodOrSecurityTest: boolean;
export declare const isProdOrSecurityTest: boolean;
/******************************************* LOG LEVEL ********************************************/
export declare const logGtEqlSilly: boolean;
export declare const logGtEqlVerbose: boolean;
export declare const logGtEqlDebug: boolean;
export declare const logGtEqlInfo: boolean;
export declare const logGtEqlWarn: boolean;
export declare const logGtEqlError: boolean;
export declare const logGtEqlWTF: boolean;
export declare const logGtEqlWtf: boolean;
/******************************************** ALIASES *********************************************/
export declare const isSilly: boolean;
export declare const isVerbose: boolean;
export declare const isDebug: boolean;
export declare const isInfo: boolean;
export declare const isWarn: boolean;
export declare const isError: boolean;
export declare const isWTF: boolean;
export declare const isWtf: boolean;
export declare const isLogSilly: boolean;
export declare const isLogVerbose: boolean;
export declare const isLogDebug: boolean;
export declare const isLogInfo: boolean;
export declare const isLogWarn: boolean;
export declare const isLogError: boolean;
export declare const isLogWTF: boolean;
export declare const isLogWtf: boolean;
/**************************************** IE COMPATIBILITY ****************************************/
export declare const isIeCompatMode: boolean;
export declare const isIECompatMode: boolean;
export declare const isIECompat: boolean;
export declare const isIeCompat: boolean;
export declare const isAvoidWeb: boolean;
export declare const avoidWeb: boolean;
export declare const doAvoidWeb: boolean;
/**************************************** TEST ENVIRONMENT ****************************************/
export declare const isTestMode: boolean;
export declare const isMocha: boolean;
export declare const isMochaEnv: boolean;
export declare const runByMocha: boolean;
export declare const runViaMocha: boolean;
export declare const runThruMocha: boolean;
export declare const wasRunByMocha: boolean;
export declare const wasRunViaMocha: boolean;
export declare const wasRunThruMocha: boolean;
export declare const loadedMochaOpts: boolean;
/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
export declare const releaseEnv: any;
export declare const releaseEnvironment: any;
export declare const isReleaseEnvUat: boolean;
export declare const isReleaseEnvUAT: boolean;
export declare const isUat: boolean;
export declare const isUAT: boolean;
/**************************** LOG LEVEL + TEST ENVIRONMENT SHORTHANDS *****************************/
export declare const isVerboseMocha: boolean;
export declare const isVerboseTest: boolean;
export declare const isVTest: boolean;
export declare const isVMocha: boolean;
export declare const isMochaVerbose: boolean;
export declare const isTestVerbose: boolean;
export declare const isMochaV: boolean;
export declare const isTestV: boolean;
export declare const isDebugMocha: boolean;
export declare const isDebugTest: boolean;
export declare const isMochaDebug: boolean;
export declare const isTestDebug: boolean;
export declare const isSillyMocha: boolean;
export declare const isSillyTest: boolean;
export declare const isMochaSilly: boolean;
export declare const isTestSilly: boolean;
