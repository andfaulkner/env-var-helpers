declare const process: any;

export type ReleaseEnvs = "production" | "prod" | "uat" | "qa" | "development" | "dev";

/******************************* COMMON ENVIRONMENT VALS COLLECTION *******************************/
const processExists = typeof process !== "undefined" && process != null;

export const env = {
  NODE_ENV:
    processExists && process.env && process.env.NODE_ENV
      ? process.env.NODE_ENV.toString().toLowerCase()
      : "development",

  LOG_LEVEL:
    processExists && process.env && process.env.LOG_LEVEL
      ? process.env.LOG_LEVEL.toString().toLowerCase()
      : "info",

  IE_COMPAT:
    processExists && process.env && process.env.IE_COMPAT
      ? process.env.IE_COMPAT === true || process.env.IE_COMPAT === "true"
      : false,

  TEST_MODE:
    processExists && process.env && process.env.TEST_MODE
      ? process.env.TEST_MODE === true || process.env.TEST_MODE === "true"
      : false,

  AVOID_WEB:
    processExists && process.env && process.env.AVOID_WEB
      ? process.env.AVOID_WEB === true || process.env.AVOID_WEB === "true"
      : false,

  WAS_RUN_THRU_MOCHA:
    processExists && process.env && process.env.LOADED_MOCHA_OPTS
      ? process.env.LOADED_MOCHA_OPTS === "true" ||
        process.env.LOADED_MOCHA_OPTS === true
      : false,

  RELEASE_ENV:
    processExists && process.env && process.env.RELEASE_ENV
      ? (process.env.RELEASE_ENV.toString().toLowerCase() as ReleaseEnvs)
      : (((process.env.NODE_ENV &&
          process.env.NODE_ENV.toString().toLowerCase()) ||
          "development") as ReleaseEnvs)
};

/******************************************** NODE_ENV ********************************************/
export const isDevelopment =
  env.NODE_ENV === "development" || env.NODE_ENV === "dev";
export {isDevelopment as isDev}

export const isProduction =
  env.NODE_ENV === "production" || env.NODE_ENV === "prod";
export {isProduction as isProd}

// True if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true
export const prodOrSecurityTest =
  isProduction ||
  process.env.TEST_SECURITY === true ||
  process.env.TEST_SECURITY === "true" ||
  process.env.SECURITY_TEST === true ||
  process.env.SECURITY_TEST === "true";
export const isProdOrSecurityTest = prodOrSecurityTest;

/******************************************* LOG LEVEL ********************************************/
export const isSilly = env.LOG_LEVEL === "silly";
export const isVerbose = isSilly || env.LOG_LEVEL === "verbose";
export const isDebug = isVerbose || env.LOG_LEVEL === "debug";
export const isInfo = isDebug || env.LOG_LEVEL === "info";
export const isWarn = isInfo || env.LOG_LEVEL === "warn";
export const isError = isWarn || env.LOG_LEVEL === "error";
export const isWTF = isError || env.LOG_LEVEL === "wtf";

/******************************************** ALIASES *********************************************/
export {isSilly as logGtEqlSilly}
export {isVerbose as logGtEqlVerbose}
export {isDebug as logGtEqlDebug}
export {isInfo as logGtEqlInfo}
export {isWarn as logGtEqlWarn}
export {isError as logGtEqlError}
export {isWTF as logGtEqlWTF}
export {isWTF as logGtEqlWtf}
export {isWTF as isWtf}

export {isSilly as isLogSilly}
export {isVerbose as isLogVerbose}
export {isDebug as isLogDebug}
export {isInfo as isLogInfo}
export {isWarn as isLogWarn}
export {isError as isLogError}
export {isWTF as isLogWTF}
export {isWTF as isLogWtf}

/**************************************** IE COMPATIBILITY ****************************************/
export const isIeCompatMode = env.IE_COMPAT;
export {isIeCompatMode as isIECompatMode}
export {isIeCompatMode as isIECompat}
export {isIeCompatMode as isIeCompat}

// Check for env var requesting total avoidance of web; e.g. no CDNs (local bundles use instead)
export const isAvoidWeb = env.AVOID_WEB;
export {isAvoidWeb as avoidWeb}
export {isAvoidWeb as doAvoidWeb}

/**************************************** TEST ENVIRONMENT ****************************************/
// For cases where TEST_MODE was run explicitly
export const isTestMode =
  env.TEST_MODE && (env.TEST_MODE === true || env.TEST_MODE === "true");

// Check if current script was run via Mocha
export const isMocha = env.WAS_RUN_THRU_MOCHA;
export {isMocha as isMochaEnv}
export {isMocha as runByMocha}
export {isMocha as runViaMocha}
export {isMocha as runThruMocha}
export {isMocha as wasRunByMocha}
export {isMocha as wasRunViaMocha}
export {isMocha as wasRunThruMocha}
export {isMocha as loadedMochaOpts}

/******************************* RELEASE ENVIRONMENT (RELEASE_ENV) ********************************/
export const releaseEnv = env.RELEASE_ENV;
export const releaseEnvironment = env.RELEASE_ENV;

export const isReleaseEnvUat = env.RELEASE_ENV === "uat";
export {isReleaseEnvUat as isReleaseEnvUAT}
export {isReleaseEnvUat as isUat}
export {isReleaseEnvUat as isUAT}

export type ReleaseEnvsShort = "uat" | "prod" | "dev";

// 3-4 letter version of release environment name.
export const releaseEnvShort: ReleaseEnvsShort = (function() {
  return releaseEnv === "uat"
    ? "uat"
    : releaseEnv === "prod" || releaseEnv === "production" ? "prod" : "dev";
})();

export const releaseEnvAbbrev = releaseEnvShort;
export {releaseEnvAbbrev as releaseEnvAbbreviation}
export {releaseEnvAbbrev as releaseEnvironmentShort}
export {releaseEnvAbbrev as releaseEnvironmentAbbrev}
export {releaseEnvAbbrev as releaseEnvironmentAbbreviation}

/**************************** LOG LEVEL + TEST ENVIRONMENT SHORTHANDS *****************************/
// More are defined for verbose + mocha because it's a much more common pattern.
export const isVerboseMocha = env.WAS_RUN_THRU_MOCHA && isVerbose;
export {isVerboseMocha as isVerboseTest}
export {isVerboseMocha as isVTest}
export {isVerboseMocha as isVMocha}
export {isVerboseMocha as isMochaVerbose}
export {isVerboseMocha as isTestVerbose}
export {isVerboseMocha as isMochaV}
export {isVerboseMocha as isTestV}

export const isDebugMocha = env.WAS_RUN_THRU_MOCHA && isDebug;
export {isDebugMocha as isDebugTest}
export {isDebugMocha as isMochaDebug}
export {isDebugMocha as isTestDebug}

export const isSillyMocha = env.WAS_RUN_THRU_MOCHA && isSilly;
export {isSillyMocha as isSillyTest}
export {isSillyMocha as isMochaSilly}
export {isSillyMocha as isTestSilly}

// No need for isWarnMocha, isErrorMocha, or isWtfMocha: suppressing warning & error
// error logs in unit tests is virtually never needed, and terrible practice besides.
