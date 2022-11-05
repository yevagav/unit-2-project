const React = require('react')
const LogInDefault = require('../layouts/LogInDefault')

class SignUp extends React.Component {
  render () {
    return (
      <LogInDefault title='Sign Up'>
        <form action='/user/signup' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required />
            </label>
            <input type='submit' value='Create Account' />
          </fieldset>
        </form>
      </LogInDefault>
    )
  }
}

module.exports = SignUp
