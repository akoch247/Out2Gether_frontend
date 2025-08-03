export function getYYYYMMDD() {
    const now = new Date();

    return now.toISOString().split('T')[0];;
}