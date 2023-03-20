const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { runInThisContext } = require("vm");

const team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const managerQuestions = [
    {
        type: 'input',
        message: 'What is your full name?',
        name: 'name',
        //validation to ensure input  by user
        validate: (value) => { if (value) { return true } else { return "Please input your name." } },
    },
    {
        type: 'input',
        message: 'What is your Employee ID?',
        name: 'id',
        validate: (value) => { if (value) { return true } else { return "Please input your Employee ID." } },
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return "Please input your email address." } },
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
        //validation to ensure input  by user
        validate: (value) => { if (value) { return true } else { return "Please input your office number." } },
    },
];

const newInternQuestions = [
    {
        type: 'input',
        message: 'What is your full name?',
        name: 'name',
        //validation to ensure input  by user
        validate: (value) => { if (value) { return true } else { return "Please input your name." } },
    },
    {
        type: 'input',
        message: 'What is your Employee ID?',
        name: 'id',
        validate: (value) => { if (value) { return true } else { return "Please input your Employee ID." } },
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return "Please input your email address." } },
    },
    {
        type: 'input',
        message: 'What is your school, college or University name (abbreviation only)?',
        name: 'school',
        //validation to ensure input  by user
        validate: (value) => { if (value) { return true } else { return "Please input your school name." } },
    },
];

const newEngineerQuestions = [
    {
        type: 'input',
        message: 'What is the Engineer full name?',
        name: 'name',
        //validation to ensure input  by user
        validate: (value) => { if (value) { return true } else { return "Please input your name." } },
    },
    {
        type: 'input',
        message: 'What is your Employee ID?',
        name: 'id',
        validate: (value) => { if (value) { return true } else { return "Please input your Employee ID." } },
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return "Please input your email address." } },
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        //validation to ensure input  by user
        validate: (value) => { if (value) { return true } else { return "Please input your github username." } },
    },

];

const addNewTeamMemberList = [
    {
        type: 'list',
        message: 'Add a team member?',
        name: 'memberChoice',
        //choices to ensure input by user
        choices: ['Add Engineer', 'Add Intern', 'Finish building the Team']
    }
];

function promptManager() {
    inquirer.prompt(managerQuestions)

        .then((responseManager) => {
            console.log(responseManager);
            const manager = new Manager(responseManager);
            team.push(manager);
            console.log(team);
            addTeamMember();
        });


};
// function call to ask Manager questions
promptManager();



//function to initialize inquirer to add a team member

function addTeamMember() {

    inquirer.prompt(addNewTeamMemberList)
        .then((choice) => {
            console.log(choice);

        });
    if (this.memberChoice === [0]) {
        addNewEngineer();
        return;
    } if (this.memberChoice === [1]) {
        addNewIntern();
        return;
    } else {
        render.team;
        return;

    };


};


function addNewIntern() {
    inquirer.prompt(newInternQuestions)

        .then((responseIntern) => {
            console.log(responseIntern);
            new Intern(responseIntern);
            addTeamMember();
        });
};

function addNewEngineer() {
    inquirer.prompt(newEngineerQuestions)

        .then((responseEngineer) => {
            console.log(responseEngineer);
            new Engineer(responseEngineer);
            AddTeamMember();
        });
};






