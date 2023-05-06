import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const onclickDeleteImage = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-item">
      <p className="column-value">{title}</p>
      <p className="column-value">Rs {amount}</p>
      <p className="column-value">{type}</p>
      <p className="column-value">
        <button
          type="button"
          onClick={onclickDeleteImage}
          className="delete-btn"
        >
          <img
            className="delete-image"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          />
        </button>
      </p>
    </li>
  )
}

export default TransactionItem
