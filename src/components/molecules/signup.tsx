import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const SignUp: React.FC<Props> = ({isVisible, setIsVisible}) => {
  return (
    <Modal visible={isVisible} animationType={'fade'}>
      <TouchableOpacity
        onPress={() => {
          setIsVisible(false);
        }}>
        <Icon name={'arrow-left'} size={30} />
      </TouchableOpacity>
      <View>
        <Text>SignUp</Text>
      </View>
    </Modal>
  );
};
export default SignUp;
