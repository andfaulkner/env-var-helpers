"use strict";
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
exports.env = {
    NODE_ENV: ((process.env.NODE_ENV)
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
exports.isDevelopment = (exports.env.NODE_ENV === 'development' || exports.env.NODE_ENV === 'dev');
exports.isDev = exports.isDevelopment;
exports.isProduction = (exports.env.NODE_ENV === 'production' || exports.env.NODE_ENV === 'prod');
exports.isProd = exports.isProduction;
// True if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true
exports.prodOrSecurityTest = exports.isProduction
    || process.env.TEST_SECURITY === true
    || process.env.TEST_SECURITY === 'true'
    || process.env.SECURITY_TEST === true
    || process.env.SECURITY_TEST === 'true';
/******************************************* LOG LEVEL ********************************************/
exports.logGtEqlSilly = (exports.env.LOG_LEVEL === 'silly');
exports.logGtEqlVerbose = (exports.logGtEqlSilly || exports.env.LOG_LEVEL === 'verbose');
exports.logGtEqlDebug = (exports.logGtEqlVerbose || exports.env.LOG_LEVEL === 'debug');
exports.logGtEqlInfo = (exports.logGtEqlDebug || exports.env.LOG_LEVEL === 'info');
exports.logGtEqlWarn = (exports.logGtEqlInfo || exports.env.LOG_LEVEL === 'warn');
exports.logGtEqlError = (exports.logGtEqlWarn || exports.env.LOG_LEVEL === 'error');
exports.logGtEqlWTF = (exports.logGtEqlError || exports.env.LOG_LEVEL === 'wtf');
exports.logGtEqlWtf = exports.logGtEqlWTF;
/******************************************** ALIASES *********************************************/
exports.isSilly = exports.logGtEqlSilly;
exports.isVerbose = exports.logGtEqlVerbose;
exports.isDebug = exports.logGtEqlDebug;
exports.isInfo = exports.logGtEqlInfo;
exports.isWarn = exports.logGtEqlWarn;
exports.isError = exports.logGtEqlError;
exports.isWTF = exports.logGtEqlWTF;
exports.isWtf = exports.logGtEqlWtf;
exports.isLogSilly = exports.logGtEqlSilly;
exports.isLogVerbose = exports.logGtEqlVerbose;
exports.isLogDebug = exports.logGtEqlDebug;
exports.isLogInfo = exports.logGtEqlInfo;
exports.isLogWarn = exports.logGtEqlWarn;
exports.isLogError = exports.logGtEqlError;
exports.isLogWTF = exports.logGtEqlWTF;
exports.isLogWtf = exports.logGtEqlWtf;
exports.isIeCompatMode = exports.env.IE_COMPAT;
exports.isIECompatMode = exports.isIeCompatMode;
exports.isIECompat = exports.isIeCompatMode;
exports.isIeCompat = exports.isIeCompatMode;
exports.isTestMode = exports.env.TEST_MODE;
// Check for env var requesting total avoidance of web; e.g. no CDNs (local bundles use instead)
exports.isAvoidWeb = exports.env.AVOID_WEB;
exports.avoidWeb = exports.env.AVOID_WEB;
exports.doAvoidWeb = exports.env.AVOID_WEB;
// Check if current script was run through Mocha (i.e. are we in a Mocha test?)
exports.wasRunViaMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.isMochaEnv = exports.env.WAS_RUN_THRU_MOCHA;
exports.runViaMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.runThruMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.wasRunThruMocha = exports.env.WAS_RUN_THRU_MOCHA;
exports.loadedMochaOpts = exports.env.WAS_RUN_THRU_MOCHA;
exports.isMocha = exports.env.WAS_RUN_THRU_MOCHA;
//# sourceMappingURL=index.js.map