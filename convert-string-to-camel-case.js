function toCamelCase(str) {
  return str.split(/(?<=-|_)/g).map((match, i) => {
	match = match.replace(/(-|_)/g, '');
	if (i !== 0) {
		match = match.charAt(0).toUpperCase() + match.slice(1);
	}
	return match;
  }).join('');
}

var camelCase = toCamelCase('the_stealth_warrior');
console.log('camelCase: ', camelCase);