export function trimString(name: string) {
    try {
        if (name == null) {
            return '';
        }
        return name.trim();
    } catch (error) {
        console.log('trimString error : ', error);
    }
}