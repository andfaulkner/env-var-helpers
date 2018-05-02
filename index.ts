declare const process: any;

/****************************************** TYPE EXPORTS ******************************************/
export type NodeEnv = 'development' | 'dev' | 'production' | 'prod';
export type ReleaseEnv = 'development' | 'dev' | 'qa' | 'uat' | 'production' | 'prod';
export type ReleaseEnvShort = 'dev' | 'prod' | 'qa' | 'uat';
export type LogLevel = 'trace' | 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error' | 'wtf';

/******************************************** HELPERS *********************************************/
const envExists = typeof process !== 'undefined' && process != null && process.env;

const toBool = (val, def) =>
    val === 'true' || val === true ? true : val === 'false' || val === false ? false : def;

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

/********************************* GET & PROCESS ENVIRONMENT VALS *********************************/
const NODE_ENV: NodeEnv = RAW_NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';
const RELEASE_ENV: ReleaseEnv = RAW_RELEASE_ENV ? process.env.RELEASE_ENV.toLowerCase() : NODE_ENV;
const LOG_LEVEL = RAW_LOG_LEVEL ? process.env.LOG_LEVEL.toLowerCase() : 'info';

const TEST_MODE = RAW_TEST_MODE ? toBool(process.env.TEST_MODE, false) : false;
const IE_COMPAT = RAW_IE_COMPAT ? toBool(process.env.IE_COMPAT, false) : false;
const AVOID_WEB = RAW_AVOID_WEB ? toBool(process.env.AVOID_WEB, false) : false;

const WAS_RUN_THRU_MOCHA =
    (typeof RAW_LOADED_MOCHA_OPTS !== 'undefined' &&
        RAW_LOADED_MOCHA_OPTS !== null &&
        RAW_LOADED_MOCHA_OPTS !== '') ||
    (!!RAW_mocha && toBool(RAW_mocha, false) !== false);

const isTrueEV = (envVarPath: string) =>
    (process.env[envVarPath] || false) &&
    (process.env[envVarPath] === true ||
        process.env[envVarPath].toString().toLowerCase() === 'true');

export const env = {
    NODE_ENV,
    LOG_LEVEL,
    IE_COMPAT,
    TEST_MODE,
    AVOID_WEB,
    WAS_RUN_THRU_MOCHA,
    RELEASE_ENV,
};

/******************************************** NODE_ENV ********************************************/
export const isDev = NODE_ENV === 'development' || NODE_ENV === 'dev';
export {isDev as isDevelopment};

export const isProd = NODE_ENV === 'production' || NODE_ENV === 'prod';
export {isProd as isProduction};

// True if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true
export const prodOrSecurityTest =
    isProd ||
    (typeof RAW_TEST_SECURITY !== 'undefined' &&
        RAW_TEST_SECURITY !== null &&
        RAW_TEST_SECURITY !== '' &&
        toBool(RAW_TEST_SECURITY, false)) ||
    (typeof RAW_SECURITY_TEST !== 'undefined' &&
        RAW_SECURITY_TEST !== null &&
        RAW_SECURITY_TEST !== '' &&
        toBool(RAW_SECURITY_TEST, false));

export {prodOrSecurityTest as isProdOrSecurityTest};

/******************************************* LOG LEVEL ********************************************/
export const isTrace = LOG_LEVEL === 'trace';
export const isSilly = isTrace || LOG_LEVEL === 'silly';
export const isVerbose = isSilly || LOG_LEVEL === 'verbose';
export const isDebug = isVerbose || LOG_LEVEL === 'debug';
export const isInfo = isDebug || LOG_LEVEL === 'info';
export const isWarn = isInfo || LOG_LEVEL === 'warn';
export const isError = isWarn || LOG_LEVEL === 'error';
export const isWTF = isError || LOG_LEVEL === 'wtf';

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
export const isIeCompatMode = IE_COMPAT;
export {isIeCompatMode as isIECompatMode};
export {isIeCompatMode as isIECompat};
export {isIeCompatMode as isIeCompat};

// Check for env var requesting total avoidance of web; e.g. no CDNs (local bundles use instead)
export const isAvoidWeb = AVOID_WEB;
export {isAvoidWeb as avoidWeb};
export {isAvoidWeb as doAvoidWeb};

/**************************************** TEST ENVIRONMENT ****************************************/
// For cases where TEST_MODE was run explicitly
export const isTestMode = TEST_MODE && toBool('TEST_MODE', false);

// Check if current script was run via Mocha
export const isMocha = WAS_RUN_THRU_MOCHA;
export {isMocha as isMochaEnv};
export {isMocha as runByMocha};
export {isMocha as runViaMocha};
export {isMocha as runThruMocha};
export {isMocha as wasRunByMocha};
export {isMocha as wasRunViaMocha};
export {isMocha as wasRunThruMocha};
export {isMocha as loadedMochaOpts};

/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
export const releaseEnv = RELEASE_ENV;
export {releaseEnv as releaseEnvironment};

export const isReleaseEnvUat = RELEASE_ENV === 'uat';
export {isReleaseEnvUat as isReleaseEnvUAT};
export {isReleaseEnvUat as isUat};
export {isReleaseEnvUat as isUAT};

export const isReleaseEnvQa = RELEASE_ENV === 'qa';
export {isReleaseEnvQa as isReleaseEnvQA};
export {isReleaseEnvQa as isQa};
export {isReleaseEnvQa as isQA};

export const isReleaseEnvDev = RELEASE_ENV === 'dev' || RELEASE_ENV === 'development';
export {isReleaseEnvDev as isReleaseEnvDevelopment};

export const isReleaseEnvProd = RELEASE_ENV === 'prod' || RELEASE_ENV === 'production';
export {isReleaseEnvProd as isReleaseEnvProduction};

/**
 * 3-4 letter version of release environment name. Default: 'dev'
 */
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
export const isVerboseMocha = WAS_RUN_THRU_MOCHA && isVerbose;
export {isVerboseMocha as isVerboseTest};
export {isVerboseMocha as isVTest};
export {isVerboseMocha as isVMocha};
export {isVerboseMocha as isMochaVerbose};
export {isVerboseMocha as isTestVerbose};
export {isVerboseMocha as isMochaV};
export {isVerboseMocha as isTestV};

export const isDebugMocha = WAS_RUN_THRU_MOCHA && isDebug;
export {isDebugMocha as isDebugTest};
export {isDebugMocha as isMochaDebug};
export {isDebugMocha as isTestDebug};

export const isSillyMocha = WAS_RUN_THRU_MOCHA && isSilly;
export {isSillyMocha as isSillyTest};
export {isSillyMocha as isMochaSilly};
export {isSillyMocha as isTestSilly};

// No need for isWarnMocha, isErrorMocha, or isWtfMocha: suppressing warning & error
// error logs in unit tests is virtually never needed, and terrible practice besides.
