const React = require('react')
const LogInDefault = require('./layouts/LogInDefault')

class Home extends React.Component {
  render () {
    return (
      <LogInDefault title='Home Page'>
        <a href='/user/signup'><button>SignUp</button></a>
        <a href='/user/login'><button>Login</button></a>
      </LogInDefault>
    )
  }
}

module.exports = Home