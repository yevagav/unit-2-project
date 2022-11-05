const React = require('react')
const LogInDefault = require('../layouts/LogInDefault')

class Login extends React.Component {
  render () {
    return (
      <LogInDefault title='Login'>
        <form action='/user/login' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required />
            </label>
            <input type='submit' value='Login Account' /><br />
          </fieldset>
        </form>
      </LogInDefault>
    )
  }
}

module.exports = Login