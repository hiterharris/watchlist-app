export const trimTitle = (str) => {
    if (str.length > 10) {
        const trim = str.slice(0, 15);
        console.log(trim + '...');
        return trim + '...'
    } else {
        return str;
    }
}