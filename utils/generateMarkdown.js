// Function returns a license badge based on which license is passed in.
// If there is no license, returns an empty string.
function renderLicenseBadge(license) {
  if (license === "No License") {
    return "";
  } else if (license === "GNU AGPL v3") {
    return `[![License: ${license}](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](${renderLicenseLink(license)})`;
  } else if (license === "GNU GPL v3") {
    return `[![License: ${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`;
  } else if (license === "GNU LGPL v3") {
    return `[![License: ${license}](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](${renderLicenseLink(license)})`;
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: ${license}](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(license)})`;
  } else if (license === "Apache License 2.0") {
    return `[![License: ${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`;
  } else if (license === "MIT License") {
    return `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
  } else if (license === "Boost Software License 1.0") {
    return `[![License: ${license}](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${renderLicenseLink(license)})`;
  } else if (license === "The Unlicense") {
    return `[![License: ${license}](https://img.shields.io/badge/license-Unlicense-blue.svg)](${renderLicenseLink(license)})`;
  }
}

// Function returns the license link.
// If there is no license, returns an empty string.
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

// Function returns the license section of README.
// If there is no license, returns an empty string.
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  } else {
    return `## License:
    
${license}
    `;
  }
}

//Function returns the license section of Table of Contents.
// If there is no license, returns an empty string.
function renderLicenseTable(license) {
  if (license === "No License") {
    return "";
  } else {
    return "- [License](#license)";
  }
}

// Function generates markdown for README and inserts user input.
// Includes license badge, Table of Contents line, and section only if a license is selected, otherwise they will be empty strings.
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseTable(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Feel free to submit pull requests at the repo or send me an email with any questions you have.

GitHub: https://github.com/${data.username}

Email: ${data.email}

${renderLicenseSection(data.license)}
`;
}

// Exports the generateMarkdown function so it can be used in the index.js file.
module.exports = generateMarkdown;
