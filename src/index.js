let singleRanks = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
};
let decimalRanks = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
}
module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    let numArr = ('' + number).split('');
    let lastPosition = numArr.length - 1;
    let singlePart = '';
    let decimalPart = '';
    let hundreds = '';

    if (!lastPosition) {
        singlePart = '';
        singlePart = '' + singleRanks[+ numArr[lastPosition]];
    }

    if (+numArr[lastPosition - 1] === 1) {
        singlePart = '';
        decimalPart = singleRanks[+('1' + numArr[lastPosition])];
    }

    if (+numArr[lastPosition - 1] > 1) {
        singlePart = ' ' + singleRanks[+numArr[lastPosition]];
        decimalPart = '' + decimalRanks[+numArr[lastPosition - 1]];
    };
    if (+numArr[lastPosition - 1] < 1) {
        singlePart = '' + singleRanks[+numArr[lastPosition]];
        decimalPart = '';
    }
    if (lastPosition - 2 >= 0)
        hundreds = singleRanks[+numArr[lastPosition - 2]] + ' hundred ';

    return (hundreds + decimalPart + singlePart).trim();
}



