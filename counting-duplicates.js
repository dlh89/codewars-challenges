const str = 'Test';
const duplicateCharCount = getDuplicateCharCount(str);
console.log(duplicateCharCount);

function getDuplicateCharCount(str) {
    const seenChars = new Set();
    str.toLowerCase().split('').forEach(char => seenChars.add(char));

    return seenChars.size;
}
