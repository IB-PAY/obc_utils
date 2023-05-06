import { env } from 'process';
import * as Sentry from '@sentry/node';
import { allowRemoteLogStorage } from './config';
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
        console.log("[INFO] Remote debugging <Sentry> Enabled");
    } else {
        console.log("[INFO] Remote debugging <Sentry> Disabled");
    }
}
