import React, {useEffect} from 'react';
import {Box, Image, Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AnimatedBox from '../components/shared/AnimatedBox';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {screenWidth} from '../utils/consts';

const SplashScreen = () => {
  const appNameLeft = useSharedValue(screenWidth);
  const textRight = useSharedValue(screenWidth);
  const imageScale = useSharedValue(0);

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: imageScale.value,
        },
      ],
    };
  });

  const appNameStyle = useAnimatedStyle(() => {
    return {
      left: appNameLeft.value,
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      right: textRight.value,
    };
  });

  useEffect(() => {
    appNameLeft.value = withTiming(0, {duration: 1000});
    textRight.value = withTiming(0, {duration: 1000});
    imageScale.value = withTiming(1, {duration: 1000});
  }, []);

  const navigation = useNavigation<NativeStackNavigationProp<AppParamList>>();
  setTimeout(() => {
    navigation.replace('Authentication');
  }, 2500);

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg={{
        linearGradient: {
          colors: ['darkBlue.900', 'darkBlue.800'],
          start: [0, 0],
          end: [0, 1],
        },
      }}>
      <VStack space={4} justifyContent="center" alignItems="center">
        <AnimatedBox style={imageStyle}>
          <Image
            source={require('../assets/images/bank.png')}
            alt="logo"
            tintColor={'white'}
            width={200}
            height={200}
            resizeMode="contain"
          />
        </AnimatedBox>
        <AnimatedBox style={appNameStyle}>
          <Text color="white" fontSize="4xl" fontWeight="bold">
            BankRupt
          </Text>
        </AnimatedBox>
        <AnimatedBox style={textStyle}>
          <Text color="white" fontSize="xl" fontWeight="bold">
            Your money is not safe anymore
          </Text>
        </AnimatedBox>
      </VStack>
    </Box>
  );
};

export default SplashScreen;
