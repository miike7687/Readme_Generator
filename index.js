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
    choices: [
      "MIT",
      "creative commons",
      "GNU Public License",
      "Apache",
      "None",
    ],
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
    message: "What questions do you have?",
    name: "questions",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(questions).then(function (response) {
    var markdownData = generateMarkdown(response);
    fs.writeFile("README.md", markdownData, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(response);
    });
  });
}

// function to initialize program
function init() {
  writeToFile();
}
// function call to initialize program
init();
