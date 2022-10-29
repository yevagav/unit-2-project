const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { articles } = this.props
    return (
      <Default>
        <div className='outer-container'>
          <div className='container'>

            {
            articles.map((article) => {
              const { title, image, _id } = article
              return (
                <div className='grid-items' key={_id}>

                  <a className='a' href={`/articles/${_id}`}>
                    {title}
                  </a>
                  <br />
                  {image ? <img src={image} /> : ' '}
                  <form method='POST' action={`/articles/${_id}?_method=DELETE`}>
                    <input className='delete' type='submit' value='Delete Post' />

                  </form>

                </div>

              )
            })
          }

          </div>
        </div>
      </Default>
    )
  }
}

module.exports = Index
