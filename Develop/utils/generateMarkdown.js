const inquirer = require('inquirer');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  console.log ('2' + license);
  switch (license){
    case 'MIT':
      var URL = 'https://www.bettertechtips.com/wp-content/uploads/2017/06/MIT-license.jpg'
      return URL;

    case 'General Public':
      var URL = 'https://tecno-simple.com/wp-content/uploads/2021/02/familia-de-licencias-GPL.png'
      return URL;

    case 'Lesser General Public':
      var URL = 'https://nl.wikisage.org/w/images/9/9c/Lgpl.png'
      return URL;

    case 'Apache':
      var URL = 'https://httpd.apache.org/docs/2.4/en/images/feather.png'
      return URL;

    default:
      return '';

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
async function renderLicenseLink() {

  var promise = await inquirer 
  .prompt([
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your README.',
      choices: ['MIT', 'General Public','Lesser General Public', 'Apache', 'No License'],
    }
  ])
  .then(answers => {
    console.info('Answer:', answers.license);
    return renderLicenseBadge(answers.license);
  });

  return promise;
}

  function formatData(answers, licenseURL){
  var formattedData = 
    ('#' + ' ' + String(answers.Title) + ' ![License Badge](' + licenseURL + ')'+ '\n' + 
    String(answers.Description) + '\n' + 
    '## Installation' + '\n' + String(answers.Installation) + '\n' + 
    '## Usage' + '\n' + String(answers.Usage) + '\n' +
    '## Contribution Guidelines' + '\n' + String(answers.ContributionGuidelines) + '\n' + 
    '## Tests' + '\n' + String(answers.Tests) + '\n' + 
    '## Credits' + '\n' + String(answers.Credits));

  return formattedData;
}



exports.renderLicenseLink = renderLicenseLink;
exports.renderLicenseBadge = renderLicenseBadge;
exports.formatData = formatData;