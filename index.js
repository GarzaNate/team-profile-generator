// node modules
const inquirer = require("inquirer");
const fs = require("fs");
// import inquirer from "inquirer";
// import fs from "fs";

// lib modules
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// array for members answers
const teamMemberData = []

// asysnc function for questions based on role
const questions = async () => {
    // basic questions to determine role
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },

            {
                type: "input",
                message: "What is your id number?",
                name: "id",
            },

            {
                type: "input",
                message: "What is your email?",
                name: "email",
            },

            {
                type: "list",
                message: "What is your role?",
                name: "role",
                choices: ["Engineer", "Intern", "Manager"],
                validate: (value) => { if (value) { return true } else { return "Please select a role." } },
            },
        ])

        // questions if manager is selected
        if(answers.role === "Manager") {
            const officeAns = await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your office number?",
                        name: "officeNumber",
                    }
                ])
        
            // adding manager class
            const newManager = new Manager (
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
            )
            teamMemnber.push(newManager);

        // else if for engineer questions
        } else if (answers.role === "Engineer") {
            const githubAns = await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your github username?",
                        name: "github",
                    }
                ])

            // adding engineer class
            const newEngineer = new Engineer (
                answers.name,
                answers.id,
                answers.email,
                answers.github,
            );
            teamMemnber.push(newEngineer);
       
        // else if for intern questions
        } else if (answers.role === "Intern") {
            const schoolAns = await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What school did you attend?",
                        name: "school"
                    }
                ])
            
            // adding intern class
            const newIntern = new Intern (
                answers.name,
                answers.id,
                answers.email,
                answers.school,
            );
            teamMemnber.push(newIntern);
        }
};

// function to add member / create team
async function promptQuestions() {
    await questions();

    const addMember = await inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do next?",
                name: "newMember",
                choices: ["Add another member?", "Create Team"],
            }
        ]);

        if(addMember.newMember === "Add another member") {
            return promptQuestions();
        }
        return createTeam()
};

promptQuestions();

// function to create team
function createTeam() {
    console.log("New Team", teamMemberData);
    fs.writeFile("./dist/index.html",
    generateHTML(teamMemberData),
    "utf-8"
    );
};
function generateHTML(data){
    return `
    `
}