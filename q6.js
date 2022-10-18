//Q6. Create a function that takes a word and returns true if the word has two consecutive identical letters.

function doubleLetters(word){
    for (let i = 1; i < word.length; i++) {
        if (word[i-1] === word[i]) {
            return true;
        }
    }
    return false;
}

console.log(doubleLetters('loop'));

console.log(doubleLetters('yummy'));