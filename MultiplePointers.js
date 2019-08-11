function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        else if (sum > 0) right--;
        else left++;
    }
}

console.log(sumZero([-2, 1, 0, 2, 3, 6]));

// Input is a sorted array
// Output is the number of unique numbers
// Ex. [1,1,3,5,5,6] -> 4
function countUniqueValues(arr) {
    // [-2, -1, -1, 0, 1] -> 4
    if (arr.length === 0) return 0;

    let middle = Math.floor(arr.length / 2);
    let leftIndex = middle - 1;
    let rightIndex = middle;

    let count = 0;

    // Check if the middle ones are equal, then its 1 unique, else it counts for 2 uniques
    if (arr[leftIndex] === arr[rightIndex]) count++;
    else count += 2;

    while (leftIndex > 0 && rightIndex < arr.length - 1) {
        if (arr[leftIndex] !== arr[leftIndex - 1]) count++;
        leftIndex--;

        if (arr[rightIndex] !== arr[rightIndex + 1]) count++;
        rightIndex++;
    }

    // Check with odd length array if the last number is unique
    if (arr.length % 2 !== 0 && arr[arr.length - 1] !== arr[arr.length - 2]) {
        count++;
    }

    return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 6]));

function countUniqueValues2(arr) {
    // Ex. [1,1,3,5,5,6] -> 4
    if (arr.length === 0) return 0;

    let left = 0;
    let right = 0;

    while (right < arr.length - 1)
        if (arr[right] === arr[right + 1]) right++;
        else {
            left++;
            right++;
        }

    return left + 1;
}
console.log(countUniqueValues2([1, 1, 1, 1, 6]));
//     i
// [1, 1, 1, 1, 6]
//           j
