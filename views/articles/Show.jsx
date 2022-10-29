const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { title, post, image } = this.props.article
    const capName = title.toUpperCase() 
    return (
      <Default title={`${capName}`} article={this.props.article}>
        <h2>SHOW PAGE</h2>
        <p>{title} {post} {image} </p>
      </Default>
    )
  }
}

module.exports = Show
