import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

const styles = ( theme ) => ( {
    card : {
        maxWidth: 345
    }
} )


class UserCarousel extends React.Component {
    constructor( props ) {
      super( props )
  
      this.state = {}
    }
  
    render() {
      return (
        <div className="userCarousel">
            {
                this.props.users.map( ( user, index ) => {
                    return (
                        <Card className={ this.props.classes.card } key={ index }>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        { user.name }
                                    </Typography>
                                    <Typography component="p">{ user.email }</Typography>
                                    <Typography component="p">{ user.birthday }</Typography>
                                    <Typography component="p">{ user.zipcode }</Typography>
                                </CardContent>
                            </CardActionArea>
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

    // injected by material-ui
    classes				: PropTypes.object.isRequired
}
  
  export default withStyles( styles )( UserCarousel )