Environment variable helpers
============================

*   set of convenience functions to extract quick info from process.env with little fuss
*   handles true and "true" identically
*   case-insensitive environment variable value detections (NODE_ENV=development, NODE_ENV=Development, and NODE_ENV=DEVELOPMENT are treated identically)
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
true if process.env.LOG_LEVEL is set to 'verbose' or 'silly'.

## isDebug
true if process.env.LOG_LEVEL is set to 'verbose', 'silly', or 'debug'.

## isTestMode
Is true if process.env.TEST_MODE was set to true.

## isIeCompatMode, isIeCompat, isIECompatMode, isIeCompatMode
Is true if process.env.IE_COMPAT was set to true.

### prodOrSecurityTest
Is true if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true

### isAvoidWeb, avoidWeb, doAvoidWeb
Is true if AVOID_WEB is true.
This is an environment variable requesting total avoidance of internet usage in a build.
*   e.g. no CDNs (usage of local bundles instead)

### isMochaEnv, wasRunViaMocha, runViaMocha, runThruMocha, wasRunThruMocha, loadedMochaOpts
Is true if LOADED_MOCHA_OPTS is 'true'.
Should always be true if the current script was run through Mocha, and never true otherwise. Mocha sets this value automatically when it is launched.

### Simultaneous checks of log level & whether Mocha launched the current process
Each value is true if both:
    a)  LOADED_MOCHA_OPTS is 'true'; and
    b)  The log level is above the corresponding log level
        *   (i.e. about the log level in the name of the property)

Each function of this type also has numerous aliases. Full list:
*   true if LOG_LEVEL is set to silly:
    *   isSillyMocha
    *   isSillyTest
    *   isMochaSilly
    *   isTestSilly
*   true if LOG_LEVEL is set to verbose or silly:
    *   isVerboseMocha,
    *   isVerboseTest,
    *   isVTest,
    *   isVMocha,
    *   isMochaVerbose,
    *   isTestVerbose,
    *   isMochaV,
    *   isTestV,
*   true if LOG_LEVEL is set to debug, verbose or silly:
    *   isDebugMocha
    *   isDebugTest
    *   isMochaDebug
    *   isTestDebug

Note that properties only exist for LOG_LEVEL values of silly, verbose, and debug, because it's near-universally bad practice to suppressing errors & warnings in unit tests:
*   Note that there isn't necessarily no reason to suppress them ever, but adding the resistance of having to manually check these environment variables ensures we really think about it before doing so.
*   Why is it bad practice?
    *   Errors and warnings provide information on parts of the codebase not (yet) directly covered by the test suite. This has the potential to prevent runtime bugs you'd otherwise miss
        *   (especially in cases where whatever your testing still works despite a function that gets run in the process going off the "happy path")
    *   Including them makes it easy to use them without thinking, then forget about them.
        *   Worst-case scenario: hours of frustration trying to determine why your tests are failing yet not providing any information on the reasons why
            *   ![NEVER AGAIN](http://i0.kym-cdn.com/entries/icons/original/000/006/216/7nTnr.png)

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

### SECURITY_TEST   or   TEST_SECURITY
*   It's often useful to have a flag to turn security features on and off in development without having to switch to full-on production mode, e.g. when working with TLS, authentication, CSRF blockers, etc.

# Why?
*   I hate duplicating functions between projects. These come up again and again.
