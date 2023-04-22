// Below will be examples using if/else statements in order to pair and compare.
// We are looking to compare 2 sets of 2 values. 
// We will print true if at least one of the pairs is truthy.

// Below all 4 variables compare to one another. Therefore the result is true.

let param1A = "cat";
let param1B = "cat";
let param2A = 6;
let param2B = 6;
if (param1A === param1B && param2A === param2B) {
    console.log("true");
} else {
    console.log("false");
}

// The variables param1A and param1B are true. However param2A and param2B are false.
// Based on the instructions above the result is true.

let param1A = "five";
let param1B = 5;
let param2A = "dog";
let param2B = "dawg";
if (param1A === param1B && param2A === param2B){
    console.log("true");
} else {
    console.log("false");
}

// The following code below shows param1A and pararam1B to be false.
// The outcome result will remain true because of param2A pairing with param2B.
// The reason for becoming a true statement is due to the OR logical operator.

let param1A = 0;
let param1B = false;
let param2A = "horse";
let param2B = "horse";
if (param1A === param1B || param2A === param2B){
    console.log("true");
} else {
    console.log("false");
}

// The following code below will print true due to all 4 variables pairing with one another.

let param1A = "eight";
let param1B = "eight";
let param2A = "ate";
let param2B = "ate";
if (param1A === param1B && param2A === param2B){
    console.log("true");
}

// The following will be a false statement due to the 4 variables not pairing.

let param1A = 11;
let param1B = "eleven";
let param2A = "four";
let param2B = "for";
if ( param1A === param1B || param2A === param2B) {
    console.log("true");
} else {
    console.log("false");
}

// All 4 variables pair up with another variable. The following output will be true.

let param1A = "cake";
let param1B = "cake";
let param2A = "pie";
let param2B = "pie";
if (param1A === param1B || param2A === param2B){
    console.log("true");
}