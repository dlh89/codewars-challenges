function titleCase(title, minorWords) {
    const matches = title.toLowerCase().match(/(^|(?<= ))./g);
    return title.toLowerCase().replaceAll(/(^|(?<= ))./ig, char => char.toUpperCase());
}

var answer = titleCase('a clash of KINGS', 'a an the of');
// var answer = titleCase('');
console.log('answer:', answer);