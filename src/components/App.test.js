import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App'
import UserCarousel from './UserCarousel'
import UserTable from './UserTable'

describe('App Test Suite', () => {
    it('mounts', ( done ) => {
        let component = shallow( <App /> )

        expect( component.length ).toBe( 1 )
        done()
    } )

    it( 'visual elements display', ( done ) => {
        let component = mount( <App /> )

        expect( component.find( UserCarousel ).length ).toBe( 1 )
        expect( component.find( UserTable ).length ).toBe( 1 )

        done()
    } )
} )
