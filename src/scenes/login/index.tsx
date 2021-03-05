import React, {useState} from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {
  ImagesStyles,
  Contanier,
  InputStyle,
  ButtonStyle,
  Fonts,
} from '../../styles';
import {Input, Button} from '../../components/atoms';
import {ScrollView} from 'react-native-gesture-handler';
import {SignUp} from '../../components/molecules';

const Background = require('../../assets/images/background.png');
const ShortLogo = require('../../assets/images/myduo-shortlogo.png');

const Login: React.FC = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  return (
    <ImageBackground source={Background} style={ImagesStyles.BACKGROUND}>
      <View style={Contanier.container.GENERAL}>
        <Image source={ShortLogo} style={ImagesStyles.SHORT_LOGO} />
        <ScrollView style={Contanier.container.FLEX}>
          <View style={Contanier.container.LOGIN_CONTAINER}>
            <Input
              placeholder={'Email'}
              inputStyle={InputStyle.input.LOGIN}
              value={email}
              onChange={(text) => setEmail(text)}
            />
            <Input
              placeholder={'Password'}
              inputStyle={InputStyle.input.LOGIN}
              value={password}
              onChange={(text) => setPassoword(text)}
              secureTextEntry={true}
            />
            <Button
              description={'Entrar'}
              onPress={() => {}}
              buttonStyle={ButtonStyle.buttons.LOGIN}
              descriptionStyle={Fonts.fonts.GENERAL}
            />
            <View style={Contanier.container.LINE} />
            <Button
              description={'Esqueceu a senha?'}
              onPress={() => {}}
              descriptionStyle={Fonts.fonts.FORGET_PASSWORD}
            />
            <Button
              description={'Criar nova conta'}
              onPress={() => setIsSignUpVisible(true)}
              buttonStyle={ButtonStyle.buttons.SIGNUP}
              descriptionStyle={Fonts.fonts.GENERAL}
            />
          </View>
        </ScrollView>
        <SignUp isVisible={isSignUpVisible} setIsVisible={setIsSignUpVisible} />
      </View>
    </ImageBackground>
  );
};
export default Login;
