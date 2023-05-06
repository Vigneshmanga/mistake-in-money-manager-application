import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  return (
    <div className="balance-income-expenses-container">
      <div className="money-card balance-bg">
        <img
          className="money-logo-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="money-text-container">
          <p className="money-card-text" data-testid="balanceAmount">
            your Balance
          </p>
          <p className="money-text">Rs {income - expenses}</p>
        </div>
      </div>
      <div className="money-card income-bg">
        <img
          className="money-logo-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="money-text-container">
          <p className="money-card-text">your Income</p>
          <p className="money-text" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="money-card expenses-bg">
        <img
          className="money-logo-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
        />
        <div className="money-text-container">
          <p className="money-card-text">your Expenses</p>
          <p className="money-text" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
