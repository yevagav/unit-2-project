const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { title, post, image, updatedAt } = this.props.article
    const capName = title.toUpperCase()
    return (
      <Default title={`${capName}`} article={this.props.article}>
        <h2 id='created'>{`Created: ${updatedAt.toLocaleDateString()}`}</h2>
        <div className='show-img'>
          {image ? <img src={image} /> : ' '}
        </div>
        <p className='show-p'>{post}</p>
      </Default>
    )
  }
}

module.exports = Show
