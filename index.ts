declare const process: any;

// if (typeof process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV === null) {
//     process.env['NODE_ENV'] = process.env.NODE_ENV || 'development';
// }
// 
// if (typeof process.env.LOG_LEVEL === 'undefined' || process.env.LOG_LEVEL === null) {
//     process.env['LOG_LEVEL'] = process.env.LOG_LEVEL || 'info';
// }
// 
// if (typeof process.env.IE_COMPAT === 'undefined' || process.env.IE_COMPAT === null) {
//     process.env['IE_COMPAT'] = process.env.IE_COMPAT  || 'info';
// }
// 
// if (typeof process.env.TEST_MODE === 'undefined' || process.env.TEST_MODE === null) {
//     process.env['TEST_MODE'] = process.env.TEST_MODE || 'info';
// }

/******************************* COMMON ENVIRONMENT VALS COLLECTION *******************************/
export const env = {
    NODE_ENV:  ((process.env.NODE_ENV)
                   ? process.env.NODE_ENV.toString().toLowerCase()
                   : 'development'),
    LOG_LEVEL: ((process.env.LOG_LEVEL)
                   ? process.env.LOG_LEVEL.toString().toLowerCase()
                   : 'info'),
    IE_COMPAT: ((process.env.IE_COMPAT)
                   ? (process.env.IE_COMPAT === true || process.env.IE_COMPAT === 'true')
                   : false),
    TEST_MODE: ((process.env.TEST_MODE)
                   ? (process.env.TEST_MODE === true || process.env.TEST_MODE === 'true')
                   : false),
    AVOID_WEB: ((process.env.AVOID_WEB)
                   ? (process.env.AVOID_WEB === true || process.env.AVOID_WEB === 'true')
                   : false),
    WAS_RUN_THRU_MOCHA: ((process.env.LOADED_MOCHA_OPTS)
                           ? (process.env.LOADED_MOCHA_OPTS === 'true'
                             || process.env.LOADED_MOCHA_OPTS === true)
                           : false),
};

/******************************************** NODE_ENV ********************************************/
export const isDevelopment = (env.NODE_ENV === 'development' || env.NODE_ENV === 'dev');
export const isDev = isDevelopment;
export const isProduction = (env.NODE_ENV === 'production' || env.NODE_ENV === 'prod');
export const isProd = isProduction;

// True if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true
export const prodOrSecurityTest =
  isProd || process.env.TEST_SECURITY === true || process.env.TEST_SECURITY === 'true'
         || process.env.SECURITY_TEST === true || process.env.SECURITY_TEST === 'true';

/******************************************* LOG LEVEL ********************************************/
export const logGtEqlSilly   = (env.LOG_LEVEL === 'silly');
export const logGtEqlVerbose = (logGtEqlSilly   || env.LOG_LEVEL === 'verbose');
export const logGtEqlDebug   = (logGtEqlVerbose || env.LOG_LEVEL === 'debug');
export const logGtEqlInfo    = (logGtEqlDebug   || env.LOG_LEVEL === 'info');
export const logGtEqlWarn    = (logGtEqlInfo    || env.LOG_LEVEL === 'warn');
export const logGtEqlError   = (logGtEqlWarn    || env.LOG_LEVEL === 'error');
export const logGtEqlWTF     = (logGtEqlError   || env.LOG_LEVEL === 'wtf');
export const logGtEqlWtf     = logGtEqlWTF;

/******************************************** ALIASES *********************************************/
export const isSilly   = logGtEqlSilly;
export const isVerbose = logGtEqlVerbose;
export const isDebug   = logGtEqlDebug;
export const isInfo    = logGtEqlInfo;
export const isWarn    = logGtEqlWarn;
export const isError   = logGtEqlError;
export const isWTF     = logGtEqlWTF;
export const isWtf     = logGtEqlWtf;

export const isLogSilly   = logGtEqlSilly;
export const isLogVerbose = logGtEqlVerbose;
export const isLogDebug   = logGtEqlDebug;
export const isLogInfo    = logGtEqlInfo;
export const isLogWarn    = logGtEqlWarn;
export const isLogError   = logGtEqlError;
export const isLogWTF     = logGtEqlWTF;
export const isLogWtf     = logGtEqlWtf;

/**************************************** IE COMPATIBILITY ****************************************/
export const isIeCompatMode = env.IE_COMPAT;
export const isIECompatMode = isIeCompatMode;
export const isIECompat     = isIeCompatMode;
export const isIeCompat     = isIeCompatMode;

// Check for env var requesting total avoidance of web; e.g. no CDNs (local bundles use instead)
export const isAvoidWeb = env.AVOID_WEB;
export const avoidWeb   = env.AVOID_WEB;
export const doAvoidWeb = env.AVOID_WEB;

/**************************************** TEST ENVIRONMENT ****************************************/
// For cases where TEST_MODE was run explicitly
export const isTestMode = env.TEST_MODE && (env.TEST_MODE === true || env.TEST_MODE === 'true');

// Check if current script was run via Mocha
export const wasRunViaMocha  = env.WAS_RUN_THRU_MOCHA;
export const isMochaEnv      = env.WAS_RUN_THRU_MOCHA;
export const runViaMocha     = env.WAS_RUN_THRU_MOCHA;
export const runThruMocha    = env.WAS_RUN_THRU_MOCHA;
export const wasRunThruMocha = env.WAS_RUN_THRU_MOCHA;
export const loadedMochaOpts = env.WAS_RUN_THRU_MOCHA;
export const isMocha         = env.WAS_RUN_THRU_MOCHA;

/**************************** LOG LEVEL + TEST ENVIRONMENT SHORTHANDS *****************************/
// More are defined for verbose + mocha because it's a much more common pattern.
export const isVerboseMocha = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isVerboseTest  = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isVTest        = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isVMocha       = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isMochaVerbose = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isTestVerbose  = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isMochaV       = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isTestV        = env.WAS_RUN_THRU_MOCHA && isVerbose;

export const isDebugMocha   = env.WAS_RUN_THRU_MOCHA && isDebug;
export const isDebugTest    = env.WAS_RUN_THRU_MOCHA && isDebug;
export const isMochaDebug   = env.WAS_RUN_THRU_MOCHA && isDebug;
export const isTestDebug    = env.WAS_RUN_THRU_MOCHA && isDebug;

export const isSillyMocha   = env.WAS_RUN_THRU_MOCHA && isSilly;
export const isSillyTest    = env.WAS_RUN_THRU_MOCHA && isSilly;
export const isMochaSilly   = env.WAS_RUN_THRU_MOCHA && isSilly;
export const isTestSilly    = env.WAS_RUN_THRU_MOCHA && isSilly;

// No need for isWarnMocha, isErrorMocha, or isWtfMocha: suppressing warning & error
// error logs in unit tests is virtually never needed, and terrible practice besides.
