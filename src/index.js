const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here 

    strTenSymbols = expr.split(/(.{10})/).filter(O=>O).join(',');                                                                                //Текущее регулярное выражение создает пустые элементы массива между кусками. filter(x=>x) используется для фильтрации этих пустых элементов
    const regex = /10/ig;
    const regex1 = /11/ig;
    const regex2 = /00/ig;
    const regex3 = /\*{10}/ig;
    let newStr = strTenSymbols.replace(regex,'.').replace(regex1,'-').replace(regex2,'').replace(regex3,' ').split(',');
    
    let resArr = [];
    for (let i in newStr){
     // resArr += MORSE_TABLE[newStr[i]];
     resArr += newStr[i] == ' ' ? ' ' : MORSE_TABLE[newStr[i]];
    }
    return resArr;
}
module.exports = {
    decode
}

