const inquirer = require('inquirer') 
const fs = require('fs')
const MarkDown = require('./col/READMEGen.js')


console.log('READMEGen is running fine')

// app questions
const questions = [
    {
    type: 'input',
    name: 'name',
    message: "Type in your name",
},
{
    type: 'input',
    name: 'title',
    message: 'Project Title'
},
{
    type: 'input',
    name: 'description',
    message: 'Project Description'
},
{
    type: 'input',
    name: 'installation',
    message: 'Describe the Installation Instructions'
},
{
    type: 'input',
    name: 'usage',
    message: 'Describe Project Usage'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Contribution Info'
},
{
    type: 'input',
    name: 'test instructions',
    message: 'Test Instructions'
},
{
        type: 'checkbox',
        name: 'developer languages',
        message: 'Which language are you most familiar with?',
        choices: ['HTML', 'CSS', 'JavaScript', 'Python', 'AWS', 'C']
},
{
    type: 'input',
    name: 'questions',
    message: 'Insert Email Address',
},
{
    type: 'input',
    name: 'questions',
    message: 'Insert Github Username',
},
{
    type: 'list',
    name: 'license',
    message: 'License',
    choices: ['MIT', 'Mozilla', 'IBM', 'Apache'], 
    filter(val) {
        return val.toLowerCase();
    }
 }
]
// query function
function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = MarkDown.generateReadme(answers)
      fs.writeFile('README.md', mark, function (err) { 
        if (err) {
            console.log('Could not save file', err)
        } else {
            console.log('Success: a new README.md file has been saved inside the current folder!')
        }
      })
})
    .catch((error) => {
      console.log(error)
})
}
runQuery()