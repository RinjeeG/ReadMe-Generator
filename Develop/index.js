// TODO: Include packages needed for this application
const args = process.argv;
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [ 
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project',
            name: 'title',
        },
        {
            type : 'input',
            message: 'Describe your project',
            name: 'description',
        },
        {
            type: 'list',
            message: 'add table of contents',
            name: 'contents',
        },
        {
            type: 'list',
            message: 'add table of contents',
            name: 'installations',
        },
        {
            type: 'list',
            message: 'add table of contents',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'add table of contents',
            name: 'license',
        },
        {
            type: 'list',
            message: 'add table of contents',
            name: 'contributions',
        },
        {
            type: 'list',
            message: 'add table of contents',
            name: 'tests',
        },
        {
            type: 'list',
            message: 'add table of contents',
            name: 'questions',
        },
    ])
    .then((response) =>
    writeToFile())
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
