import React, {FC} from 'react';
import {Box, Center, Icon, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface CategoryProps {
  title: string;
  icon: string;
  color: string;
}

const Category: FC<CategoryProps> = (props) => {
  const {title, icon, color} = props;

  return (
    <Center marginX={2} marginY={6}>
      <Box
        height={100}
        width={100}
        rounded="full"
        bg={{
          linearGradient: {
            colors: [`${color}.500`, `${color}.700`],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        alignItems="center"
        justifyContent="center">
        <Icon as={MaterialCommunityIcons} name={icon} size={16} color="white" />
      </Box>
      <Text color="black" fontSize="md">
        {title}
      </Text>
    </Center>
  );
};

export default Category;
