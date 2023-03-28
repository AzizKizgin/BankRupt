import React, {FC} from 'react';
import {Box, Input, Text} from 'native-base';

interface InputWithLabelProps {
  label: string;
  value: string;
  isPassword?: boolean;
  editable?: boolean;
  height?: number;
}

const InputWithLabel: FC<InputWithLabelProps> = (props) => {
  const {label, value} = props;
  return (
    <Box>
      <Text fontSize={'md'} color={'darkBlue.900'} fontWeight={'500'}>
        {label.toUpperCase()}
      </Text>
      <Input
        value={value}
        height={props.height || 10}
        secureTextEntry={props.isPassword}
        editable={props.editable}
      />
    </Box>
  );
};

export default InputWithLabel;
