import React from 'react';
import {Box, Image, Text} from 'native-base';

const QrCode = () => {
  return (
    <Box flex={1} backgroundColor={'white'}>
      <Box variant="screenTop" flex={1}>
        <Text color="white" fontSize="lg" marginBottom={4}>
          Scan QR Code
        </Text>
        <Image
          source={require('../assets/images/qrCode.png')}
          alt="QR Code"
          width={200}
          height={200}
          resizeMode="contain"
        />
      </Box>
    </Box>
  );
};

export default QrCode;
