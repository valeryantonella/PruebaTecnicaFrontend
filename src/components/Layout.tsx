import { Flex } from '@chakra-ui/react';

import React, { ReactElement } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactElement;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex css={{ flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Flex
        flex="1"
        css={{
          flexDirection: 'column',
          my: 'xl',
        }}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
