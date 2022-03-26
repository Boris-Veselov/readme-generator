// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title?"
    }, 
    {
        type: "input",
        name: "description",
        message: "Project description"
    },
    {
        type: "input",
        name: "installation",
        message: "What needs to be installed to run it?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use"
    },
    {
        type: "input",
        name: "credits",
        messgae: "Who contributed to this project?"
    },
    {
        type: "list",
        name: "license",
        message: "What licenses are you using?",
        choices: ['None', 'MIT', 'Apache', 'IBM']
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
    
// function to write README file
const writeToFile = fileContent => {
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
   


// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
        var fileContent = generateMarkdown(data);
        writeToFile(fileContent);
    })
}

// function call to initialize app
init();
