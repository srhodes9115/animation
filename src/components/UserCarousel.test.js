import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button'

import UserCarousel from './UserCarousel'

describe('User Display Test', () => {
    let fakeOnCreateUser = jest.fn()

    let defaultProps = {
        users: [ ],
        onCreateUser: fakeOnCreateUser,
        selected: [ { 0: 0 } ]
    }

    it('mounts', ( done ) => {
        let component = shallow( <UserCarousel { ...defaultProps } /> )

        expect( component.length ).toBe( 1 )
        done()
    } )

    it('open dialog upon clicking button', ( done ) => {
        let component = shallow( <UserCarousel { ...defaultProps } /> ).dive()

        let control = component.find( Button ).at( 0 )
        control.simulate( 'click', {} )
        
        expect( component.state( 'addDialog' ).open ).toBe( true )
        done()
    } )
} )
