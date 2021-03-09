import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export interface Props {
  description?: string;
  descriptionStyle?: object;
  buttonStyle?: object;
  onPress?: () => void;
}

const Button: React.FC<Props> = ({
  description,
  descriptionStyle,
  buttonStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={descriptionStyle}>{description}</Text>
    </TouchableOpacity>
  );
};

export default Button;
