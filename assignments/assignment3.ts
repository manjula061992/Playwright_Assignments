function loanEvaluation (
 customerName: string,
 creditScore: number,
 isEmployed: boolean,
 debtToIncomeRatio: number,
 income: number
) : void {
    console.log("Evaluating loan for customer: " + customerName);

    // step1 : check the credit score of the customer
    if (creditScore > 750)
    {  
         //If the credit score is above 750, the loan is automatically approved.
        console.log("customer loan is approved");
    }else if (creditScore >= 650)
    {
        // If the credit score is between 650 and 750, additional checks are performed.
        // step 2: check the income of the customer
     if (income>= 50000)
     {
        // If the income is above $50,000, the loan is approved.
        // step 3: check if the customer is employed
        if (isEmployed){
            // Check the employes dept to income ratio
            if (debtToIncomeRatio < 40)
            {
                // If the DTI IS LESS THAN 40% THEN LOAN IS APPROVED
                console.log("customer loan is approved all conditions are met");
            }else
            {
                // IF THE DTI is grater than the 40% LOAN IS DENIED
                console.log("customer loan is denied due to high debt to income ratio");
            }
        }else {
                // LOAN DENIED BECUSE CUSTOMER IS NOT EMPLOYED
                console.log("loan is denied : customer is not employed")
            }
     }else{
        // LOAN IS DENIED BECUSE CUSTOMER INCOME IS LESS THAN 50000
        console.log("loan denied : customer income is less than $50000")
     }
    }
     else
    {
        // LOAN DENIED BECUSE CUSTOMER CREDIT SCORE IS LESS THAN 750
        console.log("customer loan is denied: customer score is less than 750");
    }

}

loanEvaluation
(
  "manula",  // customer Name
  750,       // credit score
  true,      // isemployed
  50000,     // income
  45         // DTI

)
 export {}