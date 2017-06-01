#!/usr/bin/env sh

mocha ./test/default-env.test.js

NODE_ENV=production mocha ./test/NODE_ENV_eql_production.test.js

LOG_LEVEL=silly mocha ./test/LOG_LEVEL_eql_silly.test.js

LOG_LEVEL=verbose mocha ./test/LOG_LEVEL_eql_verbose.test.js

SECURITY_TEST=true mocha ./test/SECURITY_TEST_eql_true.test.js
