import React, {useState} from 'react';
import {Box, Image, Input, Text, VStack} from 'native-base';
import Button from '../components/shared/Button';
import {strings} from '../utils/strings';
import {useNavigation} from '@react-navigation/native';
import {useToast} from '@aziz_kizgin/react-native-toast-message';
const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const {showToast} = useToast();
  const onPress = () => {
    showToast({
      color: '#00e21',
      message: 'Reset link sent to your email',
    });
    navigation.goBack();
  };
  return (
    <Box flex={1} backgroundColor="white">
      <Box variant={'screenTop'} height={200}>
        <Image
          source={require('../assets/images/resetPassword.png')}
          alt="logo"
          width={100}
          height={100}
          resizeMode="contain"
          tintColor="white"
        />
      </Box>
      <Box alignItems="center" paddingY={12}>
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="darkBlue.900"
          marginBottom={8}>
          {strings.sendResetLink}
        </Text>
        <VStack space={4}>
          <Input placeholder="Email" value={email} onChangeText={setEmail} />
          <Button onPress={onPress} title="Send" />
        </VStack>
      </Box>
    </Box>
  );
};

export default ForgetPassword;
