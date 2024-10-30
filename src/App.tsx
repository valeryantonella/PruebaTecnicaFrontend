import React from 'react';

import { Box } from '@chakra-ui/react';
import { MainRouter } from './components/MainRouter';

export const App = () => {
  return (
    <Box
      css={{
        minHeight: '100vh',
        maxWidth: '8xl',
        px: { sm: 'md', md: 'none' },
        mx: 'auto',
        fontFamily: 'sans-serif',
      }}
    >
      <MainRouter />
    </Box>
  );
};
