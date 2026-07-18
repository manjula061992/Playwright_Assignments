// conditional statements: writing the condition along with statements
// so node.js going to run the statements, first it is going to check the condition. if the condition satisfys then it is going to run the statements otherwise it is going to skip the statements and move to the next line of code

// there are 2 types of conditional statements
// 1. if-else statement: when we don't know the result of the condition before excution 
// 2. switch statement: when we know the result of the condition before excution, now we want to choose the one option among multiple.

//1. if-else statement
let persentAge: number = 85;

if (persentAge <= 95) {
    console.log(" Grade A");
if (persentAge <= 90)  {
    console.log("you are distinction");
    console.log("you will get the gold medal")
}else {
    console.log("you just missed the distinction by" + (90-persentAge) + " marks");
} 
}else if (persentAge >= 65 && persentAge < 75)
     {
       console.log(" Grade B");
     } else if (persentAge >= 55 && persentAge < 65) 
        {
          console.log(" Grade C");
        }else
            {
              console.log("you are failed");
           }


//2. switch statement
let environment: string = "PROD"   ; 
switch(environment) {
  case "Dev":
       console.log("loging to the application with 'dev.netflix.com' ");
       break;
  case "QA":
       console.log("loging to the application with 'qa.netflix.com' ");
       break;
  case "PROD":
       console.log("loging to the application with 'netflix.com' ");
       break;
  default:
       console.log("please provide the valid environment");

}       

    
  
   