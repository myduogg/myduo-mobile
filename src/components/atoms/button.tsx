import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export interface Props {
  description?: string;
  descriptionStyle?: object;
  buttonStyle?: object;
  onPress?: () => void;
  testID?: string;
  textTestID?: string;
}

const Button: React.FC<Props> = ({
  description,
  descriptionStyle,
  buttonStyle,
  onPress,
  testID,
  textTestID,
}) => {
  return (
    <TouchableOpacity testID={testID} onPress={onPress} style={buttonStyle}>
      <Text testID={textTestID} style={descriptionStyle}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
