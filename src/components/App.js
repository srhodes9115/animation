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

    this.state = { users: [], selected: [] }

    this.onDeleteUser = this.onDeleteUser.bind( this )
    this.onCreateUser = this.onCreateUser.bind( this )
    this.onRowSelected = this.onRowSelected.bind( this )
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    superagent.get('/api/v1/users')
      .end( ( err, res ) => {
        if ( err ) console.error( 'error handling' )
        
        let newSelected = []
        newSelected.push( 0 )
        this.setState( { users: res.body.users, selected: newSelected } )
      } )
  }

  onCreateUser( user ) {
    superagent.post( '/api/v1/user' )
      .send( user )
      .set( 'Content-Type', 'application/json' )
      .end( ( err, res ) => {
        if ( err ) console.error( 'error handling' )

        this.getUsers()
      } )
  }


  onDeleteUser( deleteItem, index ) {
    superagent.post( 'api/v1/delete' )
      .query( { zipcode: deleteItem.zipcode } )
      .end( ( err, res ) => {
        if ( err ) {
          console.error( 'error handling required' )
        }
        else {
          let newState = this.state
          newState.users.splice( index, 1 )
          this.setState( { newState } )
        }
      } )
  }

  onRowSelected( newSelectedArray ) {
    let newState = this.state
    newState.selected = newSelectedArray

    this.setState( newState )
  }

  render() {
    return (
      <div className={ this.props.classes.app }>
        <Typography component="h2" variant="h1" gutterBottom align="center" color="primary">
          People Viewer
        </Typography>
        <UserCarousel
          users={  ( this.state.users ) ? this.state.users : [] }
          onCreateUser={ this.onCreateUser }
          selected={ this.state.selected }
        />
        <UserTable
          users={ ( this.state.users ) ? this.state.users : []  }
          onDeleteUser={ this.onDeleteUser }
          onRowSelected={ this.onRowSelected }
          selected={ this.state.selected }
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