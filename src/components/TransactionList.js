import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { Transaction } from './Transaction'

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)


    return (
        <>
            <h4>History</h4>
            <ul id="list" className="list">
                {transactions.map(transaction => (<Transaction id={transaction.id}  text={transaction.text} amount={transaction.amount} />))}
            </ul>
        </>
    )
}