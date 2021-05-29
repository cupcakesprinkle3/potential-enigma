// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your project description. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        //   {
        //     type: 'confirm',
        //     name: 'confirmAbout',
        //     message: 'Would you like to enter some information about yourself for an "About" section?',
        //     default: true
        //   },
        //   {
        //     type: 'input',
        //     name: 'about',
        //     message: 'Provide some information about yourself:',
        //     when: ({ confirmAbout }) => confirmAbout
        //   }
    ])
        .then(projectData => {
            console.log(projectData);
            writeToFile("README.md", projectData);
        });

};


// TODO: Create a function to write README file
writeToFile = (fileName, data) => {
    fs.writeFile(fileName, JSON.stringify(data), err => {
        if (err) {
            reject(err);
            return;
        }

    });
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

promptUser();