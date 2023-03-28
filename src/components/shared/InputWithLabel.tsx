import React, {FC} from 'react';
import {Box, Input, Text} from 'native-base';

interface InputWithLabelProps {
  label: string;
  value: string;
  isPassword?: boolean;
  editable?: boolean;
}

const InputWithLabel: FC<InputWithLabelProps> = (props) => {
  const {label, value} = props;
  return (
    <Box>
      <Text fontSize={'md'} color={'darkBlue.900'}>
        {label.toUpperCase()}
      </Text>
      <Input
        value={value}
        height={10}
        secureTextEntry={props.isPassword}
        editable={props.editable}
      />
    </Box>
  );
};

export default InputWithLabel;
