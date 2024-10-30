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
import { Client, Service } from '../../../types/Models';
import { useServices } from '../../../hooks/useService';

interface OpenChangeDetails {
  open: boolean;
}

interface EditServiceProps {
  open: boolean;
  setOpen: (open: OpenChangeDetails) => void;
  service: Service;
}

export const EditService = ({ open, setOpen, service }: EditServiceProps) => {
  const { updateService, fetchServices } = useServices();
  const [editData, setEditData] = useState<Service>({ ...service });

  const handleUpdate = async () => {
    if (!editData.serviceName || !editData.description) {
      alert('Por favor, completa todos los campos requeridos');
      return;
    }

    try {
      await updateService(editData.id!, editData);
      setOpen({ open: false });
      fetchServices;
    } catch (error) {
      console.error('Error al actualizar servicio:', error);
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
              Actualizar servicio
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
            <VStack gap={4}>
              <Input
                placeholder="Nombre del servicio"
                value={editData.serviceName}
                onChange={(e) =>
                  setEditData({ ...editData, serviceName: e.target.value })
                }
              />
              <Input
                placeholder="Descripción"
                value={editData.description}
                onChange={(e) =>
                  setEditData({ ...editData, description: e.target.value })
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
