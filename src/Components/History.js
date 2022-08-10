import { useContext } from 'react';
import History2 from "./History2";

import { GlobalContext } from './Context/GlobalState';

export function History() {
    const { transactions } = useContext(GlobalContext);
    return (
        <div id="history">
            <div>
                <h3 id="history-h3">History</h3>
            </div>
            <ul className="list">
                {transactions.map(transaction => (<History2 key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    )
}

/*
<div>
    <hr></hr>
</div>
*/