#!/usr/bin/env sh

./node_modules/.bin/mocha ./test/default-env.test.js

NODE_ENV=production ./node_modules/.bin/mocha ./test/NODE_ENV_eql_production.test.js

LOG_LEVEL=silly ./node_modules/.bin/mocha ./test/LOG_LEVEL_eql_silly.test.js

LOG_LEVEL=verbose ./node_modules/.bin/mocha ./test/LOG_LEVEL_eql_verbose.test.js

SECURITY_TEST=true ./node_modules/.bin/mocha ./test/SECURITY_TEST_eql_true.test.js
