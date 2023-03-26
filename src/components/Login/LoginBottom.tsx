import React from 'react';
import {Center, Pressable, Text} from 'native-base';
import {strings} from '../../utils/strings';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const LoginBottom = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationParamList>>();

  const navigateToForgetPassword = () => {
    navigation.navigate('ForgetPassword');
  };
  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <Center>
      <Pressable onPress={navigateToForgetPassword}>
        <Text color={'cyan.500'} underline={true} fontSize={14}>
          {strings.forgetPassword}
        </Text>
      </Pressable>
      <Pressable onPress={navigateToSignUp}>
        <Text color={'cyan.500'} underline={true} marginTop={1}>
          {strings.createAccount}
        </Text>
      </Pressable>
    </Center>
  );
};

export default LoginBottom;
