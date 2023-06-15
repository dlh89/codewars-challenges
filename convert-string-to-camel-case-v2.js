function toCamelCase(str) {
	return str.replace(/[-_](\w)/g, (symbol, firstChar) => firstChar.toUpperCase());
}

var camelCase = toCamelCase('the_stealth_warrior');
console.log('camelCase: ', camelCase);