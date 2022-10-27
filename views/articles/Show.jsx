const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { title, post, image } = this.props.article
    return (
      <Default title={`${title}`} article={this.props.article}>
        <p>{title} {post} {image} </p>
      </Default>
    )
  }
}

module.exports = Show
