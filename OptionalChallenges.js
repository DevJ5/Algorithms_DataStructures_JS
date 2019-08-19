function sameFrequency(a, b) {
    let lookupTableA = {};

    while (a > 0) {
        let lastDigit = a % 10;
        if (lookupTableA[lastDigit] !== undefined) lookupTableA[lastDigit]++
        else lookupTableA[lastDigit] = 1;

        a = Math.floor(a / 10);
    }

    let lookupTableB = {};
    while (b > 0) {
        let lastDigit = b % 10;
        if (lookupTableB[lastDigit] !== undefined) lookupTableB[lastDigit]++
        else lookupTableB[lastDigit] = 1;

        b = Math.floor(b / 10);
    }

    for (const key in lookupTableA) {
        if (lookupTableA[key] !== lookupTableB[key]) return false;
    }

    return true;
}

function areThereDuplicates() {
    let arr = Object.values(arguments);

    let lookupTable = {};

    for (const val of arr) {
        lookupTable[val] = ++lookupTable[val] || 1;
    }

    for (const key in lookupTable) {
        if (lookupTable[key] > 1) return true;
    }

    return false;
}


areThereDuplicates(1, 2, 3, 4, 777)

function areThereDuplicates2(...args) {
    let sortedArr = args.sort((a, b) => b < a);

    for (let i = 0; i
        < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) return true;
    }

    return false;
}

areThereDuplicates2(1, 2, 3, 4, 777);

function countUniqueValues(arr) {
    // [1,1,2,3,3,4,6] -> 5 unique numbers.

    //          i
    // [1,2,3,4,6,4,6] -> 5 unique numbers.
    //                j
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    console.log(arr.slice(0, i + 1));

    return arr;
}

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 6]));

function sumZero(arr) {
    // [-3,-2,-1,0,1,2]
    for (let i = 0, j = arr.length - 1; i < j; i++) {
        let sum = arr[i] - arr[j];
        if (sum === 0) return `[${arr[i]}, ${arr[j]}]`;
        else if (sum < 0) i++;
        else j--;
    }
}


// Input is a sorted array of ints (can be negative) and an average.
// Output is true if there is a pair that has the target average.
// [1,2,3], 2.5 -> true
// sum van een pair = avg * 2
// Als avg 8 is dan moet sum 16 zijn. -> 1 + 15 of 2 + 14
function averagePair(arr, avg) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let localAvg = (arr[start] + arr[end]) / 2;
        if (localAvg = avg) return true;
        if (localAvg < avg) start++;
        else end--;
    }

    return false;
}

// Inputs are two strings
// Problem: Are the characters in the first string a subsequence of the characters in the second string.
// Output is true or false.

function isSubsequence(str1, str2) {
    if (str1.length > str2.length) return false;
    if (str1.length === str2.length && str1 !== str2) return false;

    for (let i = 0, j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) i++;
        if (i === str1.length) return true;

    }

    return false;

}

console.log(isSubsequence('sing', 'sting')); // true

function maxSubarraySum(arr, n) {
    if (n > arr.length) return null;

    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    let tempSum = maxSum;
    for (let i = 0; i < arr.length - n; i++) {
        tempSum -= arr[i];
        tempSum += arr[n + i];

        if (tempSum > maxSum) maxSum = tempSum;
    }

    return maxSum;

}

console.log(maxSubarraySum([100, 200, 300, 400], 2));

function minSubArrayLen(arr, n) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < arr.length) {
        if (total < n && end < arr.length) {
            total += arr[end];
            end++;
        }
        else if (total === n) {
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
        }
        else if (total > n) {
            total -= arr[start];
            start++;
        }
        else {
            break;
        }
    }

    return minLen;
}

console.log("min subarray", minSubArrayLen([2, 2, 2, 2, 2, 2], 7)); // 2





