export class RequestMeta {
	TID: string;
}

export function Info(message: string, meta?: RequestMeta) {
    let msg = ''
    if ( meta?.TID ) {
        msg += `[INFO] tid=${ meta.TID } ${ message }`
    } else {
        msg += `[INFO] ${ message }`
    }
    console.log(msg);
}

export function Debug(message: string, data: any, meta?: RequestMeta) {
    let payload = {
        message,
        TID: meta?.TID,
        data,
    }
    console.log(JSON.stringify(payload));
}

export function Error(message: string, errorObject: any, meta?: RequestMeta) {
    let msg = ''
    if ( meta?.TID ) {
        msg += `[ERROR] tid=${ meta.TID } ${ message }`
    } else {
        msg += `[ERROR] ${ message }`
    }
    msg += ` ` + JSON.stringify(errorObject)
    console.log(msg);
}