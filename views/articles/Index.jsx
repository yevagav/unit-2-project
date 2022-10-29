const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { articles } = this.props
    return (
      <Default className ='indexTitle' title ='TRAVEL BLOG'>
        <ul>
          {
            articles.map((article) => {
              const { title, post, image, _id } = article
              return (
                <li key={_id}>
                  <a href={`/articles/${_id}`}>
                    {title}
                  </a> {post}
                  <br />
                  {image ? <img src={image} /> : ' '}
                  <form method='POST' action={`/articles/${_id}?_method=DELETE`}>
                    <input type='submit' value={`Delete ${title}`} />

                  </form>
                </li>
              )
            })
          }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
