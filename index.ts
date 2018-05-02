declare const process: any;

/****************************************** TYPE EXPORTS ******************************************/
export type NodeEnv = 'development' | 'dev' | 'production' | 'prod';
export type ReleaseEnv = 'development' | 'dev' | 'qa' | 'uat' | 'production' | 'prod';
export type ReleaseEnvShort = 'dev' | 'prod' | 'qa' | 'uat';
export type LogLevel = 'trace' | 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error' | 'wtf';

/******************************************** HELPERS *********************************************/
const processExists = typeof process !== 'undefined' && process != null;
const processEnvExists = processExists && process.env;

const isTrueEV = (envVarPath: string) =>
    (process.env[envVarPath] || false) &&
    (process.env[envVarPath] === true ||
        process.env[envVarPath].toString().toLowerCase() === 'true');

const formatVar = <T extends string | boolean | ReleaseEnv>(envVar: string, def: T): T =>
    processEnvExists && process.env[envVar]
        ? typeof def === 'string'
            ? process.env[envVar].toString().toLowerCase()
            : isTrueEV(envVar)
        : def;

const nodeEnv = formatVar('NODE_ENV', 'development') as NodeEnv;

/******************************* COMMON ENVIRONMENT VALS COLLECTION *******************************/
export const env = {
    NODE_ENV: nodeEnv,
    LOG_LEVEL: formatVar('LOG_LEVEL', 'info') as LogLevel,
    IE_COMPAT: formatVar('IE_COMPAT', false),
    TEST_MODE: formatVar('TEST_MODE', false),
    AVOID_WEB: formatVar('AVOID_WEB', false),
    // LOADED_MOCHA_OPTS set automatically by mocha on launch
    WAS_RUN_THRU_MOCHA: formatVar('LOADED_MOCHA_OPTS', false) || formatVar('mocha', false),
    RELEASE_ENV: formatVar('RELEASE_ENV', nodeEnv) as ReleaseEnv,
};

/******************************************** NODE_ENV ********************************************/
export const isDev = env.NODE_ENV === 'development' || env.NODE_ENV === 'dev';
export {isDev as isDevelopment};

export const isProd = env.NODE_ENV === 'production' || env.NODE_ENV === 'prod';
export {isProd as isProduction};

// True if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true
export const prodOrSecurityTest = isProd || isTrueEV('TEST_SECURITY') || isTrueEV('SECURITY_TEST');
export const isProdOrSecurityTest = prodOrSecurityTest;

/******************************************* LOG LEVEL ********************************************/
export const isTrace = env.LOG_LEVEL === 'trace';
export const isSilly = isTrace || env.LOG_LEVEL === 'silly';
export const isVerbose = isSilly || env.LOG_LEVEL === 'verbose';
export const isDebug = isVerbose || env.LOG_LEVEL === 'debug';
export const isInfo = isDebug || env.LOG_LEVEL === 'info';
export const isWarn = isInfo || env.LOG_LEVEL === 'warn';
export const isError = isWarn || env.LOG_LEVEL === 'error';
export const isWTF = isError || env.LOG_LEVEL === 'wtf';

/******************************************** ALIASES *********************************************/
export {isSilly as logGtEqlSilly};
export {isVerbose as logGtEqlVerbose};
export {isDebug as logGtEqlDebug};
export {isInfo as logGtEqlInfo};
export {isWarn as logGtEqlWarn};
export {isError as logGtEqlError};
export {isWTF as logGtEqlWTF};
export {isWTF as logGtEqlWtf};
export {isWTF as isWtf};

export {isSilly as isLogSilly};
export {isVerbose as isLogVerbose};
export {isDebug as isLogDebug};
export {isInfo as isLogInfo};
export {isWarn as isLogWarn};
export {isError as isLogError};
export {isWTF as isLogWTF};
export {isWTF as isLogWtf};

/**************************************** IE COMPATIBILITY ****************************************/
export const isIeCompatMode = env.IE_COMPAT;
export {isIeCompatMode as isIECompatMode};
export {isIeCompatMode as isIECompat};
export {isIeCompatMode as isIeCompat};

// Check for env var requesting total avoidance of web; e.g. no CDNs (local bundles use instead)
export const isAvoidWeb = env.AVOID_WEB;
export {isAvoidWeb as avoidWeb};
export {isAvoidWeb as doAvoidWeb};

/**************************************** TEST ENVIRONMENT ****************************************/
// For cases where TEST_MODE was run explicitly
export const isTestMode = env.TEST_MODE && isTrueEV('TEST_MODE');

// Check if current script was run via Mocha
export const isMocha = env.WAS_RUN_THRU_MOCHA;
export {isMocha as isMochaEnv};
export {isMocha as runByMocha};
export {isMocha as runViaMocha};
export {isMocha as runThruMocha};
export {isMocha as wasRunByMocha};
export {isMocha as wasRunViaMocha};
export {isMocha as wasRunThruMocha};
export {isMocha as loadedMochaOpts};

/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
export const releaseEnv = env.RELEASE_ENV;
export {releaseEnv as releaseEnvironment};

export const isReleaseEnvUat = env.RELEASE_ENV === 'uat';
export {isReleaseEnvUat as isReleaseEnvUAT};
export {isReleaseEnvUat as isUat};
export {isReleaseEnvUat as isUAT};

export const isReleaseEnvQa = env.RELEASE_ENV === 'qa';
export {isReleaseEnvQa as isReleaseEnvQA};
export {isReleaseEnvQa as isQa};
export {isReleaseEnvQa as isQA};

// 3-4 letter version of release environment name.
export const releaseEnvShort: ReleaseEnvShort = (function() {
    return releaseEnv === 'uat'
        ? 'uat'
        : releaseEnv === 'prod' || releaseEnv === 'production'
            ? 'prod'
            : releaseEnv === 'qa'
                ? 'qa'
                : 'dev';
})();

export {releaseEnvShort as releaseEnvAbbrev};
export {releaseEnvShort as releaseEnvAbbreviation};
export {releaseEnvShort as releaseEnvironmentShort};
export {releaseEnvShort as releaseEnvironmentAbbrev};
export {releaseEnvShort as releaseEnvironmentAbbreviation};

/**************************** LOG LEVEL + TEST ENVIRONMENT SHORTHANDS *****************************/
// More are defined for verbose + mocha because it's a much more common pattern.
export const isVerboseMocha = env.WAS_RUN_THRU_MOCHA && isVerbose;
export {isVerboseMocha as isVerboseTest};
export {isVerboseMocha as isVTest};
export {isVerboseMocha as isVMocha};
export {isVerboseMocha as isMochaVerbose};
export {isVerboseMocha as isTestVerbose};
export {isVerboseMocha as isMochaV};
export {isVerboseMocha as isTestV};

export const isDebugMocha = env.WAS_RUN_THRU_MOCHA && isDebug;
export {isDebugMocha as isDebugTest};
export {isDebugMocha as isMochaDebug};
export {isDebugMocha as isTestDebug};

export const isSillyMocha = env.WAS_RUN_THRU_MOCHA && isSilly;
export {isSillyMocha as isSillyTest};
export {isSillyMocha as isMochaSilly};
export {isSillyMocha as isTestSilly};

// No need for isWarnMocha, isErrorMocha, or isWtfMocha: suppressing warning & error
// error logs in unit tests is virtually never needed, and terrible practice besides.
