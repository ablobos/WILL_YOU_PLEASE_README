const inquirer = require('inquirer') 

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
    type: 'list',
    name: 'contact',
    message: 'Best Point of Contact',
    choices: ['e-mail', 'cell', 'linkedin'],
},
{
    type: 'list',
    name: 'license',
    message: 'License',
    choices: ['MIT', 'ISC', 'GNUPLv3', 'Other'], 
    filter(val) {
        return val.toLowerCase();
    }
 }
]
// query function
async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        return answers
})
    .catch((error) => {
    console.log(errors)
})
}
runQuery()