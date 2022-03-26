// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title?"
    }, 
    {
        type: "input",
        name: "Description",
        message: "Project description"
    },
    {
        type: "input",
        name: "Contents",
        message: "Table of contents"
    },
    {
        type: "input",
        name: "Installation",
        message: "What needs to be installed to run it?"
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions and examples for use"
    },
    {
        type: "input",
        name: "Credits",
        messgae: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "license",
        message: "What licenses are you using?"
    }
]
    



// TODO: Create a function to write README file
const readme = `#new-readme`
   fs.writeFile('./dist/myreadme.md', readme, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Success!');
    });


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
