
export function Transaction() {
    return(
        <div id="transaction">
            <div>
                <h3 id="transaction-h3">Add new transaction</h3>
            </div>
            <div>
                <hr></hr>
            </div>
            <div>
                <h4>Text</h4>
            </div>
            <div>
                <input type="text" id="input" placeholder="Enter text..." />
            </div>
            <div>
                <h4>Amount</h4>
                <p>(negative-expense, positive-income)</p>
                <input type="number" id="input" placeholder="Enter amount..." />
                <button id="button">Add Transaction</button>
            </div>
        </div>
    )
}