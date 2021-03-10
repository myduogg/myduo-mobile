import 'react-native';
import React from 'react';
import Login from '../src/scenes/login';
import {create, act} from 'react-test-renderer';
const login = create(<Login />);

it('snapshot', () => {
  expect(login).toMatchSnapshot();
});

it('signup pressed', () => {
  //press the button
  const button = login.root.findByProps({testID: 'signup-button'}).props;
  act(() => button.onPress());

  //expect text to euqal "Criar nova conta"
  const text = login.root.findByProps({textTestID: 'signup-text'}).props;
  expect(text.children).toEqual('Criar nova conta');
});
