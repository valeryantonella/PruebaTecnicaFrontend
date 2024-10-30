import React from 'react';
import { ChakraProvider, createSystem } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { system } from './theme/theme';
import { ThemeProvider } from 'next-themes';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ChakraProvider value={system}>
        <ThemeProvider disableTransitionOnChange>
          <App />
        </ThemeProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
} else {
  console.error("No element with id 'root' in the document.");
}
