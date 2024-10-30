import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import React from 'react';

export const Navbar = () => {
  return (
    <Box
      css={{
        boxShadow: '0px 2px var(--shadow-color)',
        shadowColor: 'secondary.100',
        py: '15px',
        px: '30px',
      }}
    >
      <Flex
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <NavLink to="/">
          <Image
            src="/img/logo-bit.png"
            alt="Logo BusinessIT"
            css={{ maxWidth: '150px' }}
          />
        </NavLink>

        <Flex
          css={{
            gap: '40px',
          }}
        >
          <NavLink
            to="/clients"
            style={{
              textDecoration: 'none',
              color: 'text.default',
            }}
          >
            Clientes
          </NavLink>
          <NavLink
            to="/services"
            style={{
              textDecoration: 'none',
              color: 'text.default',
            }}
          >
            Servicios
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};
