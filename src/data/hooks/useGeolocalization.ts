import { useState, useEffect, useCallback } from "react";
import axios from "axios";
interface ILocationProps {
  city: string;
  state: string;
  error: string | null;
  latitude: number;
  longitude: number;
}
export const useTomTomGeolocation = () => {
  const [location, setLocation] = useState<ILocationProps>(() => {
    const locationValues = localStorage.getItem(
      "@ignite-coffe-delivery:location-values-1-0-1"
    );
    if (!locationValues)
      return {
        city: "",
        state: "",
        error: null,
        longitude: 0,
        latitude: 0,
      };

    const parsedValues = JSON.parse(locationValues);
    return {
      ...parsedValues,
    };
  });

  async function fetchPositionData(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords;
    const response = await axios.get(
      `https://api.tomtom.com/search/2/reverseGeocode/${latitude},${longitude}.json?&limit=1&key=${import.meta.env.VITE_KEY_API_TOM_TOM}`
    );
    const { municipality: city, countrySubdivisionCode: state } =
      response.data.addresses[0].address;
    const newLocation: ILocationProps = {
      city,
      state,
      latitude,
      longitude,
      error: null,
    };
    setLocation(newLocation);

    localStorage.setItem(
      "@ignite-coffe-delivery:location-values-1-0-1",
      JSON.stringify(newLocation)
    );
  }

  const callbackGetCurrentPosition = useCallback(async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => fetchPositionData(position),
        (error) => {
          const defaultValuesError = {
            city: "",
            state: "",
            latitude: 0,
            longitude: 0,
          };
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setLocation({
                ...defaultValuesError,
                error: "Usuário negou a solicitação de Geolocalização.",
              });
              break;
            case error.POSITION_UNAVAILABLE:
              setLocation({
                ...defaultValuesError,
                error: "As informações de localização não estão disponíveis.",
              });
              break;
            case error.TIMEOUT:
              setLocation({
                ...defaultValuesError,
                error: "A solicitação para obter a localização expirou.",
              });
              break;
            default:
              setLocation({
                ...defaultValuesError,
                error: "Ocorreu um erro.",
              });
              break;
          }
        }
      );
    }
  }, []);

  useEffect(() => {
    if (!location.city) callbackGetCurrentPosition();
  }, [callbackGetCurrentPosition, location]);

  return location;
};
