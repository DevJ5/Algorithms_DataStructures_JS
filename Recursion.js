// A function that calls itself
// Iteration vs recursion
// Push on the call stack and pop off the call stack
// Helper method recursion vs pure recursion

function isPalindrome(str) {

    return str === isPalindrome(str.slice(1)) + str[0];
}

console.log(isPalindrome("hi"));