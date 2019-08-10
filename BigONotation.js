let now = new Date();
console.log("Now: ", now);

let total = 0;
for (let i = 0; i < 1000000000; i++) {
    total += i;
}

let newNow = new Date();
console.log("New now: ", newNow);
console.log("Time elapsed: ", (newNow - now) / 1000);


function onlyEvenIndexes(arr) {
    const evenIndexArr = Array(Math.ceil(arr.length / 2));

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenIndexArr[i / 2] = i;
        }
    }
    return evenIndexArr;
}

let testArr = Array(100);
console.log(onlyEvenIndexes(testArr));