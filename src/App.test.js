import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

test(`the App should render`, () => {
    const wrapper = shallow( <App /> )
    expect (wrapper).toMatchSnapshot();

})
