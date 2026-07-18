// functions in typescript

// there  mainly 3 types of functions in java script and typescript, they are as followes

//1. named functions
//2. arrow functions/ lamda functions
//3. Anonymous function


// 1. named functions : named functions nothing but the function are declared explicitly with some name

// synatx
// function functionName(parameters):ReturnTypetype {
//     function body
// }

function geetThePerson(name:string): string
{
   return " hello " + name + " Good morning ";
}

function personGreeting (name : string): void
{
    console.log(" hello " + name + " good morning ")
}
geetThePerson("manjula");
personGreeting("manjula");


//2. Arrow function or Lambda function: Arrow functions are consics syntax for writing function expresstion, they are often used for short

// syntax
// let functionName  = (parameters): returnType => {
//                       function body
//                      }

// calculate the sum of two numbers and return the output in the form of a number 
// by using normal funtion 
function sum (a:number , b:number): number 
{
    let c: number = a+b;
    return c;

}
console.log(sum (2,3));

// by using arrow function 
let sumOfNumber = (a:number, b:number): number => a+b

// calculate the squer of two number and return the output in the form og number 
// by using normal function 
function squer(a: number,): number {
    let c: number = a*a;
    return c;

}
console.log(squer(4));

// by using the arrow function 
let squerOfNumber =  (a:number):number => a*a

//3. Anonymous function
// Anonymous function are function that are defined without a name. they are often used an argument of other funtion argument 


// synatx1
// let functionName  = (parameters): returnType => {
//                       function body
//}

// synatx2: function as parmeter of another function 
// function other function (parameterfunction : functiontype): retuntype {
// function  body
//}
 
function run (greet: (name:string) => void) : void {
greet (" manjua");
}

// calling the fuction 
 run (
    function(name: string ): void
    {
        console.log(" Hello " + name + " good morning ");
    }
 )

  function printName(name: string): void {
    console.log(" Hello " + name + " good morning ");
  }

  // calling the function
  printName("manjula")