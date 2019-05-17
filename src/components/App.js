import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
const superagent = require('superagent')

import UserTable from './UserTable'
import UserCarousel from './UserCarousel'

const styles = ( theme ) => ( {
  app : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center" 
  }
} )

class App extends React.Component {
  constructor( props ) {
    super( props )

    this.state = { users: [] }

    this.onDeleteUser = this.onDeleteUser.bind( this )
    this.onAddUser = this.onAddUser.bind( this )
  }

  componentDidMount() {
    superagent.get('/api/v1/users')
      .end( ( err, res ) => {
        if ( err ) console.error( 'error handling' )
        
        this.setState( { users: res.body.users } )
      } )
  }

  onAddUser( ) {
    console.log( 'inside onAddUser app.js')
    superagent.post( '/api/v1/user' )
  }

  onDeleteUser( deleteItem, index ) {
    //call delete api
    superagent.post( 'api/v1/delete' )
      .query( { email: deleteItem.email } )
      .end( ( err, res ) => {
        if ( err ) {
          console.error( 'error handling required' )
        }
        else {
          let users = this.state.users
          let newArray = users.splice( index )
          this.setState( users )
        }
      } )
  }

  render() {
    return (
      <div className={ this.props.classes.app }>
        <Typography component="h2" variant="h1" gutterBottom align="center" color="primary">
          People Viewer
        </Typography>
        <UserCarousel
          users={  ( this.state.users ) ? this.state.users : [] }
          onAddUser={ this.onAddUser }
        />
        <UserTable
          users={ ( this.state.users ) ? this.state.users : []  }
          onDeleteUser={ this.onDeleteUser }
        />
      </div>
    );
  }
}

App.propTypes = {
  // injected by material-ui
  classes				: PropTypes.object.isRequired
}

export default withStyles( styles )( App )