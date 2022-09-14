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
const teamMember = []

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
    if (answers.role === "Manager") {
        const officeAns = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your office number?",
                    name: "officeNumber",
                }
            ])

        // adding manager class
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            officeAns.officeNumber,
        )
        teamMember.push(newManager);

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
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            githubAns.github,
        );
        teamMember.push(newEngineer);

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
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            schoolAns.school,
        );
        teamMember.push(newIntern);
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
        ]).then(answers => {
            console.log(answers)

            answers.newMember === "Add another member?" ? promptQuestions() : createTeam()
        })

    // if(addMember.newMember === "Add another member") {
    //     console.log('alive')
    //     return promptQuestions();
    // }
    // console.log('check')
    // return createTeam()
};

promptQuestions();

// function to create team
function createTeam() {
    console.log("New Team", teamMember);
    fs.writeFile("./dist/index.html",
        generateHTML(teamMember),
        (err) =>
            err ? console.error(err) : console.log('Building HTML page...')
    );
};
function generateHTML(data) {
    console.log(data)
    let cardTemplate = ``
    data.forEach(element => {
        const role = element.getRole()
        let uniqueDataPoint = ''
        switch (role) {
            case "Manager":
                uniqueDataPoint = element.officeNumber;
                break;
            case "Engineer":
                uniqueDataPoint = element.github;
                break;
            case "Intern":
                uniqueDataPoint = element.school;
                break;
        }
        return cardTemplate += `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${element.getRole()}</h2>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">${element.name}</li>
                    <li class="list-group-item">${element.id}</li>
                    <li class="list-group-item">${element.email}</li>
                    <li class="list-group-item">${uniqueDataPoint}</li>
                </ul>
            </div>
        </div>
        `
    });
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
    
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    
                <!--Swap static card w employee info -->
                ${cardTemplate}
            </div>
        </div>
    
    </body>
    
    </html>`
}