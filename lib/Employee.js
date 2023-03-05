// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }


getName () {
return this.name;
};

getId () {
   
return this.id;
};

getEmail () {
   
return this.email;
};

getRole() {

    return "Employee";
}
};

module.exports = Employee;

// function to initialize program and write the README file
// function init() {

//     inquirer.prompt(questions)

//         .then((response) => {
//             console.log(response);

           
//         });

// }

// // function call to initialize program
// init();