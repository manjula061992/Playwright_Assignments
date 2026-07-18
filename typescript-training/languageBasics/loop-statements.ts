//Loop Statemants : Loop Statements or Repeat the execution of statements based on the condition given.

// 1. for loop: when we know the total number of iterations to be executed before itself, we use for loop.
//2. while loop: when we don't know the total number of iterations to be  execution before itself, we use while loop.


//1. for loop
// syntax of for loop
//for(initialization(condition to start); condition to end ; increment/decrement) {
    // statements to be executed
//}

// example of for loop: print name manjula 10 times using for loop
let empName: string = "manjula";
for(let i:number=1; i<=10; i++) {
    console.log(empName);
}

//2. while loop
// syntax of while loop
//while(condition to start) {
    // statements to be executed
//}     

// example of while loop: refresh the page until the application lunched successfully 
let counter: number = 1;
while(counter > 0) {
    let isPageLoaded: boolean = false;
    if(isPageLoaded || counter==10) {
    break; // terminate the loop when page is loaded or counter reaches 10
    }
    console.log("refresh the page ");
    counter++;
}

//3. do-while loop
// synatx of do while loop
let i: number = 0;
while(i>0)   // it will run the code 0 times
{
    console.log("Manjula")
}

do{
     console.log("Manjula")
}
while(i>0)// it will run the code atleast 1 time

// 4. for .. of loop: itrate over each and every value of the predefined list(array, set, map)
let friutes: string[] = ["Apple","Banan","Mango","Chikku","Grapes"]

// traditional for loop
for(let i:number =0; i < friutes.length;i++)
{
    console.log(friutes[i])
}


// for of loop
// syntax of for of loop
// for(variable of pre-defined-list)
//{
    // statment;
//}

for(let friute of friutes)
{
    console.log(friute);
}

// 5. for in loop: itrate over each and every key of pre defined object

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

let empInfo: empDetails = {
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
console.log(empInfo.empId)
console.log(empInfo["empId"]);

// synatx of for in loop
//for(key in pre-defined-object)
// {
      //statment;
//}

for(let key in empInfo)
{
    console.log(key)
}