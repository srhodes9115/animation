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

const styles = ( theme ) => ( {
    paper : {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10
    }
} )

const NUM_POSTS_PER_FETCH = 5

class UserTable extends React.Component {
    constructor( props ) {
        super( props )
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
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell>Shannon</TableCell>
                            <TableCell>shannon.rhodes@disney.com</TableCell>
                            <TableCell>4/13/94</TableCell>
                            <TableCell>06107</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <TablePagination
                        rowsPerPageOptions={ [] }
                        component="div"
                        count={ 5 }
                        rowsPerPage={ NUM_POSTS_PER_FETCH }
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
    // injected by material-ui
	classes				: PropTypes.object.isRequired
}


export default withStyles( styles )( UserTable )