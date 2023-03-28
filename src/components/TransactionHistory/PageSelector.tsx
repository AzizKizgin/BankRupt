import React from 'react';
import {Box, HStack, Icon, Pressable, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PageSelector = () => {
  return (
    <HStack space={1} alignItems="center" alignSelf="center" marginTop={12}>
      <Icon as={Ionicons} name="chevron-back" color="black" size={7} />
      {[1, 2, 3, 4, 5].map((item, index) => (
        <Pressable key={index}>
          <Box
            alignItems="center"
            justifyContent="center"
            width={6}
            height={6}
            rounded="full"
            bg={{
              linearGradient: {
                colors:
                  item === 2
                    ? ['cyan.600', 'cyan.400']
                    : ['gray.400', 'gray.300'],
                start: [1, 0],
                end: [0, 0],
              },
            }}>
            <Text fontSize="sm" color="white">
              {item}
            </Text>
          </Box>
        </Pressable>
      ))}
      <Icon as={Ionicons} name="chevron-forward" color="black" size={7} />
    </HStack>
  );
};

export default PageSelector;
