const webpack = require('webpack')
const express = require('express')
const app = express()
const port = 3000
const config = require('../webpack.config')
const compiler = webpack( config )
const sqlite3 = require('sqlite3').verbose();
const db = require( './db')

app.use(require('webpack-dev-middleware')( compiler));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}

app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.get('/api/v1/users', ( req, res ) => {
    let db = new sqlite3.Database('./mydb', (err) => {
        if (err) {
          return console.error(err.message)
        }
      });
    let sql = 'SELECT DISTINCT * from users ORDER BY name'
    db.all( sql, [], ( err, rows ) => {
        if ( err ) return console.error(err.message)
        else {
            res.status(200).send( {
                success: true,
                message: 'users retrieved successfully',
                users: rows
            } )
        }
    } )
    db.close()
} )


app.post( '/api/v1/delete', ( req, res ) => {
    let db = new sqlite3.Database('./mydb', (err) => {
        if (err) {
          return console.error(err.message)
        }
      });
    let sql = `DELETE FROM users WHERE zipcode = '${req.query.zipcode}'`
    db.run( sql, ( err ) => {
        if ( err ) return console.error( err.message )
        res.status(200).send( {
            success: true
        })
    } )
    db.close()
} )


app.post( '/api/v1/user', ( req, res ) => {
  let user = req.body
  let db = new sqlite3.Database('./mydb', (err) => {
    if (err) {
      return console.error(err.message)
    }
  });
  let sql = `INSERT INTO users VALUES('${user.name}','${user.email}','${user.birthday}','${user.zipcode}')`
  db.run( sql, ( err ) => {
    if ( err ) return console.error( err.message )

    res.status( 200 ).send( {
      success: true
    } )
  })
  db.close()
} )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))