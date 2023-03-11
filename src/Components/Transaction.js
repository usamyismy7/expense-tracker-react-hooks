import { useState, useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';

export function Transaction() {
    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()*1000000),
            text,
            amount: +amount,
        }
        addTransaction(newTransaction);
    }
    return(
        <div id="transaction">
            <div>
                <h3 id="transaction-h3">Add new transaction</h3>
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='text'>Text</label>
                    <input type="text" id="input" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div>
                    <label htmlFor='amount'>Amount <br></br>(negative-expense, positive-income)</label>
                    <input type="number" id="input" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn" id="button">Add Transaction</button>
            </form>
        </div>
    )
}

/*
<div>
    <hr></hr>
</div>
*/