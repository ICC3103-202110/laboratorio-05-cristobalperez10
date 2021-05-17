function tip_calculator(x, y){
    return x*y/100
}

function update(billAmount, percentage){
    const newPercentage = tip_calculator(billAmount, percentage),
    const newTotal = billAmount + newPercentage,
    return {
        billAmount: billAmount,
        percentage: percentage,
        percentage2: newPercentage,
        total: newTotal,
    }
}

module.exports = {
    update
}
