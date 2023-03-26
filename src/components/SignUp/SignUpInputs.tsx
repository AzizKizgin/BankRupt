import React, {FC} from 'react';
import {Icon, Input, Text, VStack} from 'native-base';
import {strings} from '../../utils/strings';

interface SignUpInputsProps {
  username: string;
  setUsername: (username: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
}

const SignUpInputs: FC<SignUpInputsProps> = (props) => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = props;
  return (
    <VStack space={4}>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        keyboardType="number-pad"
      />
      <Input
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        keyboardType="number-pad"
      />
      <Text fontSize="sm" color="cyan.600" textAlign="center">
        {strings.passwordMustBeAtLeast}
      </Text>
    </VStack>
  );
};

export default SignUpInputs;
