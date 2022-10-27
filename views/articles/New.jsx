const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Blog Post'>
        <form method='POST' action='/articles'>
          Title: <input type='text' name='title' placeholder='Title Of Blog Post' /><br />
          Post: <input type='text' name='post' placeholder='Type Your Post Here' /><br />
          Image: <input type='text' name='image' placeholder='URL of your image' /><br />
          <input type='submit' value='Submit Post' />
        </form>
      </Default>
    )
  }
}

module.exports = New
