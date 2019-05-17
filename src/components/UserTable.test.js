import React from 'react';
import { shallow } from 'enzyme';

import UserTable from './UserTable'
import TableRow from '@material-ui/core/TableRow'

describe('User Table tests', () => {
    let fakeOnRowSelected = jest.fn()
    let fakeOnDeleteUser = jest.fn()
    let fakeHandleSort = jest.fn()
    
    let defaultProps = {
        selected: [],
        onRowSelected: fakeOnRowSelected,
        onDeleteUser: fakeOnDeleteUser,
        users: [ { name: "temp", email: "temp", birthday: "4/13", zipcode: "11201"} ],
        handleSort: fakeHandleSort
    }

    it('mounts', ( done ) => {
        let component = shallow( <UserTable { ...defaultProps } /> )

        expect( component.length ).toBe( 1 )
        done()
    } )

    it( 'calls onSelected after row is selected', ( done ) => {
        let component = shallow( <UserTable { ...defaultProps } /> ).dive()

        let control = component.find( TableRow ).at( 1 )
        control.simulate( 'click', {} )

        expect( fakeOnRowSelected.mock.calls.length ).toBe( 1 )
        done()
    } )
} )
