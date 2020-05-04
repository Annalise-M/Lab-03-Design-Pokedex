import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

test(`the header should render`, () => {
    const wrapper = shallow( <Header /> )
    expect (wrapper).toMatchSnapshot();

})
