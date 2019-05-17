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
    dialog_paper		: {
        display             : 'flex',
        alignItems          : 'center',
		minHeight			: '65%',
		minWidth			: '35%',
    },
    dialog_content : {
        width: '75%'
    },
    form_control : {
        width: '100%'
    }
} )


class AddDialog extends React.Component {
    constructor( props ) {
        super( props )

        this.state = { user: { name: '', email: '', birthday: '', zipcode: '' } }

        this.createUser = this.createUser.bind( this )
        this.handleChange = this.handleChange.bind( this )
    }

    handleChange( event ) {
        let newUser = this.state.user
        newUser[ event.target.id] = event.target.value 
        this.setState( { user : newUser } )
    }

    createUser() {
        this.props.createUser( this.state.user )
    }

    render() {
        return (
            <Dialog classes={ { paper: this.props.classes.dialog_paper } } disableBackdropClick open={ this.props.isOpen } onClose={ this.props.closeDialog }>
                <DialogTitle>Add New User</DialogTitle>
                <DialogContent className={ this.props.classes.dialog_content }>
                    <FormControl className={ this.props.classes.form_control }>
                        <TextField id="name" label="Name" value={ this.state.name } onChange={ this.handleChange }></TextField>
                        <TextField id="email" label="Email" value={ this.state.email } onChange={ this.handleChange }></TextField>
                        <TextField id="birthday" label="Birthday" value={ this.state.birthday } onChange={ this.handleChange }></TextField>
                        <TextField id="zipcode" label="ZipCode" maxLength="6" value={ this.state.zipcode } onChange={ this.handleChange }></TextField>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={ this.createUser }
                        disabled={ !( this.state.user.name !== '' && this.state.user.email !== '' && this.state.user.birthday !== '' && this.state.user.zipcode !== '' ) }>Add User</Button>
                    <Button variant="contained" color="secondary" onClick={ this.props.closeDialog }>Cancel</Button>
                </DialogActions>
            </Dialog>
        )
    }
}


AddDialog.propTypes = {
    isOpen              : PropTypes.bool.isRequired,
    closeDialog         : PropTypes.func.isRequired,
    createUser        : PropTypes.func.isRequired,

    // injected by material-ui
    classes				: PropTypes.object.isRequired
}
  
export default withStyles( styles )( AddDialog )