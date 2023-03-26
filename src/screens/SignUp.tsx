import React, {useState} from 'react';
import {Box, Input, Text, VStack} from 'native-base';
import SignUpTop from '../components/SignUp/SignUpTop';
import {CheckBox} from '@aziz_kizgin/react-native-checkbox';
import Button from '../components/shared/Button';
import SignUpInputs from '../components/SignUp/SignUpInputs';
import TermsAndConditions from '../components/SignUp/TermsAndConditions';
import SignUpBottom from '../components/SignUp/SignUpBottom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  return (
    <Box flex={1} backgroundColor="white">
      <SignUpTop />
      <Box alignItems="center" paddingY={12}>
        <SignUpInputs
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
        <TermsAndConditions
          agreeToTerms={agreeToTerms}
          setAgreeToTerms={() => setAgreeToTerms(!agreeToTerms)}
        />
        <Button onPress={() => {}} title="Sign Up" />
        <SignUpBottom />
      </Box>
    </Box>
  );
};

export default SignUp;
