// Input is an array of numbers and a number n
// Problem: calculate the maximum sum of n consecutive elements
// Output: the sum
// Ex. [1,2,3,4,5], 2 -> 9
// Ex. [4,2,1,6,3], 3 -> 10
// Is it ordered? Can the array have negative numbers? Can n be negative?
// 

function maxSubarraySum(arr, n) {
    if (n < 1 || arr.length === 0) return null;

    let highestSumThusFar = 0;
    // [1,2,3,4,5], 2
    [3]
    // length is 5, so up to index 3

    // [4,2,1,6,3], 3
    [7]
    for (let i = 0; i <= arr.length - n; i++) {
        let sum = 0;
        sum += arr[i]; // +4
        //2     //0 + 3
        for (let j = i + 1; j < i + n; j++) {
            sum += arr[j]; // +2 +1
        }
        if (highestSumThusFar < sum) highestSumThusFar = sum;
    }

    return highestSumThusFar;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));