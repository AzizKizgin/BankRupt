import React, {FC} from 'react';
import {Box, Input, Text, VStack} from 'native-base';
import Button from '../shared/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface LoginInputProps {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
}
const LoginInput: FC<LoginInputProps> = (props) => {
  const {username, setUsername, password, setPassword} = props;
  const navigation = useNavigation<NativeStackNavigationProp<AppParamList>>();
  const onPress = () => {
    navigation.navigate('App');
  };
  return (
    <Box alignItems="center" paddingY={12}>
      <VStack space={4}>
        <Input
          placeholder="Username or Email"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          keyboardType="number-pad"
        />
        <Button onPress={onPress} title="Login" />
      </VStack>
    </Box>
  );
};

export default LoginInput;
