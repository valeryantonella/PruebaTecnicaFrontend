import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const HomePage = () => {
  return (
    <Flex
      flex="1"
      css={{
        px: { base: 'md', lg: '3xl' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Flex
        css={{
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <Heading css={{ color: 'brand.green', fontSize: '4xl' }}>
          Bienvenido a
        </Heading>
        <Image
          src="/img/logo-bit.png"
          alt="Not Found"
          css={{ width: '700px' }}
        />
        <Text
          css={{
            fontSize: 'lg',
            color: 'text.default',
            textAlign: 'center',
          }}
        >
          Prueba técnica - Valery Vallejo
        </Text>
      </Flex>
    </Flex>
  );
};
