import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '@material-ui/core/Dialog'

import AddDialog from './AddDialog'

describe('Add Dialog tests', () => {
    let fakeCloseDialog = jest.fn()
    let fakeCreateUser = jest.fn()

    let defaultProps = {
        isOpen : true,
        closeDialog: fakeCloseDialog,
        createUser : fakeCreateUser
    }

    it('mounts', ( done ) => {
        let component = shallow( <AddDialog { ...defaultProps } /> )

        expect( component.length ).toBe( 1 )
        done()
    } )


    it( 'renders an empty div is the dialog is not open', ( done ) => {
        let component = shallow( <AddDialog { ...defaultProps } /> ).dive()

        expect( component.find( Dialog ).at( 0 ).exists() ).toBe( true )
        done()
    } )
} )
