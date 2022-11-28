// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") {
    return "";
  } else if (license === "GNU AGPLv3") {
    return "https://img.shields.io/badge/License-AGPL_v3-blue.svg"
  } else if (license === "GNU GPLv3") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg"
  } else if (license === "GNU LGPLv3") {
    return "https://img.shields.io/badge/License-LGPL_v3-blue.svg"
  } else if (license === "Mozilla Public License 2.0") {
    return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
  } else if (license === "Apache License 2.0") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  } else if (license === "MIT License") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  } else if (license === "Boost Software License 1.0") {
    return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
  } else if (license === "The Unlicense") {
    return "https://img.shields.io/badge/license-Unlicense-blue.svg"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ##Questions

  Feel free to submit pull requests at the repo or send me an email with any questions you have.

  GitHub: https://github.com/${data.username}

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
