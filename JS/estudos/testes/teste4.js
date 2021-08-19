let assert = require('assert');
const obj = {
    first: 'kaique',
    last: 'costa'
};
console.log(obj);
assert.strictEqual(obj.first, 'kaique');
console.log('************');

const obj2 = {a: 1, b: 2};
let obj3 = ({...obj2, c: 3});

//spreads can be used to copy an object:
let obj4 = {...obj3}
if(obj3 === obj4) {
    console.log("equals!!!")
}