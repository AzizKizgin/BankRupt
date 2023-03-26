import React, {useState} from 'react';
import {Box, Center, Text} from 'native-base';
import LoginTop from '../components/Login/LoginTop';
import LoginInput from '../components/Login/LoginInput';
import LoginBottom from '../components/Login/LoginBottom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Box flex={1} backgroundColor={'white'}>
      <LoginTop />
      <LoginInput
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <LoginBottom />
    </Box>
  );
};

export default Login;
