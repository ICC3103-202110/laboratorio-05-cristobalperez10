const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.cyanBright(
        figlet.textSync(
            "Tip Calculator",
            {
                horizontalLayout: "full",
                font: "Nancyj-Improved"
            }
        )
    )
}

function getTable(model){
    const {billAmount, percentage, tip, total} = model
    return [
        {'Bill Amount': billAmount},
        {'Percentage': percentage},
        {'Tip': tip},
        {'Total': total}

    ]
}

function valueInput(model){
    const {billAmount,percentage} = model
    return inquirer.prompt([
        {
            name: 'billAmount',
            type: 'input',
            message: 'Bill Amount: ',
            default: billAmount
        },
        {
            name: 'percentage',
            type: 'input',
            message: 'Tip (%): ',
            default: percentage
        }
    ])
}

function view(model){
    return{
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    getTable,
    getTitle,
    valueInput,
    view
}