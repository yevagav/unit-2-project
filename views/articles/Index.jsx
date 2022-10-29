const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { articles } = this.props
    return (
      <Default>
        <div className='container'>
        <ul>
          {
            articles.map((article) => {
              const { title, post, image, _id } = article
              return (
                <div className='flexItems'>
                <li className="li" key={_id}>
                  <a className="a" href={`/articles/${_id}`}>
                    {title}
                  </a> 
                  <br />
                  {image ? <img src={image} /> : ' '}
                  <form method='POST' action={`/articles/${_id}?_method=DELETE`}>
                    <input className='delete' type='submit' value={`Delete Post`} />

                  </form>
                </li>
                </div>
                
              )
            })
          }
        </ul>
        </div>
      </Default>
    )
  }
}

module.exports = Index
