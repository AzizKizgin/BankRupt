import React, {FC} from 'react';
import {Box, Text} from 'native-base';
import {CheckBox} from '@aziz_kizgin/react-native-checkbox';
import {strings} from '../../utils/strings';

interface TermsAndConditionsProps {
  agreeToTerms: boolean;
  setAgreeToTerms: () => void;
}
const TermsAndConditions: FC<TermsAndConditionsProps> = (props) => {
  const {agreeToTerms, setAgreeToTerms} = props;
  return (
    <Box
      marginTop={4}
      marginBottom={8}
      flexDirection="row"
      justifyContent="center"
      alignItems="center">
      <CheckBox
        colorScheme="navy"
        isChecked={agreeToTerms}
        onChange={setAgreeToTerms}
        size={15}
      />
      <Text fontSize="sm" color="cyan.600" marginLeft={2} underline={true}>
        {strings.agreeToTerms}
      </Text>
    </Box>
  );
};

export default TermsAndConditions;
