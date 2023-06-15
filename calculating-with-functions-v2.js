function zero(operation = false) {
	return handleNumber(0, operation);
}
function one(operation = false) {
	return handleNumber(1, operation);
}
function two(operation = false) {
	return handleNumber(2, operation);
}
function three(operation = false) {
	return handleNumber(3, operation);
}
function four(operation = false) {
	return handleNumber(4, operation);
}
function five(operation = false) {
	return handleNumber(5, operation);
}
function six(operation = false) {
	return handleNumber(6, operation);
}
function seven(operation = false) {
	return handleNumber(7, operation);
}
function eight(operation = false) {
	return handleNumber(8, operation);
}
function nine(operation = false) {
	return handleNumber(9, operation);
}

function plus(rightOperand) {
	return function(leftOperand) {
		return leftOperand + rightOperand;
	};
}
function minus(rightOperand) {
	return function(leftOperand) {
		return leftOperand - rightOperand;
	};
}
function times(rightOperand) {
	return function(leftOperand) {
		return leftOperand * rightOperand;
	};
}
function dividedBy(rightOperand) {
	return function(leftOperand) {
		return Math.floor(leftOperand / rightOperand);
	};
}
function handleNumber(number, operation) {
	if (operation) {
		return operation(number);
	} else {
		return number;
	}
}

const fiveTimesSeven = seven(times(five()));
console.log('fiveTimesSeven: ', fiveTimesSeven);

// const eightMinusThree = eight(minus(three()));
// console.log('eightMinusThree: ', eightMinusThree);