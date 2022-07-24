
export function IncomeExpense() {
    const income = 0.00;
    return(
        <div id="income-expense">
            <div>
                <h3>INCOME</h3>
                <h2 id="green">{"$"+income+".00"}</h2>
            </div>
            <hr></hr>
            <div>
                <h3>EXPENSE</h3>
                <h2 id="brown">{"$"+income+".00"}</h2>
            </div>
        </div>
    )
}