#!/usr/bin/env sh

./node_modules/.bin/mocha ./test/default-env.test.js

NODE_ENV=production ./node_modules/.bin/mocha ./test/NODE_ENV_production.test.js

LOG_LEVEL=silly ./node_modules/.bin/mocha ./test/LOG_LEVEL_silly.test.js
LOG_LEVEL=verbose ./node_modules/.bin/mocha ./test/LOG_LEVEL_verbose.test.js

SECURITY_TEST=true ./node_modules/.bin/mocha ./test/SECURITY_TEST_true.test.js
