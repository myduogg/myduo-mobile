import React from 'react';
import {TextInput} from 'react-native';

export interface Props {
  placeholder: string;
  inputStyle: object;
  secureTextEntry?: boolean;
  value: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<Props> = ({
  placeholder = 'placeholder',
  inputStyle,
  secureTextEntry = false,
  value,
  onChange,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={inputStyle}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default Input;
