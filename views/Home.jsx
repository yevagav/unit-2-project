const React = require('react')
const LogInDefault = require('./layouts/LogInDefault')

class Home extends React.Component {
  render () {
    return (
      <LogInDefault title='WELCOME'>
        <p className='home-p'> Create your own travel blog with a minimalistic theme! </p>
        <div className='outer-cont'>
          <div className='home-container'>
            <a id='signup' href='/user/signup'><button className='welcome-btns'>SignUp</button></a>
            <a id='login' href='/user/login'><button className='welcome-btns'>Login</button></a>
          </div>
        </div>
      </LogInDefault>
    )
  }
}

module.exports = Home
