/* 
1. Understand the problem
     - What are the inputs, what is the data type?
     - What is the output, what is the data type?
     - What are the important pieces of information to the problem?   
2. Concrete examples
     - What edge cases? Upper/lowercase, whitespaces, numbers, non alphanumeric characters (punctuation and symbol characters)
     - Is the array sorted?
     - Invalid inputs
3. Break it down in small steps, write them down step by step
     - If we dont finish our code in time, we do have the approach to the problem written down.
4. Simplify
     - Make the step simple first, solve that and then add the complexity back in.
5. Refactor
*/

function countCharacters(str) {
     str = str.trim().toLowerCase().replace(/[\d\s]/g, '');

     let charCount = {};

     [...str].forEach(char => charCount[char] === undefined ? charCount[char] = 1 : charCount[char]++);
     // Fancy:
     // for (const char of str) {
     //     charCount[char] = ++charCount[char] || 1;
     // }

     return charCount;
}

function getAlphabetObj() {
     let alphabetObj = {};
     for (let i = "a".charCodeAt(0), z = "z".charCodeAt(0); i <= z; i++) {
          alphabetObj[String.fromCharCode(i)] = '';
     }

     return alphabetObj;
}

console.log(countCharacters("Sesame Street 101"));
console.log(getAlphabetObj());