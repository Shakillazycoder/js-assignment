function findLongChar(sentence){
    const words = sentence.split(' ')
    console.log(words);

    let longChar = ''
    for ( const word of words){
        if(word.length > longChar.length){
            longChar = word
        }
    }
    console.log(longChar)
    return longChar
}


const sentence = 'I am learning Programming to become a programmer';
const maxChar = findLongChar(sentence);
console.log(maxChar)