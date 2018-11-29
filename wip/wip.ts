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
import h from '../index';

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
