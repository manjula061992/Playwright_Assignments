// funtion implementation

//1. function without parameters and with return types
//Creating a function that is not going to take any input, at the same time it is not going to give you any output data as well.
function greet(): void
{
    console.log("hello world");
}
// calling the function
greet();   // out put Hello world

//2. Function with parameters and without return type
//Creating a function that is going to take some input parameters, but it is not going to give you any output data.
function greetUser(name:string): void{
    console.log(" hello " + name + " welcome to the typescript world " );
}
// calling the function 
greetUser("Tanush");   // output is hello tanush welcome to typescript world

//3. //3. Function with parameters and with return type
//Creating a function that is going to take some input parameters and it is also going to give you some output data.
function addNumbers(a:number,b:number): number
{
    let c: number = a + b;
    return c;
}
// calling the function
console.log("addtion of two numbers:",addNumbers(5,5) );  // output is 10

//4. Function without parameters and with return type
//Creating a function that is not going to take any input, but it is going to give you some output data.
function getCurrentYear():number{
    let currentDate = new Date();
    return currentDate.getFullYear();
}

//calling the function
let year = getCurrentYear();
console.log("Current Year: " + year); // Output: Current Year: 2024 (or the current year)

//5. Function with optional parameters. 
//Creating a function that can take some input parameters and some parameters are optional to enter. 
// ? represents that the parameter is optional.
function printEmployeeDetails(name: string, age? : number): void
{
    if (age !== undefined)
    {
        console.log("Employee Name:" + name + ", age:" + age );
    }else{
        console.log("Employee name:" + name + ", age: not provieded" );
    }
}
// calling the function 
printEmployeeDetails("manjula", 32);
printEmployeeDetails("madhu");

//6. Function with default parameters.
//Creating a function that can take some input parameters and some parameters have default values if not provided.
function printEmployeeInfo(name: string , visaStatus: boolean = false):void{
    console.log("Employee Name:" + name + ", visa Status:" + visaStatus  );
}
// calling the function 
printEmployeeInfo("tanush",true);
printEmployeeInfo("manjula");


//7. Function with rest parameters.
//Creating a function that can take multiple input parameters as an array.
function sumOfNumbers(...numbers : number[]): void {
   let  sum: number = 0;
   for(let num of numbers)
{
    sum = sum + num;
}
console.log("sum of number is :", sum)
}
// calling the function
sumOfNumbers(1,2,3,4,5);
sumOfNumbers(3,4);
    sumOfNumbers(5,7,3)
