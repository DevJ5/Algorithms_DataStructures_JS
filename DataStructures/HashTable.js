function hash(key, arrayLen) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total += (total + value) % arrayLen;
    }

    return total;
}

// Make it a little faster and with less collisions (Primes are magic)
function hash2(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total += (total * WEIRD_PRIME + value) % arrayLen;
    }

    return total;
}

// Seperate chaining & Lineair probing
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total += (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        const hashedKey = this._hash(key);
        if (this.keyMap[hashedKey] === undefined) {
            this.keyMap[hashedKey] = [];
        }
        this.keyMap[hashedKey].push([key, value]);
    }

    get(key) {
        const hashedKey = this._hash(key);

        if (this.keyMap[hashedKey].length) {
            for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
                if (key === this.keyMap[hashedKey][i][0])
                    return this.keyMap[hashedKey][i][1];
            }
        }
        return undefined;
    }
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    const element = this.keyMap[i][j][1];
                    // Only uniques:
                    if (!valuesArr.includes(element)) valuesArr.push(element);
                }
            }
        }
        return valuesArr;
    }
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    const element = this.keyMap[i][j][0];
                    // Only uniques, normally you wouldnt be able to set the same key twice:
                    if (!keysArr.includes(element)) keysArr.push(element);
                }
            }
        }
        return keysArr;
    }
}
