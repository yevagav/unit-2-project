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
          <img src="https://i.imgur.com/cEukfyg.png"></img>
          <img src="https://i.imgur.com/DI0c5aO.png"></img>
          <img src="https://i.imgur.com/6aiVqGM.png"></img>
          <img src="https://i.imgur.com/bJbAxZy.png"></img>
          <img src="https://i.imgur.com/C6x5xd4.png"></img>
          <img src="https://i.imgur.com/a818LR1.png"></img>
          <img src="https://i.imgur.com/E2kQrr2.png"></img>
          <img src="https://i.imgur.com/edjCjX3.png"></img>
          <div className='indexTitle'>TRAVEL BLOG</div>
          </div>
          <nav>
            <a href='/articles'>HOME PAGE</a>
            <a href='/articles/new'>NEW POST</a>
            {article ? <a href={`/articles/${article._id}/edit`}> EDIT POST</a> : ' '} {article ? <a href={`/articles/${article._id}`}> {article.title} SHOW PAGE</a> : ' '}
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
