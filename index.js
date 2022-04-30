//required node modules
const inquirer = require("inquirer");
const fs = require("fs");

//employee modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//HTML generated
const generateHTML = require("./src/generateHTML");

// Uses inquirer to generate questions
const promptManager = () => {
	return inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "Please enter the manager's name.",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				} else {
					console.log("A manager name is required.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "id",
			message: "Please enter the manager's ID number.",
			validate: (idInput) => {
				if (isNaN(idInput)) {
					console.log(idInput + "Please enter correct ID number");
					return false;
				} else {
					return true;
				}
			},
		},
		{
			type: "input",
			name: "id",
			message: "Please enter the manager's ID number.",
			validate: (emailInput) => {
				const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
				if (emailInput.value.match(validEmail)) {
					console.log("Valid email address!");
					return true;
				} else {
					console.log("Invalid email address!");
					return false;
				}
			},
		},
	]);
};
promptManager();
