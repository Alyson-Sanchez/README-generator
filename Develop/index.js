// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('node:fs');
const GenerateMarkdownHelper = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input



    inquirer.prompt([
    {
        name: 'Title',
        message: 'Title of your project'
    },
    {
        name: 'Description',
        message: 'Describe your project.'
    },
    {
        name: 'Installation',
        message: 'How to install your project.'
    },
    {
        name: 'Usage',
        message: 'How to use your project.'
    },
    {
        name: 'ContributionGuidelines',
        message: 'Does your project require anything? Bootstrap? Node?'
    },
    {
        name: 'Tests',
        message: 'Tests done on your project'
    },
    {
        name: 'Credits',
        message: 'Did anyone / anything help you with this project? References / collaborators'
    },
    ])

.then(async (answers)=> {
    console.info('Answers:', answers);
    var licenseURL = await GenerateMarkdownHelper.renderLicenseLink();
    console.log ('1' + licenseURL);
    finalMarkdown = GenerateMarkdownHelper.formatData(answers,licenseURL);
    fileInfo(finalMarkdown);
        
});

// TODO: Create a function to write README file
function fileInfo(formattedData){
var queryPromise = inquirer.prompt([
    {name : 'fileName',
    message : 'Name your file' 
}
]).then((answers) => {
    console.info('Answer:', answers.fileName);
    console.log(typeof answers.fileName);
    writeToFile(answers.fileName + '.md',formattedData);
});
}

function writeToFile(fileName, data) {
    fs.writeFile(String(fileName), data, ['r+'], 
    (err) => {
        if (err)
            console.log(err);
    });
}


