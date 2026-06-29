// declaration  will  differ from based on 4 parameters
/*
1. initialization
2. Re-Assignment
3. Re-Declaration
4. Scope
*/
// declaration variable = data , example: var a = 10; // declaration and initialization

//==================== initialization  ====================

//  initialization with Var is possiable 
var a; // declaration
a = 10; // initialization

// initialization with let is possiable
let c; // declaration   
c= 30; // initialization

//initialization with const is not possiable
//const b  //declaration 
// b = 20; // initialization
const b = 20; // declaration and initialization

//==================== Re-Assignment  ====================

//Re-Assignment with var is possiable
var a = 10; // declaration and initialization
a = 20; // Re-Assignment

//Re-Assignment with let is possiable
let c = 30; // declaration and initialization
c = 40; // Re-Assignment

//Re-Assignment with const is not possiable
//const b = 20; // declaration and initialization
//b = 30; // Re-Assignment
const b= 20; // declaration and initialization

//==================== Re-Declaration  ====================

//Re-Declaration with var is possiable
var a = 10; // declaration and initialization
var a = 20; // Re-Declaration

//Re-Declaration with let is not possiable
let c = 30; // declaration and initialization
//let c = 40; // Re-Declaration

//Re-Declaration with const is not possiable
const b = 20; // declaration and initialization
//const b = 30; // Re-Declaration

//==================== Scope  ====================

//Scope with var is function scoped
{
    var a = 10; // declaration and initialization
    let b =20; // declaration and initialization
    const c = 30; // declaration and initialization
    console.log("Inside block: a =", a); // Output: 10
    console.log("Inside block: b =", b);
    console.log("Inside block: c =", c);
}
console.log("Outside block: a =", a); // Output: 10
//console.log("Outside block: b =", b); // Error: b is not defined
//console.log("Outside block: c =", c); // Error: c is not defined