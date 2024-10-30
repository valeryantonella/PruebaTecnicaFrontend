import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  DialogRoot,
  Flex,
  Heading,
  Table,
  Text,
} from '@chakra-ui/react';
import { useClients } from '../../hooks/useClient';
import { AddClient } from './components/AddClient';
import { EditClient } from './components/EditClient';
import { Client } from '../../types/Models';

const ClientPage = () => {
  const { clients, deleteClient } = useClients();
  const [isEdit, setIsEdit] = useState(false);
  const [currentClient, setCurrentClient] = useState<Client | null>(null);
  const [open, setOpen] = useState(false);

  const openCreateDialog = () => {
    setCurrentClient(null);
    setIsEdit(false);
    setOpen(true);
  };

  const openEditDialog = (client: Client) => {
    setCurrentClient(client);
    setIsEdit(true);
    setOpen(true);
  };

  const handleSetOpen = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <>
      {isEdit && currentClient ? (
        <EditClient
          open={open}
          setOpen={handleSetOpen}
          client={currentClient}
        />
      ) : (
        <AddClient open={open} setOpen={handleSetOpen} />
      )}
      <Flex css={{ flexDir: 'column', margin: '50px', gap: '20px' }}>
        <Heading css={{ fontSize: '2xl' }}>Listado de clientes</Heading>
        <Flex css={{ justifyContent: 'space-between' }}>
          <Flex css={{ alignItems: 'center', color: 'text.default' }}>
            Presiona el botón para añadir un cliente
          </Flex>
          <Button
            onClick={openCreateDialog}
            css={{ width: '120px', bg: 'brand.green' }}
          >
            Añadir cliente
          </Button>
        </Flex>
        <Box>
          <Table.Root size="sm" showColumnBorder>
            <Table.Header css={{ bg: 'brand.green' }}>
              <Table.ColumnHeader
                css={{
                  color: 'white',
                  textAlign: 'center',
                  height: '50px',
                }}
              >
                Nombre del cliente
              </Table.ColumnHeader>
              <Table.ColumnHeader
                css={{
                  color: 'white',
                  textAlign: 'center',
                  height: '50px',
                }}
              >
                Correo electrónico
              </Table.ColumnHeader>
              <Table.ColumnHeader
                css={{ color: 'white', textAlign: 'center', height: '50px' }}
              >
                Acciones
              </Table.ColumnHeader>
            </Table.Header>
            <Table.Body>
              {clients.map((client) => (
                <Table.Row key={client.id}>
                  <Table.Cell
                    css={{ textAlign: 'center', color: 'text.default' }}
                  >
                    {client.clientName}
                  </Table.Cell>
                  <Table.Cell
                    css={{ textAlign: 'center', color: 'text.default' }}
                  >
                    {client.email}
                  </Table.Cell>
                  <Table.Cell>
                    <Flex css={{ gap: '10px', justifyContent: 'center' }}>
                      <Button
                        onClick={() => openEditDialog(client)}
                        css={{ bg: 'brand.green', width: '80px' }}
                      >
                        Editar
                      </Button>
                      <Button
                        onClick={() => deleteClient(client.id!)}
                        css={{ bg: 'red.600', width: '80px' }}
                      >
                        Eliminar
                      </Button>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Flex>
    </>
  );
};

export default ClientPage;
