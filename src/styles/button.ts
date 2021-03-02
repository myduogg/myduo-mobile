import {StyleSheet, Dimensions} from 'react-native';
import {SMOOTH_ORANGE, STRONG_ORANGE} from './colors';

export const buttons = StyleSheet.create({
  LOGIN: {
    width: '80%',
    height: Dimensions.get('window').height / 15,
    backgroundColor: SMOOTH_ORANGE,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SIGNUP: {
    width: '80%',
    height: Dimensions.get('window').height / 15,
    backgroundColor: STRONG_ORANGE,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
