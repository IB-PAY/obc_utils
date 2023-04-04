import * as Sentry from '@sentry/node';
import { allowRemoteLogStorage, loggerBootstrap } from './bootstrap'

loggerBootstrap()

export class InfoRequestMeta {
	TID: string;
    date?: Date
}

export function Info<T>(message: string, meta?: Partial<InfoRequestMeta & T>) {
    let msg = ''
    if ( meta?.TID ) {
        msg += `[INFO] tid=${ meta.TID } ${ message }`
    } else {
        msg += `[INFO] ${ message }`
    }
    console.log(msg);
}

export class DebugRequestMeta {
	TID: string;
    date?: Date
}

export function Debug<T>(message: string, data: any, meta?: Partial<DebugRequestMeta & T>) {
    let payload = {
        message,
        TID: meta?.TID,
        data,
        meta
    }
    console.log(JSON.stringify(payload));
}

export class ErrorRequestMeta {
	TID: string;
    className?: string;
    func?: string;
    date?: Date
}


export function Error<T>(message: string, errorObject: ErrorConstructor | any, meta?: Partial<ErrorRequestMeta & T>) {
    let msg = ''
    if ( meta?.TID ) {
        msg += `[ERROR] tid=${ meta?.TID || "*"} ${ message }`
    } else {
        msg += `[ERROR] ${ message }`
    }
    if ( Object.keys(errorObject).length >= 1 ) {
        msg += ` ` + JSON.stringify(errorObject)
    }
    if ( errorObject?.message ) {
        msg += ` ` + errorToJson(errorObject)
    }
    if ( allowRemoteLogStorage ) {
        const jsonError = {
            name: errorObject.name,
            message: errorObject.message,
            stack: errorObject.stack,
            sentry: true
          };
        
        Sentry.captureMessage(JSON.stringify(jsonError));
    }

    console.log(msg);
}

function errorToJson(error: any) {
    var obj = {
      name: error.name,
      message: error.message,
      stack: error.stack
    };
    return JSON.stringify(obj);
  }