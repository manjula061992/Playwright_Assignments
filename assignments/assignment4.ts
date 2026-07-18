let transaction : number[] = [50000. -2000, 3000, -15000, -200, -300, 4000, -3000]

let totalCredits : number = 0;
let totalDebits : number =0;
let totalCreditAmount : number =0;
let totalDebitAmount : number = 0;
let suspiciousCount : number = 0;

for (let i=0; i< transaction.length;i++ )
{
    let amount : number = transaction[i]
    if(amount > 0)
    {
        totalCredits++ ;
        totalCreditAmount+= amount;
        if(amount> 10000)
        {
            console.log("scspicious credit transaction with amount"+totalCredits)
            suspiciousCount++;
        }

    }else 
    {
        totalDebits++;
        totalDebitAmount -= amount;
        if(amount< -10000)
            {
            console.log("scspicious debit transaction with amount"+totalDebits)
            suspiciousCount++;
        }

    }
    let finalAmount = totalCreditAmount - totalDebitAmount;
    console.log("Total amount left in account is:" + finalAmount) 
    console.log("Total number of credit transactions:", totalCredits);
    console.log("Total number of debit transactions:", totalDebits);
    console.log("Total amount credited:",totalCreditAmount );
    console.log("Total amount debited:", totalDebitAmount);
    console.log("Total number of suspicious transactions:",suspiciousCount );
}