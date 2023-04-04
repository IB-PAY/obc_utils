import { env } from 'process';
import * as Sentry from '@sentry/node';

export let allowRemoteLogStorage = env.REMOTE_ERROR_LOG_STORAGE === 'true';
let sentryAddress = env.SENTRY_URL;

export function loggerBootstrap() {
    if ( allowRemoteLogStorage ) {
        if ( sentryAddress ) {
            Sentry.init({
                dsn: sentryAddress,
            });
        } else {
            console.log("[INFO] Sentry Address is not set. Sentry will not be enabled.");
        }
        console.log("[INFO] Remote debuging <Sentry> Enabled");
    } else {
        console.log("[INFO] Remote debuging <Sentry> Disabled");
    }
}
