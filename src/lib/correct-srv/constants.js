'use strict';

const XoDs = require('xo-ds-handler');
const xoDs = new XoDs();

global.NODE_ENV = 'qa'; // production
global.shouldUpdate = false;
global.foldName = 'log';

console.log('====Args=====');
process.argv.forEach((item, index) => {
    if (index <= 1) { return; }

    const par = item.replace('--', '').split('=');
    console.log(par);

    global[par[0]] = par[1];
});
console.log('=============');

shouldUpdate = shouldUpdate === 'true';
console.log('shouldUpdate: ', shouldUpdate);

let config = {};
let requestInfo = {};

if (NODE_ENV === 'production') {
    console.log('---using production config');
    config = {
        xoDsConfig: {
            'write-store': {
                storefront: 'postgres://localservices:XvkTraVU94enXcud@storefronts-pg-prod.cfjnafc8bsrz.us-east-1.rds.amazonaws.com/storefront'
            }
        },
        DB: 'storefront'
    };

    requestInfo = {
        url   : 'https://prod-sales-api.localsolutions.theknot.com',
        token : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJNeUFjY291bnQgQWRtaW4gQXBwbGljYXRpb24iLCJpYXQiOjE0OTk0MTc4MDEsImV4cCI6NDY1NTA5MDkxNywiYXVkIjoiaHR0cDovL3BhcnRuZXJzYWRtaW4udGhla25vdC5jb20iLCJzdWIiOiJ2MSBzZWN1cml0eSIsImNsaWVudElkIjoiNTQ5MTUzM2ItNTI2Ny00NzhmLThlOWItNTNkNzUyYWQ5ZTRhIn0.jF218AKdaS8q3gFa_ixn5KZA0wht9xgzR-MVNdeizqY',
        apikey: '2c3e706eec474381a58aef482a5cff68'
    };
} else if (NODE_ENV === 'qa') {
    console.log('---using qa config');
    config = {
        xoDsConfig: {
            'write-store': {
                storefront: 'postgres://localservices:!q2w3e4r5t6y7@storefronts-pg-qa.cfjnafc8bsrz.us-east-1.rds.amazonaws.com/storefront'
            }
        },
        DB: 'storefront'
    };

    requestInfo = {
        url   : 'https://qa-sales-api.localsolutions.theknot.com',
        token : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJNeUFjY291bnQgQWRtaW4gQXBwbGljYXRpb24iLCJpYXQiOjE0OTk0MTc4MDEsImV4cCI6NDY1NTA5MDkxNywiYXVkIjoicWEucGFydG5lcnNhZG1pbi50aGVrbm90LmNvbSIsInN1YiI6InYxIHNlY3VyaXR5IiwiY2xpZW50SWQiOiI5ZDlkM2ZjMy03OWUxLTRiYTUtYjE2Ny01ZjA1ODE5NmYxZjUifQ.BK5-8gkpUK9zOosfLRFzNj54r9LdvbbvoUypd3yc44M',
        apikey: '2f40b70d252548e79f5b62cda387c8e0'
    };
} else {
    console.log('-----using none config');
}

xoDs.config(config.xoDsConfig);

module.exports = {
    xoDs,
    config,
    requestInfo
};
