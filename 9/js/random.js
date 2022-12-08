export function getUniqueRandomNumber(min, max) {
    const n = getRandomNumber(min, max);
    if (generatedNumbers.includes(n))
        return getUniqueRandomNumber(min, max);
    else
        generatedNumbers.push(n);
    return n;
}
export function getRandomNumber(min, max) {
    if (min < 0)
        throw 'min < 0';
    if (min > max) {
        const tmp = min;
        min = max;
        max = tmp;
    }
    return Math.round(Math.random() * (max - min) + min);
}
const generatedNumbers = [];
