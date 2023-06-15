function firstNonRepeatingLetter(s) {
    let firstNonRepeatingLetter = '';
    for (letter of s.split('')) {
        if (isRepeated(letter, s)) {
            firstNonRepeatingLetter = letter;
            break;
        }
    }

    return firstNonRepeatingLetter;
}

function isRepeated(letter, s) {
    return letter.toLowerCase()
}

var firstNonRepeatingLetter = firstNonRepeatingLetter('sTreSS');
console.log('firstNonRepeatingLetter');