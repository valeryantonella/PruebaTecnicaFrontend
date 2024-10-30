import React, { useState } from 'react';
import {
  Button,
  Input,
  VStack,
  DialogRoot,
  DialogBackdrop,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
  HStack,
} from '@chakra-ui/react';
import { useClients } from '../../../hooks/useClient';
import { Client } from '../../../types/Models';

interface OpenChangeDetails {
  open: boolean;
}

interface AddClientProps {
  open: boolean;
  setOpen: (open: OpenChangeDetails) => void;
}

export const AddClient = ({ open, setOpen }: AddClientProps) => {
  const { addClient, fetchClients } = useClients();
  const [newClient, setNewClient] = useState<Client>({
    clientName: '',
    email: '',
  });

  const handleSave = async () => {
    if (!newClient.clientName || !newClient.email) {
      alert('Por favor, completa todos los campos requeridos');
      return;
    }

    try {
      await addClient(newClient);
      setOpen({ open: false });
      fetchClients();
      setNewClient({ clientName: '', email: '' });
    } catch (error) {
      console.error('Error al añadir cliente:', error);
    }
  };

  return (
    <HStack height="full" gap="4">
      <DialogRoot
        open={open}
        onOpenChange={setOpen}
        placement="top"
        motionPreset="slide-in-bottom"
      >
        <DialogBackdrop />
        <DialogContent
          css={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '400px',
            p: '15px',
          }}
        >
          <DialogHeader>
            <DialogTitle css={{ color: 'brand.green', textAlign: 'center' }}>
              Añadir cliente
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
            <VStack gap={4}>
              <Input
                placeholder="Nombre del cliente"
                value={newClient.clientName}
                onChange={(e) =>
                  setNewClient({ ...newClient, clientName: e.target.value })
                }
              />
              <Input
                placeholder="Correo electrónico"
                value={newClient.email}
                onChange={(e) =>
                  setNewClient({ ...newClient, email: e.target.value })
                }
              />
            </VStack>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpen({ open: false })}
              css={{ width: '80px' }}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSave}
              css={{ bg: 'brand.green', width: '80px' }}
            >
              Añadir
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </HStack>
  );
};
