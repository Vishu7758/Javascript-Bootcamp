const account = {
    name:'Vishal Kharade',
    expenses:[],
    income:[],

    addIncome : function (desription, amount) {
        this.income.push({
            desription: desription,
            amount: amount
        })
    },
    addExpenses : function (desription, amount) {
        this.expenses.push({
            desription: desription,
            amount: amount
        })
    },

    getAccountSummary : function () {
        let totalExpenses = 0
        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })

        let totalIncome = 0
        this.income.forEach(function (myIncome) {
            totalIncome += myIncome.amount;
        })
        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addExpenses('Rent', 950)
account.addExpenses('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary());