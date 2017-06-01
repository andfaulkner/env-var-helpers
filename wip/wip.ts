/**************************************************************************************************
*
*       @file ./wip.ts
*       
*       Under consideration for inclusion.
*       These may be somewhat 'bloating' and could add confusion to the library.
*
*/

declare const process: any;

import { env, isVerbose, isDev, isProd, isDebug, isSilly } from '../index';
import * as h from '../index';

const lcNodeEnv =
  process.env.NODE_ENV ? process.env.NODE_ENV.toString().toLowerCase() : false;

// Check process.env.NODE_ENV for a variety of generic unit test env var names
// & most notable JS test runners/libs/tools (as of 2017)
export const isNodeEnvTest = lcNodeEnv &&
  ['test', 'unittest', 'testenv', 'testrunner', 'testframework', 'testing', 'testingenv',
   'unittesting', 'integrationtesting', 'spec', 'lab', 'intern', 'nightwatch', 'ava', 'karma', 'selenium', 'yui', 'yuitest',
   'protractor', 'jest', 'chimp', 'jasmine', 'chai', 'buster', 'nightmare', 'tape',
   'cypress', 'webdriver', 'qunit', 'jsverify', 'testdouble', 'mocha', 'wallaby',
   'lighttest', 'jspec', 'sinon', 'crosscheck', 'vows', 'unit.js', 'nodeunit', 'wru',
   'unitjs', 'unittest', 'tap', 'phantom', 'phantomjs'].some(val => val === lcNodeEnv);

export const isNotProdTestOrDev = !h.isDev && !h.isProd && !isNodeEnvTest

/**************************** LOG LEVEL + TEST ENVIRONMENT SHORTHANDS *****************************/
// More are defined for verbose + mocha because it's a much more common pattern.
export const isVerboseMocha = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isVerboseTest  = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isVTest        = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isVMocha       = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isMochaVerbose = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isTestVerbose  = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isMochaV       = env.WAS_RUN_THRU_MOCHA && isVerbose;
export const isTestV        = env.WAS_RUN_THRU_MOCHA && isVerbose;

export const isDebugMocha   = env.WAS_RUN_THRU_MOCHA && isDebug;
export const isDebugTest    = env.WAS_RUN_THRU_MOCHA && isDebug;
export const isMochaDebug   = env.WAS_RUN_THRU_MOCHA && isDebug;
export const isTestDebug    = env.WAS_RUN_THRU_MOCHA && isDebug;

export const isSillyMocha   = env.WAS_RUN_THRU_MOCHA && isSilly;
export const isSillyTest    = env.WAS_RUN_THRU_MOCHA && isSilly;
export const isMochaSilly   = env.WAS_RUN_THRU_MOCHA && isSilly;
export const isTestSilly    = env.WAS_RUN_THRU_MOCHA && isSilly;
