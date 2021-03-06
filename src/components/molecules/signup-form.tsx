import React, {useState} from 'react';
import {View} from 'react-native';
import {Container, InputStyle} from '../../styles';
import {Input} from '../atoms';

const SignUpForm: React.FC = ({}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [genre, setGenre] = useState('');
  const [birthDate, setBirthDate] = useState('');
  return (
    <>
      <Input
        inputStyle={InputStyle.input.SIGNUP}
        placeholder={'Nome'}
        value={name}
        onChange={(text) => setName(text)}
      />
      <Input
        inputStyle={InputStyle.input.SIGNUP}
        placeholder={'Sobrenome'}
        value={lastName}
        onChange={(text) => setLastName(text)}
      />
      <View style={Container.container.ROW}>
        <Input
          inputStyle={[InputStyle.input.SIGNUP_SPLIT, {marginRight: '3%'}]}
          placeholder={'Gênero'}
          value={genre}
          onChange={(text) => setGenre(text)}
        />
        <Input
          inputStyle={InputStyle.input.SIGNUP_SPLIT}
          placeholder={'Data de nascimento'}
          value={birthDate}
          onChange={(text) => setBirthDate(text)}
        />
      </View>
    </>
  );
};
export default SignUpForm;
