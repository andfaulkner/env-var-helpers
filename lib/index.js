"use strict";
if (typeof process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV === null) {
    process.env['NODE_ENV'] = process.env.NODE_ENV || 'development';
}
if (typeof process.env.LOG_LEVEL === 'undefined' || process.env.LOG_LEVEL === null) {
    process.env['LOG_LEVEL'] = process.env.LOG_LEVEL || 'info';
}
if (typeof process.env.IE_COMPAT === 'undefined' || process.env.IE_COMPAT === null) {
    process.env['IE_COMPAT'] = process.env.IE_COMPAT || 'info';
}
if (typeof process.env.TEST_MODE === 'undefined' || process.env.TEST_MODE === null) {
    process.env['TEST_MODE'] = process.env.TEST_MODE || 'info';
}
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
};
exports.isDevelopment = (exports.env.NODE_ENV === 'development' || exports.env.NODE_ENV === 'dev');
exports.isDev = exports.isDevelopment;
exports.isProduction = (exports.env.NODE_ENV === 'production' || exports.env.NODE_ENV === 'prod');
exports.isProd = exports.isProduction;
exports.logGtEqlSilly = (exports.env.LOG_LEVEL === 'silly');
exports.logGtEqlVerbose = (exports.logGtEqlSilly || exports.env.LOG_LEVEL === 'verbose');
exports.logGtEqlDebug = (exports.logGtEqlVerbose || exports.env.LOG_LEVEL === 'debug');
exports.logGtEqlInfo = (exports.logGtEqlDebug || exports.env.LOG_LEVEL === 'info');
exports.logGtEqlWarn = (exports.logGtEqlInfo || exports.env.LOG_LEVEL === 'warn');
exports.logGtEqlError = (exports.logGtEqlWarn || exports.env.LOG_LEVEL === 'error');
exports.logGtEqlWTF = (exports.logGtEqlError || exports.env.LOG_LEVEL === 'wtf');
exports.logGtEqlWtf = exports.logGtEqlWTF;
exports.isSilly = exports.logGtEqlSilly;
exports.isVerbose = exports.logGtEqlVerbose;
exports.isDebug = exports.logGtEqlDebug;
exports.isIeCompatMode = (exports.env.IE_COMPAT);
exports.isIECompatMode = exports.isIeCompatMode;
exports.isIECompat = exports.isIeCompatMode;
exports.isIeCompat = exports.isIeCompatMode;
exports.isTestMode = (exports.env.TEST_MODE);
//# sourceMappingURL=index.js.map