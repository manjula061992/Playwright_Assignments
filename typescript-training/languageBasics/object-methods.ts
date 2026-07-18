//0bject methods in playwright

// creating the new object
interface  empDetails {
    empId: number,
    empName: string,
    havingVisa ? : boolean,
    address: {
        city: string,
        zipcode: number,
        state : string,
        country : string
    }
    currentRole ? : string;
}
 let empInfo : empDetails = {
    empId: 101,
    empName: "manjula",
    havingVisa  : true,
    address : {
        city : "hyderabad",
        zipcode : 1234,
        state : "telegana",
        country: "india"
    }
 } ;

 // 2. Accessing the object properties
 console.log (empInfo.empId);    //Accessing using dot notation
 console.log(empInfo["empId"]);   //Accessing using bracket notation

//3. Adding new property to the object
empInfo.currentRole = "Developer";
console.log(empInfo);

//4. Modifying existing property of the object
empInfo.currentRole = "software tester";
console.log(empInfo);

//5. Deleting property from the object
delete empInfo.havingVisa;
console.log(empInfo)

//6. Check whether particular properties are available or not.
console.log("havingVisa" in empInfo);
console.log("empName" in empInfo);


//7. Get all the keys from the object.
console.log(Object.keys(empInfo));

//8. Get all the values from the object.
console.log(Object.values(empInfo));

//9. Get all the entries from the object.
console.log(Object.entries(empInfo));

//10. Iterate through the object properties using for...in loop.
for(let key in empInfo){
    console.log(key+" : "+empInfo[key as keyof empDetails]);
}

//11. Verify the data type of a particular property. 
console.log(typeof empInfo.empId);
console.log(typeof empInfo.empName);
console.log(typeof empInfo.havingVisa);
console.log(typeof empInfo.currentRole);
console.log(typeof empInfo.address);

interface projectDetails {
    projectID: number,
    projectName : string ,
    projectLocation : string
}

let projectInfo : projectDetails = {
    projectID:123,
    projectName : "Alpha",
    projectLocation : "Hyderbad"
}

let mergedempIngo = {...empInfo, ...projectInfo};
console.log(mergedempIngo)


//export {}
