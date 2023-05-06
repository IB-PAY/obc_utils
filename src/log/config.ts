import { env } from 'process';

export let allowRemoteLogStorage = env.REMOTE_ERROR_LOG_STORAGE === 'true';
export let logFormat = env.LOG_FORMAT || 'json';