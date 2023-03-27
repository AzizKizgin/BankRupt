import React, {FC} from 'react';
import {Box, HStack, Modal, Text, VStack} from 'native-base';
import Button from '../shared/Button';
import {BackHandler} from 'react-native';

interface ExitAppModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
const ExitAppModal: FC<ExitAppModalProps> = (props) => {
  const {isOpen, setIsOpen} = props;
  const onCancelPress = () => {
    setIsOpen(false);
  };
  const onYesPress = () => {
    setIsOpen(false);
    BackHandler.exitApp();
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancelPress}
      _backdrop={{
        _pressed: {
          opacity: 0.3,
        },
      }}>
      <Box backgroundColor="gray.200" paddingY={4} w="80%" borderRadius={10}>
        <VStack space={2} justifyContent="center" alignItems="center">
          <Text fontSize="lg">Are you sure?</Text>
          <Text fontSize="sm">Do you want to exit the app?</Text>
          <HStack space={6} marginTop={4}>
            <Button title="Cancel" onPress={onCancelPress} />
            <Button title="Yes" onPress={onYesPress} />
          </HStack>
        </VStack>
      </Box>
    </Modal>
  );
};

export default ExitAppModal;
