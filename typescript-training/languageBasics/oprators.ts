// opratores: opratores are spacial characters that are used to perform operations on variables and values. 

//there are mainly five types of opratores in typescript and javascript.
//1. arithmetic opratores
//2. assignment opratores
//3. comparison opratores
//4. logical opratores
//5. ternary opratores

//1. arithmetic opratores: arithmetic opratores are used to perform mathematical operations on numbers.
//1. addition
//2. subtraction
//3. multiplication
//4. division
//5. modulus
//6. ++ increment (x++ ==> Post increment, ++x ==> Pre increment)
//7. -- decrement (x-- ==> Post decrement, --x ==> Pre decrement)

let a: number =10;
let b: number = 20;
console.log("Addition: ",(a + b)); // addition
console.log("Subtraction: ",(a - b)); // subtraction
console.log("Multiplication: ",(a * b)); // multiplication
console.log("Division: ",(a / b)); // division
console.log("Modulus: ",(a % b));    // modulus
console.log("post Increment: ",(a++)); // post increment
console.log("After the next line post increment: ", (a));
console.log("pre Increment: ",(++a)); // pre increment
console.log("post Decrement: ",(b--)); // post decrement
console.log("After the next line post decrement: ",(b));
console.log("pre Decrement: ",(--b)); // pre decrement

//2. assignment opratores: assignment opratores are used to assign values to variables.
//1. = assignment
//2. += addition assignment
//3. -= subtraction assignment
//4. *= multiplication assignment
//5. /= division assignment
//6. %= modulus assignment
let c: number = 10;
c =+ 20; // assignment  c= c+20
console.log("Addition Assignment: ",c);
c -= 20;  // c= c-20
console.log("Subtraction Assignment: ",c);
c *= 20;  // c= c*20
console.log("Multiplication Assignment: ",c);
c /= 20;  // c= c/20
console.log("Division Assignment: ",c);
c %= 20;  //c= c%20
console.log("Modulus Assignment: ",c);

//3. comparison opratores: comparison opratores are used to compare two values and return a boolean value.
//1. == equal to  (loose equality)(omly compare values) (10 == "10" ==> true)
//2. === equal value and equal datatype (strict equality)  (10 === "10" ==> false)
//3. != not equal to 
//4. !== not equal value or not equal type 
//5. > greater than
//6. < less than
//7. >= greater than or equal to
//8. <= less than or equal to   

let d: number =10;
let e: any = "10";
console.log("Equal to(loose equality): ",(d == e)); // equal to
console.log("Equal value and equal datatype(strict equality): ",(d === e)); // equal value and equal datatype
console.log("Not equal to: ",(d != e)); // not equal to
console.log("Not equal value or not equal type: ",(d !== e));
console.log("Greater than: ",(d > e)); // greater than
console.log("Less than: ",(d < e)); // less than
console.log("Greater than or equal to: ",(d >= e));
console.log("Less than or equal to: ",(d <= e)); // less than or equal to

//4. logical opratores: logical opratores are used to combine multiple boolean values and return a boolean value.
//1. && logical AND
//2. || logical OR
//3. ! logical NOT

let i:number = 10;
let j:number = 20;
console.log("Logical AND: ",(i < 5 && j > 15)); //false && true = false
console.log("Logical OR: ",(i < 15 || j > 15)); //true || true = true
console.log("Logical NOT: ",!(i < j));//false = true

//5. ternary opratores: ternary opratores are used to evaluate a condition and return a value based on the condition.
let age: number = 17;
let canVote: string = (age >= 18) ? "Yes you can vote" : "No you cannot vote";
console.log("Is eligible to vote: ",canVote); // Yes   
