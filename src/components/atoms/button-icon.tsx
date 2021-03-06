import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface Props {
  name?: string;
  size?: number;
  color?: string;
  buttonStyle?: object;
  onPress?: () => void;
}

const Button: React.FC<Props> = ({
  name = 'arrow-left',
  size = 40,
  color = '#FFFFFF',
  buttonStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default Button;
