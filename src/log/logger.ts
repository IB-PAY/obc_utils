import { hostname, release } from 'os'
import * as Sentry from '@sentry/node';
import { loggerBootstrap } from './bootstrap'
import { allowRemoteLogStorage, logFormat } from './config';

loggerBootstrap()

export class loggingOptions {
    TID?: string;
    class?: string;
	function?: string;
    path?: string;
    input?: any;
    stack?: any;
    date?: string;
}

interface payload {
    TID?: string;
    level?: "INFO" | "DEBUG" | "ERROR";
    message?: string;
    os?: string;
    os_release?: string;
    date?: string;
    meta?: any;
}

export class InfoRequestMeta {
	TID: string;
    date?: Date
}

export function Info<T>(message: string, meta?: Partial<InfoRequestMeta & T>) {
    const jsonError: payload | loggingOptions | Partial<DebugRequestMeta & T> = {
        level: "INFO",
        TID: meta?.TID,
        message,
        meta,
        os: hostname(),
        os_release: release(),
        date: new Date().toISOString()
    };
    logging(jsonError)
}

export class DebugRequestMeta {
	TID: string;
    date?: string;
    tracer: any;
}

/**
 * 
 * @param message 
 * @param debugValues 
 * @param meta 
 * 
 * @example 
 *  Debug("After calculating incoming value", {
 *      class: BusinessClassLogic.name,
 *      function: FunctionLogic.name,
 *      input: { amount, userId },
 *      path: "src/service/payment.ts",
 *  }, {
 *      TID: "00607dee-ebda-11ed-a42c-1fdfc490efd3",
 *      tracer: new SentrySpan()
 *  } )
 */
export function Debug<T>(message: string, debugValues: any, meta?: Partial<DebugRequestMeta & T>) {
    let debugPayload: payload | Partial<DebugRequestMeta & T> | { debug: any } = {
        level: "DEBUG",
        TID: meta?.TID || debugValues?.TID,
        message,
        debug: debugValues,
        os: hostname(),
        os_release: release(),
        date: new Date().toISOString()
    }
    logging(debugPayload)
}

export class ErrorRequestMeta {
	TID: string;
    className?: string;
    func?: string;
    date?: Date
}

/**
 * 
 * @param message 
 * @param errorOptions 
 * @param meta 
 * 
 * @example 
 *  ErrorLog("Database is Down", {
 *      error: new Error("Database connection")
 *      class: BusinessClassLogic.name,
 *      function: FunctionLogic.name,
 *      input: { value },
 *      path: "src/log.ts",
 *  }, {
 *      TID: "25852388-ebd8-11ed-94f7-d3c91de140b8",
 *      tracer: new SentrySpan()
 *  } )
 */
export function Error<T>(message: string, errorOptions: Partial<loggingOptions & {error: any}>, meta?: Partial<ErrorRequestMeta & T>) {
    const jsonError: payload | loggingOptions | Partial<DebugRequestMeta & T> = {
        level: "ERROR",
        TID: meta?.TID || errorOptions?.TID,
        message,
        ...errorOptions,
        meta,
        os: hostname(),
        os_release: release(),
        date: new Date().toISOString()
    };
    logging(jsonError)
}

function logging(logObject: any) {
    if ( allowRemoteLogStorage ) {    
        Sentry.captureMessage(JSON.stringify(logObject));
    }
    if ( logFormat !== 'json' ) {
        let message = `[${ logObject.level }] ${ logObject.message }`
        console.log(message);
    } else {
        console.log(JSON.stringify(logObject));
    }
}