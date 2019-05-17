import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

const styles = ( theme ) => ( {

} )


class UserCarousel extends React.Component {
    constructor( props ) {
        super( props )

        this.state = { name: '' }

        this.handleChange = this.handleChange.bind( this )
    }

    handleChange = name => event => {
        console.log( handleChange )
        console.log( name )
        console.log( event.target.value )
        this.setState( { [name] : event.target.value } )
    }

    render() {
        return (
            <Dialog disableBackdropClick open={ this.props.isOpen } onClose={ this.props.closeDialog }>
                <DialogTitle>Add New User</DialogTitle>
                <DialogContent>
                    <FormControl>
                        <TextField id="name" label="Name" value={ this.state.name } onChange={ this.handleChange( 'name') }></TextField>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={ this.createUser }>Add User</Button>
                    <Button variant="contained" onClick={ this.props.closeDialog }>Cancel</Button>
                </DialogActions>
            </Dialog>
        )
    }
}


AddDialog.propTypes = {
    isOpen              : PropTypes.bool.isRequired,
    closeDialog         : PropTypes.func.isRequired,

    // injected by material-ui
    classes				: PropTypes.object.isRequired
}
  
export default withStyles( styles )( AddDialog )