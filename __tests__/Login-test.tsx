import 'react-native';
import React from 'react';
import Login from '../src/scenes/login';
import {create, act} from 'react-test-renderer';
const login = create(<Login />);

it('login snapshot', () => {
  expect(login).toMatchSnapshot();
});

it('signup pressed', () => {
  //press the button
  const button = login.root.findByProps({testID: 'signup-button'}).props;
  act(() => button.onPress());
});
