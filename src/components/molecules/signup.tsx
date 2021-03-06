import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {Color, Container, Fonts, InputStyle} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, Button} from '../atoms';
import {ScrollView} from 'react-native-gesture-handler';

export interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const SignUp: React.FC<Props> = ({isVisible, setIsVisible}) => {
  // SignUp state
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [genre, setGenre] = useState('');
  const [birthDate, setBirthDate] = useState('');

  return (
    <Modal visible={isVisible} animationType={'fade'} transparent={true}>
      <View style={Container.container.MODAL_SIGNUP}>
        <View style={Container.container.ROW}>
          <View>
            <Text style={[Fonts.fonts.GENERAL, {marginTop: '3%'}]}>
              Cadastre-se
            </Text>
            <Text style={Fonts.fonts.SUBTITLE}>Encontre novas pessoas.</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setIsVisible(false);
            }}>
            <Icon name={'close'} size={40} color={Color.WHITE} />
          </TouchableOpacity>
        </View>
        <View style={Container.container.WHITE_LINE} />
        <ScrollView
          style={Container.container.FLEX}
          contentContainerStyle={Container.container.GENERAL}>
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
          <View>
            <Input
              inputStyle={InputStyle.input.SIGNUP}
              placeholder={'Gênero'}
              value={genre}
              onChange={(text) => setGenre(text)}
            />
            <Input
              inputStyle={InputStyle.input.SIGNUP}
              placeholder={'Data de nascimento'}
              value={birthDate}
              onChange={(text) => setBirthDate(text)}
            />
          </View>
          <Button description={'Continuar'} />
        </ScrollView>
      </View>
    </Modal>
  );
};
export default SignUp;
