import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Color, Container, Fonts, ButtonStyle} from '../../styles';
import {Button, ButtonIcon} from '../atoms';
import {ScrollView} from 'react-native-gesture-handler';
import {SignUpForm, SecondSignUpForm} from '../molecules';

export interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const SignUp: React.FC<Props> = ({setIsVisible}) => {
  // SignUp state
  const [isFirstForm, setIsFirstForm] = useState(true);
  return (
    <View style={Container.container.SIGNUP}>
      <View style={Container.container.ROW}>
        {isFirstForm ? (
          <View>
            <Text style={[Fonts.fonts.GENERAL, {marginTop: '3%'}]}>
              Cadastre-se
            </Text>
            <Text style={Fonts.fonts.SUBTITLE}>Encontre novas pessoas.</Text>
          </View>
        ) : (
          <ButtonIcon
            name={'arrow-left'}
            onPress={() => {
              setIsFirstForm(true);
            }}
            buttonStyle={{marginTop: '3%'}}
          />
        )}
        <ButtonIcon
          name={'close'}
          onPress={() => {
            setIsVisible(false);
          }}
          buttonStyle={{marginTop: '3%'}}
        />
      </View>
      <View style={Container.container.WHITE_LINE} />
      <ScrollView style={Container.container.FLEX}>
        <View style={Container.container.GENERAL}>
          {isFirstForm ? <SignUpForm /> : <SecondSignUpForm />}
          <Button
            description={isFirstForm ? 'CONTINUAR' : 'CADASTRE-SE'}
            buttonStyle={ButtonStyle.signUpButtons(
              Color.STRONG_GREEN,
              '5%',
              '3%',
            )}
            descriptionStyle={Fonts.fonts.GENERAL}
            onPress={() => {
              setIsFirstForm(false);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default SignUp;
