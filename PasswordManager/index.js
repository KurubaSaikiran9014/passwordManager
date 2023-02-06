import './index.css'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordCount: 0,
    websiteName: '',
    userName: '',
    password: '',
    searchInput: '',
    passwordList: [],
    showPasswords: false,
  }

  showPassword = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  addNewPassword = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state
    const newPassword = {
      id: v4(),
      websiteName,
      userName,
      password,
    }
    this.setState(prevState => ({
      passwordCount: prevState.passwordCount + 1,
      passwordList: [...prevState.passwordList, newPassword],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  websiteChanged = event => {
    this.setState({websiteName: event.target.value})
  }

  usernameChanged = event => {
    this.setState({userName: event.target.value})
  }

  passwordChanged = event => {
    this.setState({password: event.target.value})
  }

  deletePassword = id => {
    const {passwordList} = this.state
    const f = passwordList.filter(e => e.id !== id)
    this.setState(prevState => ({
      passwordCount: prevState.passwordCount - 1,
      passwordList: f,
    }))
  }

  render() {
    const {
      passwordCount,
      websiteName,
      userName,
      password,
      searchInput,
      passwordList,
      showPasswords,
    } = this.state

    const filteredList = passwordList.filter(e =>
      e.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="img"
        />
        <div className="card">
          <form className="form">
            <h1 className="add-new-password">Add New Password</h1>
            <div className="input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="logo"
              />
              <input
                type="text"
                className="box"
                value={websiteName}
                placeholder="Enter Website"
                onChange={this.websiteChanged}
              />
            </div>
            <div className="input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="logo"
              />
              <input
                type="text"
                className="box"
                value={userName}
                placeholder="Enter Username"
                onChange={this.usernameChanged}
              />
            </div>
            <div className="input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="logo"
              />
              <input
                type="password"
                value={password}
                className="box"
                placeholder="Enter Password"
                onChange={this.passwordChanged}
              />
            </div>
            <button
              type="submit"
              onClick={this.addNewPassword}
              className="add-but"
            >
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="log-img"
          />
        </div>
        <div className="bot-card">
          <div className="count-cont">
            <div className="t">
              <h1 className="your-passwords">Your Passwords</h1>
              <p className="count">{passwordCount}</p>
            </div>
            <div className="search-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="s"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="show">
            <input type="checkbox" id="inp" onClick={this.showPassword} />
            <label className="show-pass" htmlFor="inp">
              Show Passwords
            </label>
          </div>
          {filteredList.length === 0 ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
                className="imj"
              />
              <p className="no-pass">No passwords</p>
            </div>
          ) : (
            <ul className="list-cont">
              {filteredList.map(eachItem => (
                <PasswordItem
                  details={eachItem}
                  key={eachItem.id}
                  showPasswords={showPasswords}
                  deletePassword={this.deletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
