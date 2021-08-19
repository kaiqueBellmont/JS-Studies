// let assert = require('assert');
// let teste = assert.strictEqual(7 + 1, 8);

function add(a, b){
    return a + b;
}

const add2 = (a, b) => { return a + b };
// Calling function add2()
assert.equal(add2(5, 2), 7);
// Equivalent to add2:
const add3 = (a, b) => a + b;

const obj = {
    first: 'Jane', // property
    last: 'Doe', // property
    getFullName() { // property (method)
    return this.first + ' ' + this.last;
    },
    };


    const arr = ['a', 'b', 'c'];
    assert.equal(arr.length, 3);
    // Getting an Array element
    assert.equal(arr[1], 'b');
    // Setting an Array element
    arr[1] = 'β';
    // Adding an element to an Array:
    arr.push('d');
    assert.deepEqual(
    arr, ['a', 'β', 'c', 'd']);