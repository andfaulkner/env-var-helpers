Environment variable helpers
============================
*   Convenience functions to extract commonly used values from process.env without fuss
*   Helpers to get info from NODE_ENV, LOG_LEVEL, RELEASE_ENV, LOADED_MOCHA_OPTS

*   Handles true, "true", and "TRUE" identically
*   Case-insensitive environment variable value detections
    *   e.g. NODE_ENV=development, NODE_ENV=Development, and NODE_ENV=DEVELOPMENT are treated identically
*   Works cross-environment/platform:
    *   can be used with Typescript, Node, Babel, Webpack, and standard browser JS (ES5 and up)

----

API
===
## isDev / isDevelopment (NODE_ENV - i.e. process.env.NODE_ENV)
True if NODE_ENV=dev or NODE_ENV=development

    import {isDev, isDevelopment} from 'env-var-helpers';

    if (isDev) console.log("run if NODE_ENV is 'development'");
    if (isDevelopment) console.log("run if NODE_ENV is 'development'");

## isProd / isProduction (NODE_ENV)
True if NODE_ENV=prod or NODE_ENV=production

    import {isProd, isProduction} from 'env-var-helpers';

    if (isProd) console.log("run if NODE_ENV is 'production'");
    if (isProduction) console.log("run if NODE_ENV is 'production'");

## isTrace, isSilly, isVerbose, isDebug, isInfo, isWarn, isError, isWTF/isWtf (LOG_LEVEL) 
True if LOG_LEVEL is set to the namesake log level or one that is more verbose

    import {isVerbose, isWTF} from 'env-var-helpers';

    if (isVerbose) console.log('Display this if LOG_LEVEL is "trace", "silly", or "verbose"');
    if (isWTF) {
        console.log("Log if LOG_LEVEL is wtf, error, warn, info, debug, verbose, silly, or trace");
    }

## isTestMode
Is true if process.env.TEST_MODE was set to true.

## isIeCompat / isIECompat
Is true if process.env.IE_COMPAT was set to true.

### isProdOrSecurityTest / prodOrSecurityTest
Is true if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true

### isAvoidWeb, avoidWeb
Is true if AVOID_WEB is true.
This is an environment variable requesting total avoidance of internet usage in a build.
*   e.g. no CDNs (usage of local bundles instead)

### isMocha, isMochaEnv, runByMocha
Is true if process.env.mocha or process.env.LOADED_MOCHA_OPTS is 'true'.
Should always be true if the current script was run through Mocha, and never true otherwise
*   Mocha sets this value automatically when it is launched.

## isReleaseEnvDev, isReleaseEnvProd, isReleaseEnvQA/isQA, isReleaseEnvUAT/isUAT (RELEASE_ENV)
True if RELEASE_ENV is set to the namesake environment type. Defaults to 'dev'.
e.g. if we run a script with `RELEASE_ENV=qa node some-script.js`:

    import {isQA, isReleaseEnvQA} from 'env-var-helpers';
    import {isUAT, isReleaseEnvUAT, isReleaseEnvDev, isReleaseEnvProd} from 'env-var-helpers';

    // Below both output "Runs if process.env.RELEASE_ENV=qa"
    if (isReleaseEnvQA) console.log('Runs if process.env.RELEASE_ENV=qa');
    if (isQA)           console.log('Runs if process.env.RELEASE_ENV=qa');

    // The following don't run, because the RELEASE_ENV doesn't match
    if (isReleaseEnvDev)  console.log('Runs if process.env.RELEASE_ENV=dev or development');
    if (isReleaseEnvProd) console.log('Runs if process.env.RELEASE_ENV=prod or production');
    if (isReleaseEnvUAT)  console.log('Runs if process.env.RELEASE_ENV=uat');
    if (isUAT)            console.log('Runs if process.env.RELEASE_ENV=uat');

----

Environment variables handled
=============================
Environment options / variables
-------------------------------
### NODE_ENV
Standard NODE_ENV values, as used by Express and React

Values:
*   development (DEFAULT)
*   production

### RELEASE_ENV
Generally used to "mark" different deployment targets: e.g. www.dev.example.com, www.qa.example.com

Values:
*   dev / development
*   prod / production
*   qa
*   uat

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
If unit tests are currently being run, set this to true

Values:
*   true
*   false (DEFAULT)

### SECURITY_TEST / TEST_SECURITY
Flag to turn security features on/off in dev without switching to full prod mode
For use e.g. when working with TLS, authentication, CSRF blockers, etc.

Values:
*   true
*   false (DEFAULT)

### IE_COMPAT
Turn on to compile app to run in Internet Explorer.
Automatically set to true (if env-var-helpers imported), if NODE_ENV=production.

Values:
*   true
*   false (DEFAULT)

----
# Why?
*   I hate duplicating functions between projects. These come up again and again.
