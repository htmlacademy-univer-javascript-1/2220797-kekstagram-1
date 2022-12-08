import { generateComments } from "./comments.js";
import { getRandomNumber } from "./random.js";
export function getPhotoDescriptions(randomCount) {
    const photoDescriptions = [];
    for (let i = 1; i < randomCount; i++) {
        const photoDescription = {
            description: "",
            id: i,
            likes: getRandomNumber(15, 200),
            url: 'photos/' + i + '.jpg',
            comments: generateComments(2)
        };
        photoDescriptions.push(photoDescription);
    }
    return photoDescriptions;
}
