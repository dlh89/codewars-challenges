function titleCase(title, minorWords) {
    const minorWordsArr = minorWords ? minorWords.toLowerCase().split(' ') : [];
    return title.toLowerCase().split(' ').map((word, i) => {
        return i !== 0 && minorWordsArr.includes(word) ? word : word.slice(0, 1).toUpperCase() + word.slice(1);
    }).join(' ');
}

// var answer = titleCase('a clash of KINGS', 'a an the of');
var answer = titleCase('the quick brown fox');
// var answer = titleCase('');
console.log('answer:', answer);