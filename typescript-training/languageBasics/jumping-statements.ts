// jumping statements
//1. brake
//2. continue
//3. return
//4. throw

//1. brake : it is used to terminate the loop when it mets condition

// normal for loop to print 1 to 5 number
for(let i:number =1; i<=5;i++)
{
    console.log(i)
}

// for loop with brake statements to terminate the loop when i is equal to 3
console.log(" using the break statement")
for(let i:number =1; i<=5;i++)
{
    if (i == 3)
        {
         break;  // terminta the loop when i is equal to 3
        }
     console.log(i)  // 1 2
}
 
//continu statement: it is goning to skip the current itration of the loop when condition met.
// for loop with continu statement to skip the itration when i is equal to 3
console.log(" using the continue statement")
for(let i: number = 1; i<=5;i++)
    {
        if (i == 3)
        {
            continue;
        }
        console.log(i); // 1 2 4 5

    } 

    // 3. return statement: it is used to exit from the functiona and optional return a value.
    console.log(" using the return statement")
    function addNumbers( a : number,  b : number): number 
    {
        return a + b;
        //console.log("this will not be excutted")  // this line will not be excutrd ofter retun statement no lines will not run
    }
     let sumOfNumber : number= addNumbers(5 ,10)
     console.log("sumof two number is:", sumOfNumber)

     // 4. throw statement: it is used to throw exception when error occure
       console.log(" using the throw statement")
     function withdrwaAmount(amount: number)
     {
        if (amount<=0)
        {
            throw new Error("invalid amount: amount should be grater than 0")
        }
        console.log("WITHDRAW Amount: ", amount)
     }

     withdrwaAmount(150)
     withdrwaAmount(-15)
     