const fs = require('fs');

const words = fs.readFileSync('word_rus.txt', "utf8").toString().split('\n');

fs.writeFileSync('../src/WordsReverse/array.js', `return arr = [${words}]`);