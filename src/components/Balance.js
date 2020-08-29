import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h5>Your Balance</h5>
            <h2 id="balance"> ${total} </h2>
        </>
    )
}

export default Balance