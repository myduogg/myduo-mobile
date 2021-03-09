import {StyleSheet, Dimensions} from 'react-native';
import {SMOOTH_GRAY, SMOOTH_ORANGE, WHITE} from './colors';
export const input = StyleSheet.create({
  LOGIN: {
    width: '80%',
    height: Dimensions.get('window').height / 15,
    borderRadius: 8,
    borderColor: SMOOTH_GRAY,
    borderWidth: 0.8,
    paddingLeft: 10,
    marginBottom: '5%',
  },
  SIGNUP: {
    width: '92%',
    height: Dimensions.get('window').height / 16,
    borderRadius: 8,
    backgroundColor: WHITE,
    borderColor: SMOOTH_ORANGE,
    borderWidth: 0.8,
    paddingLeft: 10,
    marginTop: '3%',
  },
  SIGNUP_SPLIT: {
    width: '44%',
    height: Dimensions.get('window').height / 16,
    borderRadius: 8,
    backgroundColor: WHITE,
    borderColor: SMOOTH_ORANGE,
    borderWidth: 0.8,
    paddingLeft: 10,
    marginTop: '3%',
  },
});
