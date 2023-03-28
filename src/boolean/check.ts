
export function returnBooleanValue(value: any) {
    return typeof value === 'string' ? value === 'true' : value
}