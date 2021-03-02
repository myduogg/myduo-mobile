import {StyleSheet, Dimensions} from 'react-native';
import {SMOOTH_GRAY} from './colors';
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
});
