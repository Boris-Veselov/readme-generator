const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  const badge = "";
    if (license === "MIT") {
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    } else if (license === "Apache") {
      badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg"
    } else if (license === "IBM") {
      badge = "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"
    } else {
        badge = ""
      }
      return badge;
    }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const license = "";
  if (license === "MIT") {
    license = "https://opensource.org/licenses/MIT"
  } else if (license === "Apache") {
    license = "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "IBM") {
    license = "https://opensource.org/licenses/IPL-1.0"
  } else {
      license = ""
    }
    return license;
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = ""
    if (license === "none") {
      licenseSection = ""
    } else {
      licenseSection = 
      `License: ${license}`
    }
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  # ${data.projectTitle}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## License
  ${data.license}

  ## Contact Information
  github.com/${data.github}
  ${data.emailContact}`
}

module.exports = generateMarkdown;
