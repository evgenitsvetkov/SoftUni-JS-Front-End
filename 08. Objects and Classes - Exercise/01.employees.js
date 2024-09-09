function getListOfEmployees(input) {
    const employees = {};

   input.forEach((entry) => {
        let personalNum = entry.length;
        
        employees[entry] = personalNum;
   });

    for (const employee in employees) {
       console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
    }
}

getListOfEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);