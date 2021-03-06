import {StyleSheet} from 'react-native';
import {SMOOTH_ORANGE, WHITE} from './colors';
const SIZE_22 = 22;
const SIZE_18 = 18;
//const SIZE_16 = 16;

export const fonts = StyleSheet.create({
  GENERAL: {
    color: WHITE,
    fontSize: SIZE_22,
    letterSpacing: 4,
  },
  FORGET_PASSWORD: {
    color: SMOOTH_ORANGE,
    fontSize: SIZE_18,
    marginBottom: '3%',
  },
  SUBTITLE: {
    color: WHITE,
    fontSize: SIZE_18,
    letterSpacing: 3,
  },
});
