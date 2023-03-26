import React, {FC} from 'react';
import {Box, Pressable, Text} from 'native-base';

interface ButtonProps {
  onPress: () => void;
  title: string;
}
const Button: FC<ButtonProps> = (props) => {
  const {onPress, title} = props;
  return (
    <Pressable onPress={onPress}>
      <Box
        alignSelf="center"
        width={24}
        height={9}
        borderRadius={5}
        alignItems="center"
        justifyContent="center"
        bg={{
          linearGradient: {
            colors: ['darkBlue.900', 'darkBlue.800'],
            start: [0, 0],
            end: [0, 1],
          },
        }}>
        <Text color="white" fontSize="sm">
          {title}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;
