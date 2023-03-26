import React from 'react';
import {Box, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SignUpBottom = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationParamList>>();
  const onPress = () => {
    navigation.navigate('Login');
  };
  return (
    <Text fontSize="sm" textAlign="center" marginTop={4}>
      Already have an account?{' '}
      <Text color="cyan.600" underline={true} onPress={onPress}>
        Login
      </Text>
    </Text>
  );
};

export default SignUpBottom;
