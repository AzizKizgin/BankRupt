import React, {FC} from 'react';
import {Center, Text, Pressable} from 'native-base';

interface TopButtonProps {
  title: string;
  selected?: boolean;
}

const TopButton: FC<TopButtonProps> = (props) => {
  const {title, selected = false} = props;
  return (
    <Pressable>
      <Center
        borderTopRadius={16}
        width={150}
        paddingY={2}
        bg={{
          linearGradient: {
            colors: selected
              ? ['cyan.500', 'cyan.300']
              : ['gray.500', 'gray.400'],
            start: [0, 0],
            end: [0, 1],
          },
        }}>
        <Text color="white" fontSize="md" textAlign="center">
          {title.toUpperCase()}
        </Text>
      </Center>
    </Pressable>
  );
};

export default TopButton;
