// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") {
    return "";
  } else if (license === "GNU AGPL v3") {
    return "https://img.shields.io/badge/License-AGPL_v3-blue.svg";
  } else if (license === "GNU GPL v3") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else if (license === "GNU LGPL v3") {
    return "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
  } else if (license === "Mozilla Public License 2.0") {
    return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
  } else if (license === "Apache License 2.0") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  } else if (license === "MIT License") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "Boost Software License 1.0") {
    return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
  } else if (license === "The Unlicense") {
    return "https://img.shields.io/badge/license-Unlicense-blue.svg";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No License") {
    return "";
  } else if (license === "GNU AGPL v3") {
    return "https://www.gnu.org/licenses/agpl-3.0";
  } else if (license === "GNU GPL v3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "GNU LGPL v3") {
    return "https://www.gnu.org/licenses/lgpl-3.0";
  } else if (license === "Mozilla Public License 2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license === "Apache License 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "MIT License") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Boost Software License 1.0") {
    return "https://www.boost.org/LICENSE_1_0.txt";
  } else if (license === "The Unlicense") {
    return "http://unlicense.org/";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  } else {
    return `## License:
    
    ${license}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: ${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

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

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ##Questions

  Feel free to submit pull requests at the repo or send me an email with any questions you have.

  GitHub: https://github.com/${data.username}

  Email: ${data.email}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
