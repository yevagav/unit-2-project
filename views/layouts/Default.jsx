const React = require('react')

class Default extends React.Component {
  render () {
    const { article, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
            <div className='header'> 
            <img src='https://i.imgur.com/cEukfyg.png' />
            <img src='https://i.imgur.com/DI0c5aO.png' />
            <img src='https://i.imgur.com/6aiVqGM.png' />
            <img src='https://i.imgur.com/bJbAxZy.png' />
            <img src='https://i.imgur.com/C6x5xd4.png' />
            <img src='https://i.imgur.com/a818LR1.png' />
            <img src='https://i.imgur.com/E2kQrr2.png' />
            <img src='https://i.imgur.com/edjCjX3.png' />
            <div className='indexTitle'>TRAVEL BLOG</div>
          </div> 

          <nav>
            <a href='/articles'>HOME PAGE</a>
            <a href='/articles/new'>NEW POST</a>
            {article ? <a href={`/articles/${article._id}/edit`}> EDIT POST</a> : ' '} {article ? <a href={`/articles/${article._id}`}> {article.title} SHOW PAGE</a> : ' '}
            {title === 'Login to Fruits Account' || title === 'Sign Up For Fruits' ? '' : <a href="/user/logout"><button>Logout</button></a>}
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>

        <div className='footer'>
          <nav>
            <h3>TRAVEL BLOG</h3>
          </nav>
        </div>
      </html>
    )
  }
}

module.exports = Default
