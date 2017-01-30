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
};

export const isDevelopment = (env.NODE_ENV === 'development' || env.NODE_ENV === 'dev');
export const isDev = isDevelopment;

export const isProduction = (env.NODE_ENV === 'production' || env.NODE_ENV === 'prod');
export const isProd = isProduction;

export const logGtEqlSilly = (env.LOG_LEVEL === 'silly');
export const logGtEqlVerbose = (logGtEqlSilly || env.LOG_LEVEL === 'verbose');
export const logGtEqlDebug = (logGtEqlVerbose || env.LOG_LEVEL === 'debug');
export const logGtEqlInfo = (logGtEqlDebug || env.LOG_LEVEL === 'info');
export const logGtEqlWarn = (logGtEqlInfo || env.LOG_LEVEL === 'warn');
export const logGtEqlError = (logGtEqlWarn || env.LOG_LEVEL === 'error');
export const logGtEqlWTF = (logGtEqlError || env.LOG_LEVEL === 'wtf');
export const logGtEqlWtf = logGtEqlWTF;

export const isSilly = logGtEqlSilly;
export const isVerbose = logGtEqlVerbose;
export const isDebug = logGtEqlDebug;

export const isIeCompatMode = (env.IE_COMPAT);
export const isIECompatMode = isIeCompatMode;
export const isIECompat = isIeCompatMode;
export const isIeCompat = isIeCompatMode;

export const isTestMode = (env.TEST_MODE);

