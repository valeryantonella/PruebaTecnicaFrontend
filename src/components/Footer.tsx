import React from 'react';
import { Flex, IconButton, Text, Box } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex
      css={{
        flexDirection: 'column',
        gap: 'xs',
        px: { base: 'md', lg: '3xl' },
        py: '15px',
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'brand.green',
      }}
    >
      <Flex css={{ flexDirection: 'column', color: 'text.300', gap: '3px' }}>
        <Text>Valery Antonella Vallejo Barrionuevo</Text>
        <Text>valery.antonella19@gmail.com</Text>
        <Text>+593 98 388 5744</Text>
      </Flex>
    </Flex>
  );
};
