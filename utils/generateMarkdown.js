// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(readmeData) {
//   return `# ${readmeData.title}

// `;
// }


function generateMarkdown(readmeData) {

  return `# ${readmeData.title}
  ![badge](https://img.shields.io/badge/License-${readmeData.license}-COLOR)  
  ## Description
  ${readmeData.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${readmeData.installation}
  ## Usage
  ${readmeData.usage}
  ## License
  This project is covered under this selected license: ${readmeData.license}
  ## Contributing
  ${readmeData.contributing}
  ## Tests
  ${readmeData.tests}
  ## Questions?
  ### Here's how to reach me/us with additional questions:
  GitHub: <a href="https://github.com/${readmeData.github}">${readmeData.github}</a>
  Email: <a href="mailto:${readmeData.email}">${readmeData.email}</a>
`;

}


module.exports = generateMarkdown;
