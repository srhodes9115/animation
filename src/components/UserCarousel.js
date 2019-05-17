import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = ( theme ) => ( {
    card : {
        maxWidth: 345
    },
    cardActions : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 16
    }
} )

class UserCarousel extends React.Component {
    constructor( props ) {
      super( props )

      this.onAddUser = this.onAddUser.bind( this )
    }

    onAddUser() {
        this.props.onAddUser()
    }
  
    render() {
      return (
        <div className="userCarousel">
            {
                this.props.users.map( ( user, index ) => {
                    return (
                        <Card className={ this.props.classes.card } key={ index }>
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
                    )
                } )
            }
        </div>
      );
    }
  }
  
UserCarousel.propTypes = {
    users               : PropTypes.array.isRequired,
    onAddUser           : PropTypes.func.isRequired,

    // injected by material-ui
    classes				: PropTypes.object.isRequired
}
  
export default withStyles( styles )( UserCarousel )