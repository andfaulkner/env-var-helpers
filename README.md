Environment variable helpers
============================

*   set of convenience functions to extract quick info from process.env with little fuss
*   handles true and "true" identically
*   works cross-environment and platform - Typescript, Node, Babel, Webpack, standard browser JS are all cool with it 

----
## isDev
    import { isDev } from 'env-var-helpers';

    if (isDev) {
        // run this if NODE_ENV is 'development'
    }

## isProd
    import { isProd } from 'env-var-helpers';

    if (isProd) {
        // run this if NODE_ENV is 'production'
    }

## logGtEqlSilly, logGtEqlVerbose, logGtEqlDebug, logGtEqlInfo, logGtEqlWarn, logGtEqlError, logGtEqlWTF
true if process.env.LOG_LEVEL is set to the namesake log level, or one that is more verbose.

    import { logGtEqlVerbose } from 'env-var-helpers';

    if (logGtEqlVerbose) console.log('Display some mostly unneccessary info if LOG_LEVEL is "silly" or "verbose"');

## isSilly
true if process.env.LOG_LEVEL is set to 'silly'

## isVerbose
true if process.env.LOG_LEVEL is set to 'verbose'

## isTestMode
Is true if process.env.TEST_MODE was set to true.

Environment variables handled
=============================

Environment options / variables
-------------------------------
### NODE_ENV
Values:
*   development (DEFAULT)
*   production

### IE_COMPAT
Turn on to compile app to run in Internet Explorer.
Automatically set to true (if env-var-helpers imported), if NODE_ENV=production.

Values:
*   true
*   false (DEFAULT)

### LOG_LEVEL
Values:
*   silly
*   verbose
*   debug
*   info
*   warn
*   error
*   wtf

### TEST_MODE
If unit tests are currently being run, set to true
Values:
*   true
*   false (DEFAULT)

# Why?
*   I hate duplicating functions between projects. These come up again and again.
