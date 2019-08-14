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