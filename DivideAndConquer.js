// Binary search
// Sorted array: [1,1,3,5,6,8,9,12,13,16,18,28]
function search(arr, val) {
    // ex. [1,3,5,6,8,9], 1
    let middle = Math.floor((arr.length - 1) / 2); // 2
    if (arr[middle] === val) return middle;
    console.log("middle: ", middle);
    while (middle !== 0 && middle !== arr.length - 1) {
        if (val > arr[middle]) {
            middle = Math.floor((middle + arr.length - 1) / 2);
            console.log(middle);
        } else {
            middle = Math.floor(middle / 2);
        }
        if (arr[middle] === val) return middle;
    }

    return -1;
}

console.log(search([1, 1, 3, 5, 6, 8, 9, 12, 13, 16, 18, 28], 18));