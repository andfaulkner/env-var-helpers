Version 3.2.0
=============
Ran prettier on main file & other misc cleanups

Proper export method for aliases (export {name as alias})
-   Previous did extraneous duplicate object creations/var assignments & exported

lodash types updated (to 4.14.104)

Typescript -> 2.7.2



Version 3.0.0
=============

Major overhaul.

Numerous subtle bugs were fixed, most/all of which were runtime and some of which could hypothetically reach production unnoticed. Some had the potential to result in e.g.:
-   parts of the application silently disappearing;
-   features being shut off
-   development logs becoming visible to end-users
-   the delivery of payloads that exclude browsers the application is required to support
    -   due to task runners/transpilers overlooking environment variables that indicate that the build should include additional polyfills and/or extra transpilation steps for supporting less modern browsers).
Thus, any usages that relied on broken exported values stop working as expected.

Note that it's still fairly unlikely that many consumers of the library ran into this issue. Almost all of the issues related to the less convenient (albeit usually more accurate) aliases. Also, many (but not all) of these issues are fairly easy to detect if using Typescript. It's more likely that these features would simply not be used (they are rarely used in the internal production codebases for which this was developed), or would be detected in development.
-   I came across only one in our many codebases (which uses exports from this library 1000s of times) and discovered it before it reached production (this is what prompted the audit and repair of this library - the issue was very difficult to detect, and it caused an otherwise inexplicable show-stopping bug that took an extremely long time to trace to env-var-helpers).

There's thus at least some potential for breakage since it's conceivable that someone may have run into our my issue but worked around it, so I felt a full major version upgrade was called for.

Specific issues:
1) The older Mocha and test environment detecting exports relied on a manually set TEST_MODE environment variable. This was documented, but the documentation suggested this is the only thing the library uses for test detection. However, some of the exported properties use environment variable interally set by Mocha. The difference is now clearly identified.

2) If the "process" global variable is undefined, in certain environments the application will crash at runtime (by attempting to access properties of "undefined"). Our client builds inject process.env, and our commonly used environments are unaffected (side note: we inject process.env with a restricted subset of the backend properties. It is extremely dangerous and insecure to inject the entire contents of process.env into a client-side application)

3) If NODE_ENV is set to development or production, but the values are not in lowercase (e.g. NODE_ENV=PRODUCTION), both isDevelopment and isProduction would be outputted as false, causing sections of code to be unexpectedly skipped.

Beyond these fixes, the test suite was overhauled and expanded to provide almost complete coverage (albeit only in a NodeJS environment - run through Mocha). There were numerous subtly broken tests, which have now been repaired.

A set of convenience functions were also added to simulaneously detecting the log level and whether the current process was run by Mocha.