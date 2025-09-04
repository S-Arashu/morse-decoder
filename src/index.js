const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  let encodedString = '';
  let resultStr = '';

  const iterations = expr.length / 10;
  let SIMB = 10;
  let START = 0;

  for (let i = 0; i < iterations; i += 1) {
    if (expr[START] === '*') {
      resultStr += ' ';
      SIMB += 10;
      START += 10;
      encodedString = '';
    }

    const zeroesEnd = expr.indexOf('1', START);

    if (zeroesEnd !== -1) {
      for (let j = zeroesEnd; j < SIMB; j += 2) {
        if (expr[j] === '1' && expr[j + 1] === '0') {
          encodedString += '.';
        } else if (expr[j] === '1' && expr[j + 1] === '1') {
          encodedString += '-';
        }
      }

      resultStr += MORSE_TABLE[encodedString];
      SIMB += 10;
      START += 10;
      encodedString = '';
    }
  }

  return resultStr;
};
