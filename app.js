const inquirer = require('inquirer') 

console.log('READMEGen is running fine')

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
    name: 'installation, special info, and test instructions',
    message: 'Describe the installation instructions, contribution guidelines, and testing instructions'
},
{
        type: 'checkbox',
        message: 'Which language are you most familiar with?',
        options: ['HTML', 'CSS', 'JavaScript', 'Python', 'AWS', 'C']
},
{
    type: 'list',
    name: 'contact',
    choices: ['e-mail', 'cell', 'linkedin'] 

},
{
    type: 'input',
    name: 'description',
    message: 'Project Description'
}
]