const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let translated = "";
  let letter = "";
  let morse = "";

  for (let i = 0; i < expr.length; i += 10) {
    letter = expr.slice(i, i + 10);
    if (letter === "**********") {
      translated += " ";
      continue;
    }

    for (let x = 0; x < 10; x += 2) {
      let pair = letter.slice(x, x + 2);
      if (pair === "10") {
        morse += ".";
      }
      if (pair === "11") {
        morse += "-";
      }
    }
    translated += MORSE_TABLE[morse];
    morse = "";
  }
  return translated;
}

module.exports = {
  decode,
};
