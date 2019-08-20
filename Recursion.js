// A function that calls itself
// Iteration vs recursion
// Push on the call stack and pop off the call stack
// Helper method recursion

function collectOddValues(arr) {
    let odd = [];

    function helper(input) {
        if (input.length === 0) return;
        if (input[0] % 2 === 1) odd.push(input[0]);
        helper(input.slice(1));
    }
    helper(arr);
    return odd;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6]));