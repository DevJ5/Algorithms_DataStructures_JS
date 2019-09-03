function bubbleSort(str) {
    let strArr = str.split("");
    let swapped;
    do {
        swapped = false;
        for (let j = 0; j < strArr.length - 1; j++) {
            if (strArr[j] > strArr[j + 1]) {
                let temp = strArr[j];
                strArr[j] = strArr[j + 1];
                strArr[j + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return strArr.join("");
}

console.log(bubbleSort("qrstuvwxzyabcdef"));

function selectionSort(str) {
    let strArr = str.split("");

    for (let i = 0; i < strArr.length - 1; i++) {
        let lowest = i;
        for (let j = i + 1; j < strArr.length; j++) {
            if (strArr[j] < strArr[lowest]) lowest = j;
        }
        if (i !== lowest) {
            let temp = strArr[i];
            strArr[i] = strArr[lowest];
            strArr[lowest] = temp;
        }

    }

    return strArr.join("");
}

console.log(selectionSort("qrstuvwxzyabcdef"));

function insertionSort(str) {
    let strArr = str.split("");

    for (let i = 1; i < strArr.length; i++) {
        let currentValue = strArr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (currentValue < strArr[j]) {
                strArr[j + 1] = strArr[j];
                if (j === 0) strArr[j] = currentValue;
            } else {
                strArr[j + 1] = currentValue;
                break;
            }

        }


    }
    return strArr.join("");
}
console.log(insertionSort("qrstabcd"));