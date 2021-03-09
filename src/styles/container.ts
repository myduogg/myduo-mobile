import {Dimensions, StyleSheet} from 'react-native';
import {LIGHT_GRAY, SMOOTH_ORANGE, WHITE} from './colors';
export const container = StyleSheet.create({
  FLEX: {
    flex: 1,
  },
  GENERAL: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ROW: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  LOGIN_CONTAINER: {
    flex: 1,
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height / 2 - 40,
    backgroundColor: WHITE,
    borderRadius: 10,
    paddingTop: '3%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    elevation: 8,
  },
  LINE: {
    margin: '5%',
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    width: '90%',
  },
  WHITE_LINE: {
    marginTop: '2%',
    borderWidth: 0.2,
    borderColor: WHITE,
    width: '95%',
    alignSelf: 'center',
  },
  SIGNUP: {
    width: '100%',
    height: Dimensions.get('window').height / 2 - 30,
    backgroundColor: SMOOTH_ORANGE,
    alignSelf: 'center',
    borderRadius: 8,
    elevation: 8,
  },
});
