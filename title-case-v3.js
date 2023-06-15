function titleCase(title, minorWords) {
    const words = [];
    for (let [i, word] of title.split(' ').entries()) {
        word = word.toLowerCase();
        if (i === 0 || !minorWords || !minorWords.toLowerCase().includes(word)) {
            word = word.slice(0, 1).toUpperCase() + word.slice(1);
        }
        words.push(word);
    }

    return words.join(' ');
}

var answer = titleCase('a clash of KINGS', 'a an the of');
// var answer = titleCase('');
console.log('answer:', answer);