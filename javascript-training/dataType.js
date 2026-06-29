/* datatypes are two diffrent categories
1. primitives datatypes
2. non-primitives datatypes */


/********************************************************************** */
/**********Primitive Datatypes **********/

// 1. number : number reprsents number with decimal and without decimal  (without quoutes)
let num =123;   // number without decimal
let floatNum = 123.12;  // number with decimal
console.log(typeof num); // Output: number
console.log(typeof floatNum); // Output: number

//2. String : string is sequence of characters wrapped inside the single and double quoutes.
let str1 = "Hello, World!"; // double quoutes
let str2 = 'javascript is fun!'; // single quoutes
console.log(typeof str1); // Output: string
console.log(typeof str2); // Output: string

//3. boolean: boolean reprsent result of condition : true or false.
let isjavaScriptFun = true; // boolean value true
let isskyBlue = false; // boolean value false
console.log(typeof isjavaScriptFun); // Output: boolean


//4. undefined: undefined represents a variable that has been declared but has not been assigned a value.
let undefinedVar; // variable declared but not assigned a value
console.log(typeof undefinedVar); // Output: undefined  

//5. Null: null represents the intentional absence of any object value.
let nullVar = null; 

//symbol: symbol reprsent unique identifier

/************************************************************************************************************ */
/****************************Non-Primitive Datatypes *******************************/

//1. object: object reprsent the collection of Key value pairs
let empDetails = {
    enpId : 101,
    name: "jhon",
    havingVisa : true,
    address: {
        city : "New yark",
        zipCode : 12345,
        state : "NY",
        country : "USA"
    }
};

// print Employee name 
console.log(empDetails.name); // Output: jhon

// PRINT zipcode from address
console.log(empDetails.address.zipCode); // Output: 12345

// print employee details
console.log(typeof empDetails); // Output: object  

//2. Array: array is a collection of elements which can be of any data type.
let fruits = ["apple", "banana", "orange", "grapes"];
let fruitsAndPrices = ["apple", 105, "banana", 50, "orange", 175, "grapes", 200];
let fruitsAndPricesAndAvailability = ["apple", 105, true, "banana", 50, false, "orange", 175, true, "grapes", 200, false];

// print banana from fruits array
console.log(fruits[1]) // Output: banana

// print price of orange from fruitsAndPrices array
console.log(fruitsAndPrices[5]) // Output: 175

// print availability of grapes from fruitsAndPricesAndAvailability array
console.log(fruitsAndPricesAndAvailability[11]) // Output: false




