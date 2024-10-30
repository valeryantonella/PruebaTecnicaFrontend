import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://localhost:7218/api/Services';

export const useServices = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    try {
      const response = await axios.get(API_URL);
      setServices(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [services]);

  const addService = async (service: any) => {
    try {
      const response = await axios.post(API_URL, service);
      setServices((prev) => [...prev, response.data]);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(`Error: ${error.response.data.message || 'Solicitud no válida'}`);
      } else {
        console.error('Error desconocido:', error);
      }
    }
  };

  const updateService = async (id: number, updatedService: any) => {
    try {
      await axios.put(`${API_URL}/${id}`, updatedService);
      setServices((prev) =>
        prev.map((s) => (s.id === id ? updatedService : s))
      );
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(
          `Error: ${error.response.data.message || 'No se pudo actualizar el servicio'}`
        );
      } else {
        console.error('Error desconocido:', error);
      }
    }
  };

  const deleteService = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setServices((prev) => prev.filter((s) => s.id !== id));
    } catch (error) {
      console.error('Error al eliminar el servicio:', error);
    }
  };

  return {
    services,
    loading,
    error,
    addService,
    updateService,
    deleteService,
    fetchServices,
  };
};
