#!/usr/bin/env bash

# Copy the newrelic.js file to root of application
cp node_modules/newrelic/newrelic.js ./

# Replace new relic agent applicatio name and license key
sed -i "s/My Application/Statuspage Controller/g" ./newrelic.js
sed -i "s/license key here/b2d03d9ffe7424cbaf5ea5a81ab372bf3f2d909e/g" ./newrelic.js