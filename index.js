var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");

// Create a prompt for the inquirer npm
// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "How would you describe your project?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you want to install?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you plan on using this?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What type of license do you want?",
    choices: ["MIT", "ISC", "Zlib", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "How do you plan to contribute?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What tests will you be running?",
    name: "tests",
  },
  {
    type: "input",
    message: "What's your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What's your email address?",
    name: "email",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    var markdownData = generateMarkdown(response);
    writeToFile("README.md", markdownData);
  });
}
// function call to initialize program
init();
