function zero(operation = false) {
	const thisNumber = 0;
	if (operation) {
		return eval(operation.method + `(${thisNumber} , ${operation.operand})`);
	} else {
		return thisNumber;
	}
}
function one(operation = false) {
	const thisNumber = 1;
	if (operation) {
		return eval(operation.method + `(${thisNumber} , ${operation.operand})`);
	} else {
		return thisNumber;
	}
}
function two(operation = false) {
	const thisNumber = 2;
	if (operation) {
		return eval(operation.method + `(${thisNumber} , ${operation.operand})`);
	} else {
		return thisNumber;
	}
}
function three(operation = false) {
	const thisNumber = 3;
	if (operation) {
		return eval(operation.method + `(${thisNumber} , ${operation.operand})`);
	} else {
		return thisNumber;
	}
}
function four(operation = false) {
	const thisNumber = 4;
	if (operation) {
		return eval(operation.method + `(${thisNumber} , ${operation.operand})`);
	} else {
		return thisNumber;
	}
}
function five(operation = false) {
	const thisNumber = 5;
	if (operation) {
		return eval(operation.method + `(${thisNumber} , ${operation.operand})`);
	} else {
		return thisNumber;
	}
}
function six(operation = false) {
	const thisNumber = 6;
	if (operation) {
		return eval(operation.method + `(${thisNumber} , ${operation.operand})`);
	} else {
		return thisNumber;
	}
}
function seven(operation = false) {
	const thisNumber = 7;
	if (operation) {
		return eval(operation.method + `(${thisNumber} , ${operation.operand})`);
	} else {
		return thisNumber;
	}
}
function eight(operation = false) {
	const thisNumber = 8;
	if (operation) {
		return eval(operation.method + `(${thisNumber} , ${operation.operand})`);
	} else {
		return thisNumber;
	}
}
function nine(operation = false) {
	const thisNumber = 9;
	if (operation) {
		return eval(operation.method + `(${thisNumber} , ${operation.operand})`);
	} else {
		return thisNumber;
	}
}

function plus(leftOperand, rightOperand = false) {
	if (!rightOperand) {
		return {
			method: 'plus',
			operand: leftOperand,
		};
	}

	return leftOperand + rightOperand;
}
function minus(leftOperand, rightOperand = false) {
	if (!rightOperand) {
		return {
			method: 'minus',
			operand: leftOperand,
		};
	}

	return leftOperand - rightOperand;
}
function times(leftOperand, rightOperand = false) {
	if (!rightOperand) {
		return {
			method: 'times',
			operand: leftOperand,
		};
	}

	return leftOperand * rightOperand;
}
function dividedBy(leftOperand, rightOperand = false) {
	if (!rightOperand) {
		return {
			method: 'dividedBy',
			operand: leftOperand,
		};
	}

	return leftOperand / rightOperand;
}

const fiveTimesSeven = seven(times(five()));
console.log('fiveTimesSeven: ', fiveTimesSeven);