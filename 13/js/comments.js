import { commentTexts, names } from "./data/names.js";
import { getUniqueRandomNumber, getRandomNumber } from "./random.js";
export function generateComments(count) {
    const comments = [];
    for (let i = 0; i < count; i++) {
        const comment = {
            id: getUniqueRandomNumber(0, 200),
            avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
            message: commentTexts[getRandomNumber(0, commentTexts.length - 1)],
            name: names[getRandomNumber(0, names.length - 1)]
        };
        comments.push(comment);
    }
    return comments;
}
