import { useState, useEffect } from 'react';
import axios from 'axios';
import { Client } from '../types/Models';

const API_URL = 'https://localhost:7218/api/Clients';

export const useClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setClients(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [clients]);

  const addClient = async (client: Client) => {
    try {
      const response = await axios.post(API_URL, client);
      setClients((prev) => [...prev, response.data]);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(`Error: ${error.response.data.message || 'Solicitud no válida'}`);
      } else {
        console.error('Error desconocido:', error);
      }
    }
  };

  const updateClient = async (id: number, updatedClient: Client) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedClient);
      setClients((prev) => prev.map((c) => (c.id === id ? response.data : c)));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(
          `Error: ${error.response.data.message || 'No se pudo actualizar el cliente'}`
        );
      } else {
        console.error('Error desconocido:', error);
      }
    }
  };

  const deleteClient = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setClients((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error('Error al eliminar el cliente:', error);
    }
  };

  return {
    clients,
    loading,
    error,
    addClient,
    updateClient,
    deleteClient,
    fetchClients,
  };
};
