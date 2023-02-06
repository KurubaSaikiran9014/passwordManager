const PasswordItem = props => {
  const {details, deletePassword, showPasswords} = props
  const {id, websiteName, userName, password} = details
  const passwordEl = showPasswords ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
      alt="stars"
      className="stars"
    />
  )
  const buttonClicked = () => {
    deletePassword(id)
  }
  return (
    <li className="list-item">
      <p className="pro">{websiteName[0]}</p>
      <div>
        <p className="web">{websiteName}</p>
        <p className="web">{userName}</p>
        <p className="web">{passwordEl}</p>
      </div>
      <button
        type="button"
        className="delete"
        // eslint-disable-next-line react/no-unknown-property
        testid="delete"
        onClick={buttonClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
