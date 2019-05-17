import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddDialog from './AddDialog'

const styles = ( theme ) => ( {
    card : {
        maxWidth: 345
    },
    cardActions : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 16,
        marginRight: 10,
        marginLeft: 10
    }
} )

class UserCarousel extends React.Component {
    constructor( props ) {
      super( props )

      this.state = { 
          addDialog : { open: false }
      }

      this.onAddUser = this.onAddUser.bind( this )
      this.closeDialog = this.closeDialog.bind( this )
      this.createUser = this.createUser.bind( this )
    }

    onAddUser() {
        this.setState( { addDialog: { open: true } } )
    }

    closeDialog() {
        this.setState( { addDialog: { open: false } } )
    }

    createUser( user ) {
        this.closeDialog()
        this.props.onCreateUser( user)
    }
  
    render() {
        let addDialog = ( <div /> )
        if ( this.state.addDialog.open ) {
            addDialog = (
                <AddDialog
                    isOpen={ this.state.addDialog.open }
                    closeDialog={ this.closeDialog }
                    createUser={ this.createUser }
                />
            )
        }

        let user = this.props.users[ this.props.selected[0] ]

        return (
            <div className="userCarousel">
                    {
                        this.props.selected.length > 0 && this.props.users.length > 0  ? (
                            <Card className={ this.props.classes.card } key={ this.props.selected[0] }>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">{ user.name }</Typography>
                                    <Typography component="p">{ user.email }</Typography>
                                    <Typography component="p">{ user.birthday }</Typography>
                                    <Typography component="p">{ user.zipcode }</Typography>
                                    
                                </CardContent>
                                <div className={ this.props.classes.cardActions }>
                                    <Button color="primary" variant="contained" onClick={ this.onAddUser } >Add New User</Button>
                                </div>
                            </Card>
                        ) : (
                            <div className={ this.props.classes.cardActions }>
                                <Button color="primary" variant="contained" onClick={ this.onAddUser } >Add New User</Button>
                            </div>
                        )
                    }
                { addDialog }
            </div> 
        );
    }
  }
  
UserCarousel.propTypes = {
    users               : PropTypes.array.isRequired,
    onCreateUser        : PropTypes.func.isRequired,
    selected            : PropTypes.array.isRequired,

    // injected by material-ui
    classes				: PropTypes.object.isRequired
}
  
export default withStyles( styles )( UserCarousel )