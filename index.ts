declare const process: any;

export type ReleaseEnvs = 'production' | 'uat' | 'development';

/******************************* COMMON ENVIRONMENT VALS COLLECTION *******************************/
const processExists = typeof process !== 'undefined' && process != null;

export const env = {
    NODE_ENV:  (processExists && process.env && process.env.NODE_ENV
                   ? process.env.NODE_ENV.toString().toLowerCase()
                   : 'development'),
    LOG_LEVEL: (processExists && process.env && process.env.LOG_LEVEL
                   ? process.env.LOG_LEVEL.toString().toLowerCase()
                   : 'info'),
    IE_COMPAT: (processExists && process.env && process.env.IE_COMPAT
                   ? (process.env.IE_COMPAT === true || process.env.IE_COMPAT === 'true')
                   : false),
    TEST_MODE: (processExists && process.env && process.env.TEST_MODE
                   ? (process.env.TEST_MODE === true || process.env.TEST_MODE === 'true')
                   : false),
    AVOID_WEB: (processExists && process.env && process.env.AVOID_WEB
                   ? (process.env.AVOID_WEB === true || process.env.AVOID_WEB === 'true')
                   : false),
    WAS_RUN_THRU_MOCHA: (processExists && process.env && process.env.LOADED_MOCHA_OPTS
                           ? (process.env.LOADED_MOCHA_OPTS === 'true'
                             || process.env.LOADED_MOCHA_OPTS === true)
                           : false),
    RELEASE_ENV: (processExists && process.env && process.env.RELEASE_ENV)
                    ? process.env.RELEASE_ENV.toString().toLowerCase() as ReleaseEnvs
                    : ((process.env.NODE_ENV && process.env.NODE_ENV.toString().toLowerCase())
                       || 'development') as ReleaseEnvs,
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
export const isProdOrSecurityTest = prodOrSecurityTest;

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
export const isMocha         = env.WAS_RUN_THRU_MOCHA;
export const isMochaEnv      = env.WAS_RUN_THRU_MOCHA;
export const runByMocha      = env.WAS_RUN_THRU_MOCHA;
export const runViaMocha     = env.WAS_RUN_THRU_MOCHA;
export const runThruMocha    = env.WAS_RUN_THRU_MOCHA;
export const wasRunByMocha   = env.WAS_RUN_THRU_MOCHA;
export const wasRunViaMocha  = env.WAS_RUN_THRU_MOCHA;
export const wasRunThruMocha = env.WAS_RUN_THRU_MOCHA;
export const loadedMochaOpts = env.WAS_RUN_THRU_MOCHA;

/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
export const releaseEnv = env.RELEASE_ENV;
export const releaseEnvironment = env.RELEASE_ENV;

export const isReleaseEnvUat = (env.RELEASE_ENV === 'uat');
export const isReleaseEnvUAT = isReleaseEnvUat;
export const isUat = isReleaseEnvUat;
export const isUAT = isReleaseEnvUat;

export type ReleaseEnvsShort = 'uat' | 'prod' | 'dev';

// 3-4 letter version of release environment name.
export const releaseEnvShort: ReleaseEnvsShort = (function() {
    switch (releaseEnv) {
      case "uat":                      return 'uat';
      case "prod": case "production":  return 'prod';
      default:
      case "dev":  case "development": return 'dev';
    }
}());

export const releaseEnvAbbrev = releaseEnvShort;
export const releaseEnvAbbreviation = releaseEnvShort;
export const releaseEnvironmentShort = releaseEnvShort;
export const releaseEnvironmentAbbrev = releaseEnvShort;
export const releaseEnvironmentAbbreviation = releaseEnvShort;

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
