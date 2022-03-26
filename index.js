// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title?",
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter the title!');
              return false;
            }
        }
    }, 
    {
        type: "input",
        name: "description",
        message: "Project description",
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter the description!');
              return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What needs to be installed to run it?",
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please provide steps for installation!');
              return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use",
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please provide examples!');
              return false;
            }
        }
    },
    {
        type: "input",
        name: "credits",
        messgae: "Who contributed to this project?",
        validate: creditsInput => {
            if (creditsInput) {
              return true;
            } else {
              console.log('Please enter contributers!');
              return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "What licenses are you using?",
        choices: ['None', 'MIT', 'Apache', 'IBM'],
        validate: licenseInput => {
            if (licenseInput) {
              return true;
            } else {
              console.log('Please select one of the options!');
              return false;
            }
        }
    },
    {   type: "input",
        name: "test",
        message: "How to test it?",
        validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('Please provide an expanation of how to test it!');
              return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?",
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            } else {
              console.log('Please provide your github username!');
              return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please provide your email!');
              return false;
            }
        }
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
