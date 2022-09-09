// node modules
const inquirer = require("inquirer");
const fs = require("fs")

// lib modules
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// array for members answers
const teamMemnber = []

const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: imput,
                message: "What is your name?",
                name: name,
            },

            {
                type: imput,
                message: "What is your id number?",
                name: id,
            },

            {
                type: imput,
                message: "What is your email?",
                name: email,
            },

            {
                type: list,
                message: "What is your role?",
                name: role,
                choices: ['Engineer', 'Intern', 'Manager'],
                validate: (value) => { if (value) { return true } else { return 'Please enter a valid response.' } },
            },
        ])

        // if manager is selected
        if(answers.role === "Manager") {
            const managerAns = await inquirer
                .prompt([
                    {
                        type: input,
                        message: "What is your office number?",
                        name: officeNumber,
                    }
                ])
        
            const newManager = new Manager (
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
            )
            teamMemnber.puwh(newManager);

            // else if for intern & engineer
        }
};


