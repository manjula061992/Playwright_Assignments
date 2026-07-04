/* datatypes are two diffrent categories
1. primitives datatypes
2. non-primitives datatypes */


/********************************************************************** */
/**********Primitive Datatypes **********/

// 1. number : number reprsents number with decimal and without decimal  (without quoutes)
let marks: number= 90;
let percentage: number= 90.5;
console.log("marks: ", marks);
console.log("percentage: ", percentage);

//2. String : string represents text data (with quoutes)
let name1: string= "John";
let name2: string= 'Manjula';
let name3: string= `tanush`;
let city: string= "New York";
console.log("name1: ", name1);
console.log("name2: ", name2);
console.log("name3: ", name3);       
console.log("city: ", city);

//3. boolean : boolean represents true or false value (without quoutes)
let ismarried: boolean= true;
let isjoined: boolean= false;
console.log("ismarried: ", ismarried);
console.log("isjoined: ", isjoined);


//union type : union type represents a variable which can hold multiple datatypes (without quoutes)
let employeeAddress: number | string | boolean;
 employeeAddress= "New York";
 employeeAddress= 12345;
 employeeAddress= true;
console.log("employeeAddress: ", employeeAddress);




//4. undefined : undefined represents a variable which is not assigned with any value (without quoutes)
let empSalary: undefined | number;
empSalary= 25000;
console.log("empSalary: ", empSalary);

//5. null : null represents a variable which is assigned with null value (without quoutes)
let empAge: null | number;
empAge= null;
console.log("empAge: ", empAge);

/************************************************************************************************************ */
/****************************Non-Primitive Datatypes *******************************/

// 1. Array: array represents a collection of similar datatypes 
let fruits1: string[] = ["Apple", "Mango", "Banana","Orange"];
console.log("fruits1: ", fruits1);

let fruits2: Array<string> = ["Apple", "Mango", "Banana","Orange"];
console.log("fruits2: ", fruits2);  

let numbers1: number[] = [10, 20, 30, 40, 50];
console.log("numbers1: ", numbers1);

// Fruits along with their prices
let fruitsWithPrices: (string |number)[] = ["Apple", 100, "Mango", 200, "Banana", 50, "Orange", 150];
console.log("fruitsWithPrices: ", fruitsWithPrices);

//2. object: object represents a collection of key-value pairs
interface empDetails {
    empId: number,
    name: string,
    havingVisa: boolean,
    address: {
        city: string,
        zipCode: number,
        state: string,
        country: string
    }
}

let emeInfo: empDetails = {
    empId : 101,
    name: "jhon",
    havingVisa : true,
    address: {
        city : "New yark",
        zipCode : 12345,
        state : "NY",
        country : "USA"
    }
    
};
console.log("emeInfo: ", emeInfo);
console.log("enployee name: ", emeInfo.name);
console.log("enployee city: ", emeInfo.address.city);

//3. tuple: tuple represents a collection of different datatypes
let employee: [number, string, boolean] = [101, "John", true];
console.log("employee: ", employee);
console.log("employee id: ", employee[0]);
console.log("employee name: ", employee[1]);
console.log("employee having visa: ", employee[2]);

//4. function: function represents a block of code which can be executed when called
// void function : void function represents a function which does not return any value
// if fuction returns any value then same datatype should be mentioned in the function declaration
function loginIntoApplication1(browserName: string, URL: string): void
 {
    console.log("Lunch the browser: ", browserName);
    console.log("Enter the URL: ", URL);
    console.log("Application is launched successfully");
 }
 function sumOfTwoNumbers1(num1: number, num2: number): number
 {
    let sum: number= num1 + num2;
    return sum;
 }

 function getFullName1(firstName: string, lastName: string): string
 {
    let fullName: string= firstName +" " + lastName;
    return fullName;
 }
 loginIntoApplication1("Chrome", "https://www.google.com");
 console.log("Sum of two numbers: ", sumOfTwoNumbers1(10, 20));
 console.log("Full name: ", getFullName1("John", "Doe"));   

 //5. map: map represents a collection of key-value pairs where keys are unique and values can be of any datatype
 let employeeMap1: Map<number, string> = new Map();
 employeeMap1.set(101, "John");
 employeeMap1.set(102, "Doe");
 employeeMap1.set(103, "Smith");
 console.log("employeeMap1: ", employeeMap1);
 console.log("employeeMap1 size: ", employeeMap1.size);
 console.log("employeeMap1 keys: ", employeeMap1.keys());
 console.log("employeeMap1 values: ", employeeMap1.values());
 console.log("employeeMap entries: ", employeeMap1.entries());

 let employeeMap2 : Map<string, unknown> = new Map();
// add key-value pairs to the map
employeeMap2.set("empId", 101);
employeeMap2.set("name", "John");
employeeMap2.set("isMarried", false);
employeeMap2.set("address", { city: "New York", zipCode: 12345, state: "NY", country: "USA" });
console.log("Employee Map:", employeeMap2);
console.log("Employee name from map:", employeeMap2.get("name")); // Output: John

//6. Any: any represents a variable which can hold any datatype (without quoutes)
let employeeInfo: any;
employeeInfo= 101;

