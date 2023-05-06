import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'INCOME',
    transactionsHistoryList: [],
  }

  onchangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onchangeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onchangeTypeInput = event => {
    this.setState({type: event.target.value})
  }

  onsubmitAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    if (title !== '' && amount !== '') {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount: parseInt(amount),
        type: type === 'INCOME' ? 'Income' : 'Expenses',
      }
      if (type === 'INCOME')
        this.setState(prevState => ({
          income: prevState.income + parseInt(amount),
          expenses: prevState.expenses,
          title: '',
          type: 'INCOME',
          amount: '',
          transactionsHistoryList: [
            ...prevState.transactionsHistoryList,
            newTransaction,
          ],
        }))
      else {
        this.setState(prevState => ({
          income: prevState.income,
          expenses: prevState.expenses + parseInt(amount),
          title: '',
          type: 'INCOME',
          amount: '',
          transactionsHistoryList: [
            ...prevState.transactionsHistoryList,
            newTransaction,
          ],
        }))
      }
    }
  }

  deleteTransaction = id => {
    const {transactionsHistoryList} = this.state
    const transactionDetailsToBeDelete = transactionsHistoryList.find(
      each => each.id === id,
    )
    const {type, amount} = transactionDetailsToBeDelete
    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income - amount,
        expenses: prevState.expenses,
        title: prevState.title,
        type: prevState.type,
        amount: prevState.amount,
        transactionsHistoryList: prevState.transactionsHistoryList.filter(
          each => each.id !== id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        income: prevState.income,
        expenses: prevState.expenses - amount,
        title: prevState.title,
        type: prevState.type,
        amount: prevState.amount,
        transactionsHistoryList: prevState.transactionsHistoryList.filter(
          each => each.id !== id,
        ),
      }))
    }
  }

  render() {
    const {
      income,
      expenses,
      amount,
      title,
      type,
      transactionsHistoryList,
    } = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="profile-container">
            <h1 className="user-name">HI, RICHARD</h1>
            <p className="welcome-text">
              Welcome back to your{' '}
              <span className="app-name">Money Manager</span>
            </p>
          </div>
          <MoneyDetails income={income} expenses={expenses} />
          <div className="form-and-history-container">
            <form onSubmit={this.onsubmitAddTransaction} className="form-el">
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <label htmlFor="titleId" className="label">
                TITLE
              </label>
              <input
                id="titleId"
                onChange={this.onchangeTitleInput}
                className="input-el"
                placeholder="TITLE"
                value={title}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                onChange={this.onchangeAmountInput}
                value={amount}
                id="amount"
                className="input-el"
                placeholder="AMOUNT"
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select
                onChange={this.onchangeTypeInput}
                value={type}
                id="type"
                className="input-el"
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId}>{each.displayText}</option>
                ))}
              </select>
              <button className="submit-btn" type="submit">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history-text">History</h1>
              <ul className="history-items-list-container">
                <li className="list-header">
                  <p className="header">Title</p>
                  <p className="header">Amount</p>
                  <p className="header">Type</p>
                  <p className="header">{` `}</p>
                </li>
                {transactionsHistoryList.map(each => (
                  <TransactionItem
                    key={each.id}
                    transactionDetails={each}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
