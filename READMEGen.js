class MarkDown {
    static generateReadme(answeres){
            return `
        # ${answers.title}

        ## Table of Contents 
        - [Project description](#Description)
        - [Usage](#Usage)
        - [Contributing](#Contributing)
        - [Installation](#Installation)
        - [Questions](#Questions)
        - [License](#License)

        ## Description
        ${answers.description}

        ## Usage
        ${answeres.usage}

        ## Installation
        ${answeres.installation}

        ## Contributing
        ${answeres.contributing}

        ## Questions
        ${answeres.email}
        ${answeres.github}

        ## License
        ${answeres.license}
        `
    }

    module.exports = Markdown