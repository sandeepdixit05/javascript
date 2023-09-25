// Creating dates

let date1 = new Date();
console.log(date1);

let date2 = new Date("01-02-2023");
console.log(date2);

let date3 = new Date("2023-02-01");
console.log(date3);

let date4 = new Date("1 January 2023");
console.log(date4);

let date5 = new Date("January 1, 2023");
console.log(date5);

let date6 = new Date(0);
console.log(date6.toISOString());