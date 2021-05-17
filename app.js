const {getTable, getTitle, valueInput} = require('./view')
const {printTable} = require('console-table-printer')
const {initModel} = require('./model')
const {update} = require('./update')

function app(model){
    while (true){
        const title = getTitle()
        const table = getTable(model)
        
        console.clear()
        console.log(title)
        printTable(table)

        const {billAmount, percentage} = await valueInput(model)
        const updatedModel = update(model, billAmount, percentage)
        model = updatedModel
    }
}

module.exports = {
    app
}

app(initModel)