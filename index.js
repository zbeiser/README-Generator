// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'title',
    message: 'Enter the title of your project.',
    type: 'input'
  },
  {
    name: 'description',
    message: 'Enter a description for your project.',
    type: 'input'
  },
  {
    name: 'installation',
    message: 'If applicable, enter the installation instructions for your project.',
    type: 'input'
  },
  {
    name: 'usage',
    message: 'Enter the usage information for your project.',
    type: 'input'
  },
  {
    name: 'contributing',
    message: 'If applicable, enter any contribution guidelines for your project.',
    type: 'input'
  },
  {
    name: 'tests',
    message: 'If applicable, enter any test instructions for your project.',
    type: 'input'
  },
  {
    name: 'license',
    message: 'Choose a license for your project.',
    type: 'list',
    choices: ['GNU AGPL v3', 'GNU GPL v3', 'GNU LGPL v3', 'Mozilla Public License 2.0', 
    'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'No License']
  },
  {
    name: 'username',
    message: 'Enter your GitHub username.',
    type: 'input'
  },
  {
    name: 'email',
    message: 'Enter your email address.',
    type: 'input'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('README file successfully created!'));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
