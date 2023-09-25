let obj1 = {};

let obj2 = new Object();

console.log(obj1);
obj1.firstName = 'Sandeep';
obj1.lastName = 'Dikshit';
console.log(obj1);

let obj3 = {
    firstName: 'Sandeep',
    lastName: 'Dikshit',
    active: true,
}
console.log(obj3);

//Delete attributes
console.log(`First Name: ${obj3.firstName}`);
console.log(`lastName: ${obj3["lastName"]}`);
delete obj3.lastName;
console.log(obj3);

// Pass by reference
let obj4 = obj3;
console.log(obj4);
obj3.lastName = 'Dikshit';
console.log(obj4);
console.log(obj3);