import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App'

describe('App Test Suite', () => {
    it('Component Did Mount', ( done ) => {
        let component = shallow( <App /> )

        expect( component.length ).toBe( 1 )
        done()
    } )
} )
