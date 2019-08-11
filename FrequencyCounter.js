// Input: 2 arrays
// Problem: each value in array 1 must be present in array 2, except the value is squared.
// The frequency of values must be the same
// Output: Return true if every value is present
// Ex. [1,2,3] -> [1,4,9] returns true
// Ex. [1,1,3] -> [1,2,9] returns false

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let areEqual = true;
    let frequencyCounterArr1 = {};
    let frequencyCounterArr2 = {};

    for (let i = 0; i < arr1.length; i++) {
        const valueSquared = Math.pow(arr1[i], 2);
        frequencyCounterArr1[valueSquared] = ++frequencyCounterArr1[valueSquared] || 1;

        let isValid = false;
        for (let j = 0; j < arr2.length; j++) {
            // Only the first time set the frequency counters of arr2
            if (i === 0) frequencyCounterArr2[arr2[j]] = ++frequencyCounterArr2[arr2[j]] || 1;

            if (valueSquared === arr2[j]) {
                if (frequencyCounterArr1[valueSquared] === frequencyCounterArr2[valueSquared])
                    isValid = true;
            }
        }

        if (!isValid) areEqual = false;
    }

    return areEqual;
}

console.log("False: ", same([1, 1, 3], [1, 4, 9]));

function smarterSame(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounterArr1 = {};
    for (let i = 0; i < arr1.length; i++) {
        const squaredElement = arr1[i] ** 2;
        frequencyCounterArr1[squaredElement] = ++frequencyCounterArr1[squaredElement] || 1;
    }

    let frequencyCounterArr2 = {};
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        frequencyCounterArr2[element] = ++frequencyCounterArr2[element] || 1;
    }

    let areEqual = true;
    for (key in frequencyCounterArr1) {
        if (frequencyCounterArr1[key] !== frequencyCounterArr2[key]) {
            console.log(key);
            areEqual = false;
        }
    }

    console.log(frequencyCounterArr1, frequencyCounterArr2);
    return areEqual;
}

console.log("True: ", smarterSame([1, 2, 3], [1, 4, 9]));
console.log("True: ", smarterSame([1, 2, 3], [4, 1, 9]));
console.log("False: ", smarterSame([1, 2, 3], [4, 9]));
console.log("False: ", smarterSame([1, 2, 1], [4, 4, 1]));

// Input is 2 strings
// Problem: Do both strings have the same frequency of letters
// Output is true if the strings are anagrams
// Ex. cinema and iceman returns true
// Ex. foo and bar returns false

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let lookupTable = {};
    for (char of str1) {
        lookupTable[char] = ++lookupTable[char] || 1;
    }

    for (const char of str2) {
        if (!lookupTable[char]) return false;
        else lookupTable[char]--;
    }

    return true;
}

console.log("True: ", isAnagram("iceman", "cinema"));
