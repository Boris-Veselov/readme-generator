// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
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
        type: "list",
        name: "license",
        message: "What licenses are you using?",
        choices: ['None', 'MIT', 'MPL', 'GPL']
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }
]
    
// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generateREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};
   


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
        var fileContent = generateMarkdown(data);
        writeFile(fileContent);
    })
}

// Function call to initialize app
init();
