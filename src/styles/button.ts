import {StyleSheet, Dimensions} from 'react-native';
import {SMOOTH_ORANGE} from './colors';

export const buttons = StyleSheet.create({
  LOGIN: {
    width: '80%',
    height: Dimensions.get('window').height / 15,
    backgroundColor: SMOOTH_ORANGE,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const signUpButtons = (
  background: String,
  marginTop?: String,
  marginBottom?: String,
) => {
  return {
    width: '80%',
    height: Dimensions.get('window').height / 15,
    backgroundColor: background,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: marginTop,
    marginBottom: marginBottom,
  };
};
