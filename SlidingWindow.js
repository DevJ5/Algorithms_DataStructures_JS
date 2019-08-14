// Input is an array of numbers and a number n
// Problem: calculate the maximum sum of n consecutive elements
// Output: the sum
// Ex. [1,2,3,4,5], 2 -> 9
// Ex. [4,2,1,6,3], 3 -> 10
// Is it ordered? Can the array have negative numbers? Can n be negative?

function smartMaxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    // [1,2,3,4,5], 3
    // maxSum = 1 + 2 + 3
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

function maxSubarraySum(arr, n) {
    let highestSumThusFar = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        //    i
        // [4,2,1,6,3], 3
        //    j
        for (let j = 0; j < n; j++) {
            sum += arr[j + i]; // sum += 4, 2, 1
        }
        if (sum > highestSumThusFar) highestSumThusFar = sum;
    }
    return highestSumThusFar;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(smartMaxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));