import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Container, Fonts, InputStyle} from '../../styles';
import {Input} from '../atoms';

const SecondSignUpForm: React.FC = ({}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [genre, setGenre] = useState('');
  const [birthDate, setBirthDate] = useState('');
  return (
    <>
      <View style={Container.container.ROW}>
        <Input
          inputStyle={[InputStyle.input.SIGNUP_SPLIT, {marginRight: '3%'}]}
          placeholder={'Celular'}
          value={name}
          onChange={(text) => setName(text)}
        />
        <Input
          inputStyle={InputStyle.input.SIGNUP_SPLIT}
          placeholder={'Email'}
          value={lastName}
          onChange={(text) => setLastName(text)}
        />
      </View>
      <Input
        inputStyle={InputStyle.input.SIGNUP}
        placeholder={'Senha'}
        value={genre}
        onChange={(text) => setGenre(text)}
      />
      <Input
        inputStyle={InputStyle.input.SIGNUP}
        placeholder={'Confirmar senha'}
        value={birthDate}
        onChange={(text) => setBirthDate(text)}
      />
      <View style={{width: '90%'}}>
        <Text style={Fonts.fonts.PRIVACY_POLICY}>
          Ao clicar em Cadastre-se, você concorda com nossos Termos, Política de
          Dados e Política de Cookies. Você poderá receber notificações por SMS
          e cancelar isso quando quiser.
        </Text>
      </View>
    </>
  );
};
export default SecondSignUpForm;
