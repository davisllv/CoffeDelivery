/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CoffeContext } from "../contexts/CoffeShop/CoffeShopContext";

export const useCalculateShipping = () => {
  const { setShippingPrice, setShippingTime } = useContext(CoffeContext);

  const origemLat = import.meta.env.VITE_API_ORIGIN_LATITUDE;
  const origemLon = import.meta.env.VITE_API_ORIGIN_LONGITUDE;

  const apiKey = import.meta.env.VITE_KEY_API_TOM_TOM;

  const obtainCordinatesWithZipCode = async (cep: string) => {
    const response = await axios.get(
      `https://api.tomtom.com/search/2/geocode/${cep}.json`,
      {
        params: {
          key: apiKey,
          countryCode: "BR",
        },
      }
    );

    const data = response.data.results.find((result: any) => {
      return result.address.countryCode === "BR";
    });

    const { lat, lon } = data.position;
    return { lat, lon };
  };

  const calculateDistanceAndTime = async (
    origemLat: number,
    origemLon: number,
    destinoLat: number,
    destinoLon: number
  ) => {
    const response = await axios.get(
      `https://api.tomtom.com/routing/1/calculateRoute/${origemLat},${origemLon}:${destinoLat},${destinoLon}/json`,
      {
        params: {
          key: apiKey,
          travelMode: "car", // Modo de transporte (carro)
        },
      }
    );

    const rota = response.data.routes[0];
    const distancia = rota.summary.lengthInMeters / 1000;
    const tempo = rota.summary.travelTimeInSeconds;

    const tempoMinutos = Math.round(tempo / 60);

    return { distancia, tempo: tempoMinutos };
  };

  const calculateShipping = async (cepDestino: string) => {
    try {
      const { lat: destinoLat, lon: destinoLon } =
        await obtainCordinatesWithZipCode(cepDestino);

      const { distancia, tempo } = await calculateDistanceAndTime(
        origemLat,
        origemLon,
        destinoLat,
        destinoLon
      );

      const valorFrete = calculateShippingPrice(distancia);

      setShippingPrice(valorFrete);
      setShippingTime(tempo);
    } catch (error) {
      if (error instanceof Error)
        toast.error(
          "Erro ao calcular o frete. Tente novamente" + error.message
        );
    }
  };

  const calculateShippingPrice = (distancia: number) => {
    const valorPorKm = 2.5;
    return parseFloat((distancia * valorPorKm).toFixed(2));
  };

  return { calculateShipping };
};
