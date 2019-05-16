import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import UserTable from './UserTable'
//<UserTable />

const styles = ( theme ) => ( {

} )

class App extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <h1>test</h1>
        <UserTable />
      </div>
    );
  }
}

export default withStyles( styles )( App )