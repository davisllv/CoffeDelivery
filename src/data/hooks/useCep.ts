/* eslint-disable @typescript-eslint/no-explicit-any */
// useCep.ts
import { useState } from "react";
import axios from "axios";

// Tipos para os dados de endereço retornados pela API
interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

// Hook personalizado para buscar endereço pelo CEP
const useCep = (cep: string) => {
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const buscarEndereco = async () => {
    if (!cep || cep.length !== 8) {
      setError("CEP inválido. O CEP deve ter 8 dígitos.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setError("CEP não encontrado.");
        setEndereco(null);
      } else {
        setEndereco(response.data);
      }
    } catch (error: any) {
      setError("Erro ao buscar o endereço. Tente novamente." + error);
      setEndereco(null);
    } finally {
      setLoading(false);
    }
  };

  return { endereco, loading, buscarEndereco, error };
};

export default useCep;
