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
  HStack,
} from '@chakra-ui/react';
import { useServices } from '../../../hooks/useService';
import { Service } from '../../../types/Models';

interface OpenChangeDetails {
  open: boolean; // You can add more properties if needed
}

interface AddServiceProps {
  open: boolean;
  setOpen: (open: OpenChangeDetails) => void;
}

export const AddService = ({ open, setOpen }: AddServiceProps) => {
  const { addService, fetchServices } = useServices();
  const [newService, setNewService] = useState<Service>({
    serviceName: '',
    description: '',
  });

  const handleSave = async () => {
    if (!newService.serviceName || !newService.description) {
      alert('Por favor, completa todos los campos requeridos');
      return;
    }

    try {
      await addService(newService);
      setOpen({ open: false });
      fetchServices();
      setNewService({ serviceName: '', description: '' });
    } catch (error) {
      console.error('Error al añadir servicio:', error);
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
              Añadir servicio
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
            <VStack gap={4}>
              <Input
                placeholder="Nombre del servicio"
                value={newService.serviceName}
                onChange={(e) =>
                  setNewService({ ...newService, serviceName: e.target.value })
                }
              />
              <Input
                placeholder="Descripcion"
                value={newService.description}
                onChange={(e) =>
                  setNewService({ ...newService, description: e.target.value })
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
