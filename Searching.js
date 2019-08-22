
function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num === value) return i;
    }

    return -1;
}

function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((end + start) / 2);

        if (arr[middle] === value) return middle;
        else if (arr[middle] < value) start = middle + 1;
        else end = middle - 1;
    }

    return -1;
}
let numbers = [1, 4, 6, 7, 9, 14, 25, 33, 46, 87];

console.log(binarySearch(numbers, 65));