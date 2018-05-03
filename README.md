env-var-helpers: Environment variable helpers
=============================================
*   Convenience functions to extract commonly used values from process.env without fuss

*   Helpers to get info from:
    *   NODE_ENV
    *   LOG_LEVEL
    *   RELEASE_ENV
    *   LOADED_MOCHA_OPTS (defined by default by Mocha)
    *   TEST_MODE
    *   AVOID_WEB
    *   TEST_SECURITY / SECURITY_TEST
    *   IE_COMPAT

*   Handles true, "true", and "TRUE" identically

*   Case-insensitive environment variable value detections
    *   e.g. NODE_ENV=development, NODE_ENV=Development, & NODE_ENV=DEVELOPMENT treated the same

*   Isomorphic, and works cross-platform/cross-environment:
    *   Usable with Typescript, Node, Babel, Webpack, & standard browser JS (ES5 and up)

----------------------------------------------------------------------------------------------------

API
===

All values are static boolean constants (true | false), unless otherwise specified

isDev / isDevelopment
---------------------
Env var: NODE_ENV (process.env.NODE_ENV)

True if NODE_ENV=dev or NODE_ENV=development

Example:

    import {isDev, isDevelopment} from 'env-var-helpers';

    if (isDev) console.log("run if NODE_ENV is 'development'");
    if (isDevelopment) console.log("run if NODE_ENV is 'development'");

isProd / isProduction (NODE_ENV)
--------------------------------
Env var: NODE_ENV

True if NODE_ENV=prod or NODE_ENV=production

Example:

    import {isProd, isProduction} from 'env-var-helpers';

    if (isProd) console.log("run if NODE_ENV is 'production'");
    if (isProduction) console.log("run if NODE_ENV is 'production'");

isTrace, isSilly, isVerbose, isDebug, isInfo, isWarn, isError, isWTF/isWtf
--------------------------------------------------------------------------
Env var: LOG_LEVEL

True if LOG_LEVEL is set to the namesake log level or one that is more verbose

Example:

    import {isVerbose, isWTF} from 'env-var-helpers';

    if (isVerbose) console.log('Display this if LOG_LEVEL is "trace", "silly", or "verbose"');
    if (isWTF) {
        console.log("Log if LOG_LEVEL is wtf, error, warn, info, debug, verbose, silly, or trace");
    }

isReleaseEnvDev, isReleaseEnvProd, isReleaseEnvQA/isQA, isReleaseEnvUAT/isUAT
-----------------------------------------------------------------------------
Env var: RELEASE_ENV

True if RELEASE_ENV is set to the namesake environment type. Defaults to 'dev'.

Example: if we run the following script with `RELEASE_ENV=qa node some-script.js`:

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

releaseEnvShort (RELEASE_ENV)
-----------------------------
Env var: RELEASE_ENV
Type: string

Current release environment value, in 2-4 letter form.

Mapping:
-   development -> dev
-   qa          -> qa
-   uat         -> uat
-   production  -> prod

For use when determing which APIs to make requests to based on current release environment
*   e.g. in "QA", POST to 'qa.example.ca/api/login'; In "dev", POST to 'dev.example.ca/api/login'

Example: run with `RELEASE_ENV=development node some-script.js`:

    import {releaseEnvShort}

    const loginRequestRoute = `https://www.${releaseEnvShort}.example.com/api/login`;

    console.log(loginRequestRoute);
    // => "https://www.dev.example.com/api/login"

isTestMode
----------
Env var: TEST_MODE

Is true if process.env.TEST_MODE is set to true.
*   e.g. script was run with: `TEST_MODE=true node some-script.js`

isIeCompat / isIECompat
-----------------------
Env var: IE_COMPAT

Is true if process.env.IE_COMPAT is set to true.
*   e.g. script was run with: `IE_COMPAT=true node some-script.js`

isProdOrSecurityTest / prodOrSecurityTest
-----------------------------------------
Env vars: TEST_SECURITY & SECURITY_TEST

Is true if NODE_ENV is production, TEST_SECURITY is true, or SECURITY_TEST is true
e.g. script was run with either:
    *   `SECURITY_TEST=true node some-script.js`
    *   `NODE_ENV=production node some-script.js`

isAvoidWeb, avoidWeb
--------------------
Env var: AVOID_WEB

Is true if AVOID_WEB is true

Purpose: environment variable requesting total avoidance of internet usage in a build.
*   e.g. no CDNs (usage of local bundles instead)

isMocha, isMochaEnv, runByMocha
-------------------------------
Env vars: LOADED_MOCHA_OPTS & mocha

Is true if process.env.mocha or process.env.LOADED_MOCHA_OPTS is 'true'.
Should always be true if the current script was run through Mocha, and never true otherwise
*   Mocha sets this value automatically when it is launched

----------------------------------------------------------------------------------------------------

Environment variables handled
=============================
NODE_ENV
--------
Standard NODE_ENV values, as used by Express and React

Values:
*   development (DEFAULT)
*   production

LOG_LEVEL
---------
Values:
*   trace
*   silly
*   verbose
*   debug
*   info
*   warn
*   error
*   wtf

RELEASE_ENV
-----------
Generally used to "mark" different deployment targets: e.g. www.dev.example.com, www.qa.example.com

Values:
*   dev / development
*   prod / production
*   qa
*   uat

TEST_MODE
---------
If unit tests are currently being run, set this to true

Values:
*   true
*   false (DEFAULT)

SECURITY_TEST / TEST_SECURITY
-----------------------------
Flag to turn security features on/off in dev without switching to full prod mode
For use e.g. when working with TLS, authentication, CSRF blockers, etc.

Values:
*   true
*   false (DEFAULT)

IE_COMPAT
---------
Turn on to compile app to run in Internet Explorer.
Automatically set to true (if env-var-helpers imported), if NODE_ENV=production.

Values:
*   true
*   false (DEFAULT)

mocha / LOADED_MOCHA_OPTS
-------------------------
LOADED_MOCHA_OPTS automatically set to true if code was run by Mocha.
process.env.mocha is an alternative if you want to manually declare that code is run by Mocha
*   In this case, declare `process.env.mocha = true` at the top of your test files

Values:
*   true
*   false (DEFAULT)


----------------------------------------------------------------------------------------------------

Why?
====
*   I hate duplicating functions between projects. These come up again and again.
