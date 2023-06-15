function titleCase(title, minorWords) {
    const newTitle = [];
    if (!title.length) {
        return title;
    }
    for (let [i, word] of title.split(' ').entries()) {
        if (i === 0 || !minorWords.toLowerCase().split(' ').includes(word.toLowerCase())) {
            word = convertFirstCharToUppercase(word);
        }
        newTitle.push(word);
    }
    return newTitle.join(' ');
}

function convertFirstCharToUppercase(word) {
    const firstChar = word[0].toUpperCase();
    word = firstChar + word.slice(1).toLowerCase();
    return word;
}

// var answer = titleCase('a clash of KINGS', 'a an the of');
var answer = titleCase('');
console.log('answer:', answer);