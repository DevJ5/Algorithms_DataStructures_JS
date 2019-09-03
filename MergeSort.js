function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);

    // [10,24,76]

}

console.log(mergeSort([2, 3, 54, 32, 4, 67, 754]));

// Merge takes two sorted arrays
function merge(arr1, arr2) {
    let sortedArr = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i]);
            i++;
        } else {
            sortedArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        sortedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        sortedArr.push(arr2[j]);
        j++;
    }

    return sortedArr;
}

//console.log(merge([100], [2, 14, 99, 100, 102]));