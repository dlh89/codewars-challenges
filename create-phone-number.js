const input = [1,1,1,2,2,2,3,3,3,3];
const phoneNumber = createPhoneNumber(input);
console.log(phoneNumber);

function createPhoneNumber(num) {
    return num.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
