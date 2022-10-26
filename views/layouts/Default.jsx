const React = require('react')

class Default extends React.Component {
    render() {
        const { article, title } = this.props
        return (
            <html>
                <head>
                <link rel='stylesheet' href='/css/app.js' />
                <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href='/articles'>Home Page</a>
                        <a href='/articles/new'>New Post</a>
                        {/* { article ? <a href={`/articles/${articles._id}/edit`}> Edit Post</a> : ' '} {article ? <a href={`/articles/${fruit._id}`}} */}
                    </nav>
                </body>
            </html>
        )
    }
}