import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Table } from '@chakra-ui/react';
import { useServices } from '../../hooks/useService';
import { AddService } from './components/AddService';
import { EditService } from './components/EditService';
import { Service } from '../../types/Models';

const ServicePage = () => {
  const { services, deleteService } = useServices();
  const [isEdit, setIsEdit] = useState(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);
  const [open, setOpen] = useState(false);

  const openCreateDialog = () => {
    setCurrentService(null);
    setIsEdit(false);
    setOpen(true);
  };

  const openEditDialog = (service: Service) => {
    setCurrentService(service);
    setIsEdit(true);
    setOpen(true);
  };

  const handleSetOpen = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <>
      {isEdit && currentService ? (
        <EditService
          open={open}
          setOpen={handleSetOpen}
          service={currentService}
        />
      ) : (
        <AddService open={open} setOpen={handleSetOpen} />
      )}
      <Flex css={{ flexDir: 'column', margin: '50px', gap: '20px' }}>
        <Heading css={{ fontSize: '2xl' }}>Listado de servicios</Heading>
        <Flex css={{ justifyContent: 'space-between' }}>
          <Flex css={{ alignItems: 'center', color: 'text.default' }}>
            Presiona el botón para añadir un servicio
          </Flex>
          <Button
            onClick={openCreateDialog}
            css={{ width: '120px', bg: 'brand.green' }}
          >
            Añadir servicio
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
                Nombre del servicio
              </Table.ColumnHeader>
              <Table.ColumnHeader
                css={{
                  color: 'white',
                  textAlign: 'center',
                  height: '50px',
                }}
              >
                Descripción
              </Table.ColumnHeader>
              <Table.ColumnHeader
                css={{ color: 'white', textAlign: 'center', height: '50px' }}
              >
                Acciones
              </Table.ColumnHeader>
            </Table.Header>
            <Table.Body>
              {services.map((service) => (
                <Table.Row key={service.id}>
                  <Table.Cell
                    css={{ textAlign: 'center', color: 'text.default' }}
                  >
                    {service.serviceName}
                  </Table.Cell>
                  <Table.Cell
                    css={{ textAlign: 'center', color: 'text.default' }}
                  >
                    {service.description}
                  </Table.Cell>
                  <Table.Cell>
                    <Flex css={{ gap: '10px', justifyContent: 'center' }}>
                      <Button
                        onClick={() => openEditDialog(service)}
                        css={{ bg: 'brand.green', width: '80px' }}
                      >
                        Editar
                      </Button>
                      <Button
                        onClick={() => deleteService(service.id!)}
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

export default ServicePage;
