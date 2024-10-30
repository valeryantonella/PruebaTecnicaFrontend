import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const NotFoundPage = () => {
  return (
    <Flex
      flex="1"
      css={{
        px: { base: 'md', lg: '25px' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Flex
        css={{
          flexDirection: 'column',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        <Image
          src="/img/not-found.png"
          alt="Not Found"
          css={{ width: '300px' }}
        />
        <Heading css={{ color: 'brand.green' }}>PÁGINA NO ENCONTRADA</Heading>
        <Text
          css={{
            color: 'text.default',
            textAlign: 'center',
          }}
        >
          Lo sentimos, la página que estás buscando no se encuentra disponible o
          fue eliminada.
        </Text>
      </Flex>
    </Flex>
  );
};
