/**
 * 
*/

export function shuffle<T>(unshuffled: Array<T>): void {
    let currentIndex = unshuffled.length;
    let temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = unshuffled[currentIndex];
        unshuffled[currentIndex] = unshuffled[randomIndex];
        unshuffled[randomIndex] = temporaryValue;
    }
}
