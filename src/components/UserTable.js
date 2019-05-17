import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

const styles = ( theme ) => ( {
    paper : {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50
    }
} )

const NUM_POSTS_PER_FETCH = 5

class UserTable extends React.Component {
    constructor( props ) {
        super( props )

        this.deleteUser = this.deleteUser.bind( this )
    }

    deleteUser( index ) {
        let user = this.props.users[ index ]
        this.props.onDeleteUser( user, index )
    }

    handleRowClick( event, index ) {
        let newArray = this.props.selected
        if ( newArray.length === 1 ) {
            newArray.pop()
        }

        newArray.push( index )
        this.props.onRowSelected( newArray )
    }

    render() {
        return (
            <div className="userTable">
                <Paper className={ this.props.classes.paper }>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Birthday</TableCell>
                                <TableCell>Zip Code</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.users.map( ( user, index ) => {
                                    const isSelected = this.props.selected.includes( index )
                                    return (
                                        <TableRow key={ index } hover onClick={ event => this.handleRowClick( event, index ) } selected={ isSelected }>
                                            <TableCell>{ user.name }</TableCell>
                                            <TableCell>{ user.email }</TableCell>
                                            <TableCell>{ user.birthday }</TableCell>
                                            <TableCell>{ user.zipcode }</TableCell>
                                            <TableCell>
                                                <IconButton id="delete" onClick={ () => { this.deleteUser( index ) } } >
                                                    <DeleteForeverIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    )
                                } )
                            }
                        </TableBody>
                    </Table>

                    <TablePagination
                        rowsPerPageOptions={ [] }
                        component="div"
                        count={ this.props.users.length }
                        rowsPerPage={ 5 }
                        page={ 0 }
                        backIconButtonProps={ {
                            'aria-label': 'Previous Page',
                        } }
                        nextIconButtonProps={ {
                            'aria-label': 'Next Page',
                        } }
                        onChangePage={ () => {} }
                    />
                </Paper>
            </div>
        )
    }
}

UserTable.propTypes = {
    selected            : PropTypes.array.isRequired,
    onRowSelected       : PropTypes.func.isRequired,
    onDeleteUser        : PropTypes.func.isRequired,
    users               : PropTypes.array.isRequired,
    
    // injected by material-ui
	classes				: PropTypes.object.isRequired
}


export default withStyles( styles )( UserTable )