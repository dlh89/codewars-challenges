const input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
const categorisedMembers = categoriseMembers(input);
console.log(categorisedMembers);

function categoriseMembers(input) {
    return input.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}