const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    console.log(this.props.article)
    const { title, _id, post, image } = this.props.article
    return (
      <Default title={`${title} Edit Page`} article={this.props.article}>
        <form method='POST' action={`/articles/${_id}?_method=PUT`}>
          Title: <input type='text' name='title' defaultValue={title} /><br />
          Post: <input type='text' name='post' defaultValue={post} /><br />
          Image: <input type='text' name='image' defaultValue={image} /><br />
          <input type='submit' value='Edit Post' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
