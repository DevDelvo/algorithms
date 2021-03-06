
function checkMagazine(magazine, note) {
    const magHash = {};
    const words = magazine.split(" ");
    for (const word of words) {
        // console.log(word)
        if (magHash[word]) {
            magHash[word]++;
        } else {
            magHash[word] = 1;
        }
    }
    const noteWords = note.split(" ")
    for (const word of noteWords) {
        if (magHash[word]) {
            magHash[word]--;
        } else if (!magHash[word] || magHash[word] <= 0) {
            return false;
        }
    }
    return true;
}


const mag1 = "give me one grand today night";
const msg1 = "give one grand today";

const mag2 = "two times three is not four";
const msg2 = 'two times two is four';

const mag3 = 'ive got a lovely bunch of coconuts';
const msg3 = 'ive got some coconuts';

console.log(checkMagazine(mag1, msg1)); // true
console.log(checkMagazine(mag2, msg2)); // false
console.log(checkMagazine(mag3, msg3)); // false