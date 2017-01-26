#!/usr/bin/env sh

mocha ./test/default-env.test.js

NODE_ENV=production mocha ./test/NODE_ENV_eql_production.test.js

LOG_LEVEL=silly mocha ./test/LOG_LEVEL_eql_silly.test.js
