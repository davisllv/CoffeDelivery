import { useState } from "react";

export const useLoaderBackdrop = () => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return { isLoading, setLoading };
};
