import React, { useState } from 'react';
import {
  Button,
  Input,
  VStack,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogRoot,
  HStack,
  DialogBackdrop,
} from '@chakra-ui/react';
import { useClients } from '../../../hooks/useClient';
import { Client } from '../../../types/Models';

interface OpenChangeDetails {
  open: boolean;
}

interface EditClientProps {
  open: boolean;
  setOpen: (open: OpenChangeDetails) => void;
  client: Client;
}

export const EditClient = ({ open, setOpen, client }: EditClientProps) => {
  const { updateClient, fetchClients } = useClients();
  const [editData, setEditData] = useState<Client>({ ...client });

  const handleUpdate = async () => {
    if (!editData.clientName || !editData.email) {
      alert('Por favor, completa todos los campos requeridos');
      return;
    }

    try {
      await updateClient(editData.id!, editData);
      setOpen({ open: false });
      fetchClients;
    } catch (error) {
      console.error('Error al actualizar cliente:', error);
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
              Actualizar cliente
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
            <VStack gap={4}>
              <Input
                placeholder="Nombre del cliente"
                value={editData.clientName}
                onChange={(e) =>
                  setEditData({ ...editData, clientName: e.target.value })
                }
              />
              <Input
                placeholder="Correo electrónico"
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
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
              onClick={handleUpdate}
              css={{ bg: 'brand.green', width: '80px' }}
            >
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </HStack>
  );
};
