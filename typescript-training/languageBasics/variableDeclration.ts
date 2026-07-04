// declaration  will  differ from based on 4 parameters
/*
1. initialization
2. Re-Assignment
3. Re-Declaration
4. Scope
*/
// declaration variable = data , example: var a = 10; // declaration and initialization

// intialization : initialization is the process of assigning a value to a variable at the time of declaration
//  initialization with Var is possiable 
var a:number; // declaration
a = 10; //  initialization


// initialization with let is possiable
let num1: number ; // declaration
num1 = 10; //  initialization
console.log("num1: ", num1);

// initialization with const is not possiable
//const num2: number ; // declaration
//num2= 10; //  initialization
const num3: number = 10; // declaration and initialization
console.log("num3: ", num3);

//2. Re-Assignment : re-assignment is the process of assigning a new value to a variable which is already assigned with a value
// re-assignment with var is possiable
let x:number =10;
x = 20; // re-assignment
console.log("x: ", x);

// re-assignment with let is possiable
var y:number = 10;
y= 20; // re-assignment
console.log("y:",y);

// re-assignment with const is not possiable
const z:number = 10;
//z= 20; // re-assignment

//3. Re-declaration : re-declaration is the process of declaring a variable with the same name in the same scope
// re-declaration with var is possiable
var a1:number = 10;
var a1:number = 20;

// re-declaration with let is not possiable
let b1:number = 10;
//let b1:number = 20; // re-declaration

// re-declaration with const is not possiable
const c1:number = 10;
//const c1:number = 20; // re-declaration   

//4. Scope : scope is the region of the program where a variable is accessible
// scope with var is function scope
function varScope() {   
    var a: number = 10; // declaration and initialization
    let b: number = 20; // declaration and initialization
    const c: number = 30; // declaration and initialization
    console.log("Inside block: a =", a); // Output: 10
    console.log("Inside block: b =", b);
    console.log("Inside block: c =", c);
}
console.log("Outside block: a =", a); // Output: 10
//console.log("Outside block: b =", b); // Error: b is not defined
//console.log("Outside block: c =", c); // Error: c is not defined