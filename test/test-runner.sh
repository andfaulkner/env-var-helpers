#!/usr/bin/env sh

NODE_ENV=development ./node_modules/.bin/mocha ./test/NODE_ENV_development.test.js
NODE_ENV=production ./node_modules/.bin/mocha ./test/NODE_ENV_production.test.js

./node_modules/.bin/mocha ./test/LOG_LEVEL.test.js
LOG_LEVEL=trace ./node_modules/.bin/mocha ./test/LOG_LEVEL_trace.test.js
LOG_LEVEL=silly ./node_modules/.bin/mocha ./test/LOG_LEVEL_silly.test.js
LOG_LEVEL=verbose ./node_modules/.bin/mocha ./test/LOG_LEVEL_verbose.test.js
LOG_LEVEL=debug ./node_modules/.bin/mocha ./test/LOG_LEVEL_debug.test.js
LOG_LEVEL=info ./node_modules/.bin/mocha ./test/LOG_LEVEL_info.test.js
LOG_LEVEL=error ./node_modules/.bin/mocha ./test/LOG_LEVEL_error.test.js
LOG_LEVEL=wtf ./node_modules/.bin/mocha ./test/LOG_LEVEL_wtf.test.js

SECURITY_TEST=true ./node_modules/.bin/mocha ./test/SECURITY_TEST_true.test.js

RELEASE_ENV=development ./node_modules/.bin/mocha ./test/RELEASE_ENV_development.test.js
RELEASE_ENV=uat ./node_modules/.bin/mocha ./test/RELEASE_ENV_uat.test.js
RELEASE_ENV=qa ./node_modules/.bin/mocha ./test/RELEASE_ENV_qa.test.js
RELEASE_ENV=production ./node_modules/.bin/mocha ./test/RELEASE_ENV_production.test.js

./node_modules/.bin/mocha ./test/default-env.test.js
