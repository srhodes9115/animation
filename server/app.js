
const webpack = require('webpack')
const express = require('express')
const app = express()
const port = 3000
const config = require('../webpack.config')
const compiler = webpack( config )


app.use( require('webpack-dev-middleware')( compiler));
app.use(require('webpack-hot-middleware')(compiler));

app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))