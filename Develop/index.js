// TODO: Include packages needed for this application
const args = process.argv;
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type : 'input',
        message: 'Describe your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How is your project used?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license for your project:',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'How can others contribute to your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What commands are required to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What questions do you anticipate?',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
    );
}

function generateReadme(answers) {
    return `# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![GitHub license](https://img.shields.io/badge/license-${answers.license.replace(/ /g, '%20')}-blue.svg)
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions about the repo, open an issue or contact me via [email](mailto:${answers.email}). Also, you can find more of my work at [${answers.github}](https://github.com/${answers.github}).
`;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent);
    });
}


// Function call to initialize app
init();
