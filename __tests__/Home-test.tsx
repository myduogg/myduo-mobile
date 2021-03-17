import React from 'react';
import {create} from 'react-test-renderer';
import Home from '../src/scenes/home';

const home = create(<Home />);

it('home snapshot', () => {
  expect(home).toMatchSnapshot();
});
