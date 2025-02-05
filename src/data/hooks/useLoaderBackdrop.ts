import { useState } from "react";

export const useLoaderBackdrop = (duration = 2000) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoadingEffect = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, duration);
  };

  const setLoading = () => {
    showLoadingEffect();
  };

  return { isLoading, setLoading };
};
