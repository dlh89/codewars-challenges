function firstNonRepeatingLetter(s) {
    for (letter of s) {
        if (s.match(new RegExp(letter, 'ig')).length === 1) {
            return letter;
        }
    }

    return '';
}

var firstNonRepeatingLetter = firstNonRepeatingLetter('sTreSS');
// var firstNonRepeatingLetter = firstNonRepeatingLetter('moonmen');
// var firstNonRepeatingLetter = firstNonRepeatingLetter('A');
console.log(firstNonRepeatingLetter);