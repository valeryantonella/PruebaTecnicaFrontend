import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    tokens: {
      colors: {
        primary: {
          100: { value: '#F1F5FE' },
          200: { value: '#7BA2F7' },
          300: { value: '#2D63D7' },
          400: { value: '#06276D' },
          500: { value: '#172951' },
          default: { value: '#06276D' },
        },
        secondary: {
          100: { value: '#F0F3FA' },
          200: { value: '#BEC8DE' },
          300: { value: '#95A2BF' },
          400: { value: '#57647F' },
          500: { value: '#293142' },
          default: { value: '#57647F' },
        },
        text: {
          100: { value: '#FFFFFF' },
          200: { value: '#D1D2D5' },
          300: { value: '#9B9C9E' },
          400: { value: '#636465' },
          500: { value: '#323233' },
          default: { value: '#636465' },
        },
        brand: {
          green: { value: '#94ba1d' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
