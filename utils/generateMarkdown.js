const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// function that returns a license badge based on which license is passed in
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

// function that returns the license link

function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT"
  } else if (license === "Apache") {
    licenseLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)    "
  } else if (license === "IBM") {
    licenseLink = "https://opensource.org/licenses/IPL-1.0"
  } else {
      licenseLink = ""
    }
    return licenseLink;
  }

// function that returns the license section of README
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

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # Ttile 
  ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.credits}

  ## License
  ${data.license}
  ${renderLicenseLink(data.license)}

  ## Contact Information
  github.com/${data.username}
  ${data.email}`
}

module.exports = generateMarkdown;
