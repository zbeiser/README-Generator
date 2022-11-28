// Packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input.
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
    message: 'Enter the installation instructions for your project.',
    type: 'input'
  },
  {
    name: 'usage',
    message: 'Enter the usage information for your project.',
    type: 'input'
  },
  {
    name: 'contributing',
    message: 'Enter any contribution guidelines for your project.',
    type: 'input'
  },
  {
    name: 'tests',
    message: 'Enter any test instructions for your project.',
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

// Function writes the README file. Gives you a success or error message.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('README file successfully created!'));
}

// Function initializes the application. Uses the questions array in an inquirer prompt, then passes the answers to the generateMarkdown function.
// Then writeToFile uses generateMarkdown's data to write the README.md file.
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
